// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

import { Route, Link } from 'react-router-dom';
import { User } from '@nx-homepage/ui';
import { Provider } from 'react-redux';
import { rootStore } from '@nx-homepage/store';
import { WoboAuthUserContext, useAuthNavigation } from '@workboard/auth-ui';
import { useContext, useEffect } from 'react';

const App = () => {
  console.log('--ap');
  const user = useContext(WoboAuthUserContext);
  console.log({ user });
  const [goToLogin] = useAuthNavigation();
  useEffect(() => {
    if (!user) {
      goToLogin();
    }
  }, [goToLogin, user]);

  return (
    <Provider store={rootStore}>
      <NxWelcome title="homepage-app" UserComponent={User} />
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated roossst route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </Provider>
  );
};

export default App;
