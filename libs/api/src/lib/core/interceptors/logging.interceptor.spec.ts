import {
  BadRequestException,
  HttpStatus,
  INestApplication,
  InternalServerErrorException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { CoreModule } from '../core.module';
import { CatsModule, woboLogger } from '@nx-homepage/utilities';

describe('Logging interceptor', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, CatsModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('logs the input and output request details - OK status code', async () => {
    const logSpy: jest.SpyInstance = jest.spyOn(woboLogger, 'info');
    const url = `/cats/ok`;
    await request(app.getHttpServer()).get(url).expect(HttpStatus.OK);

    const incomingMsg = `Incoming request - GET - ${url}`;
    const outgoingMsg = `Outgoing response - 200 - GET - ${url}`;

    expect(logSpy.mock.calls[0]).toEqual([
      expect.objectContaining({
        message: incomingMsg,
        method: 'GET',
      }),
    ]);

    expect(logSpy.mock.calls[1]).toEqual([
      expect.objectContaining({
        message: outgoingMsg,
      }),
    ]);
  });

  it('logs the input and output request details - BAD_REQUEST status code', async () => {
    const logSpy: jest.SpyInstance = jest.spyOn(woboLogger, 'info');
    const warnSpy: jest.SpyInstance = jest.spyOn(woboLogger, 'warn');
    const errorSpy: jest.SpyInstance = jest.spyOn(woboLogger, 'error');
    const url = `/cats/badrequest`;

    await request(app.getHttpServer()).get(url).expect(HttpStatus.BAD_REQUEST);

    const incomingMsg = `Incoming request - GET - ${url}`;
    const outgoingMsg = `Outgoing response - 400 - GET - ${url}`;

    /**
     * Info level
     */
    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy.mock.calls[0]).toEqual([
      expect.objectContaining({
        message: incomingMsg,
        method: `GET`,
        level: 'info',
      }),
    ]);

    expect(warnSpy).toBeCalledTimes(1);
    expect(warnSpy.mock.calls[0]).toEqual([
      expect.objectContaining({
        message: outgoingMsg,
        method: 'GET',
        url: '/cats/badrequest',
        level: 'warn',
        error: expect.any(BadRequestException),
      }),
    ]);
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('logs the input and output request details - INTERNAL_SERVER_ERROR status code', async () => {
    const logSpy: jest.SpyInstance = jest.spyOn(woboLogger, 'info');
    const warnSpy: jest.SpyInstance = jest.spyOn(woboLogger, 'warn');
    const errorSpy: jest.SpyInstance = jest.spyOn(woboLogger, 'error');
    const url = '/cats/internalerror';

    await request(app.getHttpServer())
      .get(url)
      .expect(HttpStatus.INTERNAL_SERVER_ERROR);

    const incomingMsg = `Incoming request - GET - ${url}`;
    const outgoingMsg = `Outgoing response - 500 - GET - ${url}`;

    /**
     * Info level
     */
    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy.mock.calls[0]).toEqual([
      expect.objectContaining({
        level: 'info',
        message: incomingMsg,
      }),
    ]);

    expect(errorSpy).toBeCalledTimes(1);
    expect(errorSpy.mock.calls[0]).toEqual([
      expect.objectContaining({
        error: {
          body: {},
          error: expect.any(InternalServerErrorException),
          message: outgoingMsg,
          method: 'GET',
          url: '/cats/internalerror',
        },
      }),
    ]);

    expect(warnSpy).not.toHaveBeenCalled();
  });

  it('logs non http errors', async () => {
    const errorSpy: jest.SpyInstance = jest.spyOn(woboLogger, 'error');
    const url = '/cats/error';

    await request(app.getHttpServer()).get(url);

    const outgoingMsg = `Outgoing response - GET - ${url}`;

    expect(errorSpy).toBeCalledTimes(1);
    expect(errorSpy.mock.calls[0]).toEqual([
      expect.objectContaining({
        error: {
          message: outgoingMsg,
        },
        stack: expect.any(String),
      }),
    ]);
  });
});
