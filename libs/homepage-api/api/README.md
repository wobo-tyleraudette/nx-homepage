**This library contains all the logic for api calls to and from homepage-api.**

## Modules

This application is built using [nestjs modules](https://docs.nestjs.com/modules)

- Each app has a single `app.module.ts` file where it's dependencies are injected
- All other modules live under `libs/homepage-api-api` for external requests & `libs/data` for db queries.
- The @Module() decorator takes a single object whose properties describe the module:

  1. Providers: the providers that will be instantiated by the Nest injector and that may be shared at least across this module
  2. Controllers: the set of controllers defined in this module which have to be instantiated
  3. Imports: the list of imported modules that export the providers which are required in this module
  4. Exports: the subset of providers that are provided by this module and should be available in other modules which import this module. You can use either the provider itself or just its token (provide value)

- They are injected into the app module like so:

```
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserModule, CoreModule } from '@nx-homepage/homepage-api-api';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule, CoreModule, UserModule],
  exports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
