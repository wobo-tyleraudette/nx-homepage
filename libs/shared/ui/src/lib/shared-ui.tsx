import styles from './shared-ui.module.scss';
import { useContext } from 'react';
import { WoboAuthUserContext } from '@workboard/auth-ui';
/* eslint-disable-next-line */
export interface SharedUiProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SharedUi(props: SharedUiProps) {
  const user = useContext(WoboAuthUserContext);
  console.log({ user });
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedUi!</h1>
    </div>
  );
}

export default SharedUi;
