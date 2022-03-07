import { RootState, userActions, userSelectors } from '@nx-homepage/store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, void, AnyAction>
) => {
  return {
    setUser() {
      dispatch(userActions.fetchUser());
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    user: userSelectors.getUser(state),
  };
};

type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
type mapStateToPropsType = ReturnType<typeof mapStateToProps>;

type UserProps = mapDispatchToPropsType & mapStateToPropsType;

export { mapStateToProps, mapDispatchToProps, UserProps };
