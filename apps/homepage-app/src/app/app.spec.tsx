import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(getByText(/Welcome/gi)).toBeTruthy();
  });

  // it('should call useAuthNavigation', () => {
  //   const { baseElement } = render(
  //     <BrowserRouter>
  //     <WoboAuthProvider.default
  //       config={{
  //         proxyEndpoint: '',
  //         clientId: '',
  //         authBaseEndpoint: '',
  //       }}>
  //       <App />
  //     </WoboAuthProvider.default>
  //     </BrowserRouter>
  //   );

  //   expect(baseElement).toBeTruthy();
  // });
});
