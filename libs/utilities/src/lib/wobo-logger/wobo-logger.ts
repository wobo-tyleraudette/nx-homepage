import { Logger } from '@workboard/wobo-logger';

export const woboLogger = new Logger({
  level: process.env.NX_WB_LOG_LEVEL || `info`,
  label: process.env.NX_WB_LOG_LABEL,
  prettyPrint: true,
}).getLogger();
