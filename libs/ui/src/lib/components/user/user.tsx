import { userActions } from '@nx-homepage/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from '@nx-homepage/store';
import styles from './user.module.scss';

export function User() {
  const user = useSelector(userSelectors.getUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.fetchUser());
  }, [dispatch]);

  return (
    <div className={styles['container']}>
      <h1>Welcome {user?.name}</h1>
    </div>
  );
}
