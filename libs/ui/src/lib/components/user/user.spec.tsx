import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { User } from './user';
import * as redux from 'react-redux';

jest.spyOn(redux, 'useSelector').mockReturnValue({ name: 'test name' });
jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn());

describe('User', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<User />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const component = renderer.create(<User />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
