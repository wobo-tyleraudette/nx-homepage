import { userActions } from '@nx-homepage/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from '@nx-homepage/store';

export function User() {
  const user = useSelector(userSelectors.getUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.fetchUser());
  }, [dispatch]);

  return <h1>Welcome {user?.name}</h1>;
}
