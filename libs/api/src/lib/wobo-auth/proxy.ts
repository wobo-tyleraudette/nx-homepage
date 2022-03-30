import { WoboProxyInstance } from '@workboard/auth-proxy';

WoboProxyInstance.init({
  port: Number(process.env.NX_NODE_PORT) || 4000,
  woboBaseUrl: process.env.NX_WB_BASE_URL,
  sharedSecret: process.env.NX_SHARED_SECRET,
  allowOrigin: process.env.NX_HOMEPAGE_APP_URL,
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
  mainRoutesPath: '',
  proxySecretHeader: '',
  proxySecret: '',
  apiBaseUrl: process.env.NX_HOMEPAGE_API_URL, //NODEJS-CREDENTIAL-WB-INTERNAL-TOKEN
  encryptionSecret: process.env.NX_ENCRYPTION_SECRET,
});

export const startAuthServer = () => {
  WoboProxyInstance.start();
};

// two seperate users who need to create integration callbacks - one points to squad dev - one points to local host
