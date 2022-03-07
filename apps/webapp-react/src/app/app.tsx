// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

import { Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserContainer } from '@nx-homepage/ui';
import { Provider } from 'react-redux';
import { rootStore } from '@nx-homepage/store';

export function App() {
  const [demo, setdemo] = useState<{ message: string }>({ message: '' });

  useEffect(() => {
    fetch('/api/demo')
      .then((t) => t.json())
      .then(setdemo);
  }, []);
  return (
    <Provider store={rootStore}>
      <NxWelcome title="webapp-react" message={demo.message} />
      <div />
      <UserContainer />

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
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </Provider>
  );
}

export default App;
