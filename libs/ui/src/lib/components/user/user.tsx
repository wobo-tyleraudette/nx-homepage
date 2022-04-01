import { useContext } from 'react';
import { WoboAuthUserContext } from '@workboard/auth-ui';

export function User() {
  const user = useContext(WoboAuthUserContext);
  return <h1 className="test-class">Welcome {user?.firstName}</h1>;
}
