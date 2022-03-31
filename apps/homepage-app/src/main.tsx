import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WoboAuthProvider from '@workboard/auth-ui';
import App from './app/app';
import { config } from './config/config';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <WoboAuthProvider
        config={{
          proxyEndpoint: config.NX_AUTH_PROXY_URI,
          clientId: config.NX_HOMEPAGE_APP_CLIENT_ID,
          authBaseEndpoint: config.NX_WB_BASE_URL,
        }}
      >
        <App />
      </WoboAuthProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

console.log(JSON.stringify(config, null, 2));
