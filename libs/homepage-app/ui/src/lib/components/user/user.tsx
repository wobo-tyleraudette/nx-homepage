import { useContext } from 'react';
import { WoboAuthUserContext } from '@workboard/auth-ui';
import { SharedUi } from '@nx-homepage/shared-ui';

export function User() {
  const user = useContext(WoboAuthUserContext);
  return (
    <div>
      <SharedUi />
      <h1 className="test-class">Welcome {user?.firstName}</h1>
    </div>
  );
}
