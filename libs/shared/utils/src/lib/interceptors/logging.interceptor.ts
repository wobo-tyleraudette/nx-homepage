import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { woboLogger } from '../wobo-logger';
import { ILogger } from '@workboard/wobo-logger';

/**
 * Interceptor that logs input/output requests
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger: ILogger = woboLogger;
  /**
   * Intercept method, logs before and after the request being processed
   * @param context details about the current request
   * @param call$ implements the handle method that returns an Observable
   */
  public intercept(
    context: ExecutionContext,
    call$: CallHandler
  ): Observable<unknown> {
    const req: Request = context.switchToHttp().getRequest();
    const { method, url } = req;
    const message = `Incoming request - ${method} - ${url}`;

    this.logger.info({
      message,
      method,
    });

    return call$.handle().pipe(
      tap({
        next: (): void => {
          this.logNext(context);
        },
        error: (err: Error): void => {
          this.logError(err, context);
        },
      })
    );
  }

  /**
   * Logs the request response in success cases
   * @param context details about the current request
   */
  private logNext(context: ExecutionContext): void {
    const req: Request = context.switchToHttp().getRequest<Request>();
    const res: Response = context.switchToHttp().getResponse<Response>();
    const { method, url } = req;
    const { statusCode } = res;
    const message = `Outgoing response - ${statusCode} - ${method} - ${url}`;
    this.logger.info({
      message,
    });
  }

  /**
   * Logs the request response in error cases
   * @param error Error object
   * @param context details about the current request
   */
  private logError(error: Error, context: ExecutionContext): void {
    const req: Request = context.switchToHttp().getRequest<Request>();
    const { method, url, body } = req;
    if (error instanceof HttpException) {
      const statusCode: number = error.getStatus();
      const message = `Outgoing response - ${statusCode} - ${method} - ${url}`;
      if (statusCode >= HttpStatus.INTERNAL_SERVER_ERROR) {
        this.logger.error({
          error: {
            method,
            url,
            body,
            message,
            error,
          },
          stack: error.stack,
        });
      } else {
        this.logger.warn({
          method,
          url,
          error,
          body,
          message,
        });
      }
    } else {
      this.logger.error({
        error: {
          message: `Outgoing response - ${method} - ${url}`,
        },
        stack: error.stack,
      });
    }
  }
}
