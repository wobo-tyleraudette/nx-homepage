import * as dotenv from 'dotenv';
dotenv.config();

import { WoboProxyInstance } from '@workboard/auth-proxy';

WoboProxyInstance.init({
  port: Number(process.env.NX_NODE_PORT) || 4000,
  woboBaseUrl: 'https://okrcanvas.dt.wobo-int.com',
  sharedSecret: 'cokie_secret',
  allowOrigin: '*',
  cookieOptions: {
    maxAge: 60 * 60 * 1000,
    secure: false,
    domain: '',
    path: '/',
  },
  loggerOptions: {
    level: 'silly',
    silent: false,
    isCloud: false,
  },
  woboToken: process.env.NX_NODE_PROXY_TOKEN || '',
  mainRoutesPath: process.env.NX_HOMEPAGE_APP_URL,
  proxySecretHeader: '',
  proxySecret: '',
  apiBaseUrl: process.env.NX_HOMEPAGE_API_URL,
  encryptionSecret: '',
});

export const start = () => {
  WoboProxyInstance.start();
};
