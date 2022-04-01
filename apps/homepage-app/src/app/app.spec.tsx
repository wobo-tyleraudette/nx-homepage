/* eslint-disable react/jsx-pascal-case */
import { render } from '@testing-library/react';
import * as WoboAuthProvider from '@workboard/auth-ui';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './app'; 

// TODO: Look into global mocks
const children = ({children}: { children: React.ReactNode}) => <> {children}</>
jest.mock('@workboard/auth-ui', () => {
  const originalModule = jest.requireActual('@workboard/auth-ui');

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: children,
    useAuthNavigation: jest.fn().mockReturnValue([jest.fn().mockReturnValue('1'), jest.fn().mockReturnValue('22')])
  };
});


describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should call useAuthNavigation', async () => {
    const mockUseContext = jest.fn().mockImplementation(() => ({
      user: { name: 'test'},
    }));
    React.useContext = mockUseContext;
    
    render(
      <BrowserRouter>
      <WoboAuthProvider.default
        config={{
          proxyEndpoint: 'http://test.com',
          clientId: '123',
          authBaseEndpoint: 'http://test.com',
        }}>
        <App />
      </WoboAuthProvider.default>
      </BrowserRouter>
    );
    expect(WoboAuthProvider.useAuthNavigation).toHaveBeenCalled()
  });

  it('should call goToUser', async () => {
    const mockUseContext = jest.fn().mockImplementation(() => null);
    React.useContext = mockUseContext;
    render(
      <BrowserRouter>
      <WoboAuthProvider.default
        config={{
          proxyEndpoint: 'http://test.com',
          clientId: '123',
          authBaseEndpoint: 'http://test.com',
        }}>
        <App />
      </WoboAuthProvider.default>
      </BrowserRouter>
    );
    const [goToLogin] = WoboAuthProvider.useAuthNavigation();
    expect(goToLogin).toHaveBeenCalled()
  });
});
