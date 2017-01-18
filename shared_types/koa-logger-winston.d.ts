import * as Koa from 'koa';

declare var koaLoggerWinston: koaLoggerWinston.KoaLoggerWinston;
export = koaLoggerWinston;

declare namespace koaLoggerWinston {

  interface KoaLoggerWinston {
    (winstonInstance: any): any;
  }
}
