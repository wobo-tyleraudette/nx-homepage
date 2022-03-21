import { userActions } from '@nx-homepage/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from '@nx-homepage/store';
import { IUser } from '@nx-homepage/models';

export function User() {
  const user: IUser | undefined = useSelector(userSelectors.getUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.fetchUser());
  }, [dispatch]);

  return <h1>Welcome {user?.name}</h1>;
}
