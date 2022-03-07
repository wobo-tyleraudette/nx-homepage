import { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './user.module.scss';
import { mapDispatchToProps, mapStateToProps, UserProps } from './user.props';

export function User({ user, setUser }: UserProps) {
  useEffect(() => {
    setUser();
  }, [setUser]);
  return (
    <div className={styles['container']}>
      <h1>Welcome {user?.name}</h1>
    </div>
  );
}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);
