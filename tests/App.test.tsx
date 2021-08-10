
import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import App from '../App';
import Enzyme , {mount, shallow} from 'enzyme';
import { render, fireEvent, waitFor , act } from '@testing-library/react-native';
import user from '@testing-library/user-event'


import Adapter from 'enzyme-adapter-react-16';
import LoginScreen from '../src/screens/LoginScreen';
import { AuthContext , useAuthContext } from '../src/auth/context';
import LoginForm from '../LoginForm';
import validationSchema from '../src/screens/MainScreen/validationSchema';
import { Formik } from 'formik';

Enzyme.configure({ adapter: new Adapter() });
let realUseContext;
let useContextMock;
let loggedUser = null ; 
// Setup mock
beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
    React.useContext = realUseContext;
});


describe('<App />', () => {
  it('renders correctly, test using Jest + Enzyme', () => {
    expect(mount(
      <AuthContext.Provider value={{ user: loggedUser ,  useContextMock }}>
    <App/>
    </AuthContext.Provider>
    )).toMatchSnapshot();
  });

});
it('does not show error messages when input values are valid', async () => {

  const contextValues = { user: null };
  let promise = Promise.resolve() ; 
  const handleSubmit = jest.fn(()=> Promise.resolve())
  jest.spyOn(React, 'useContext').mockImplementation(() => ({
    user: null
  }));
  const myInitialState = false;

  React.useState = jest.fn().mockReturnValue([myInitialState, {}])

  const wrapper = shallow(<LoginForm
     handleSubmit={handleSubmit}
     validationSchema={validationSchema}
     loginFailed={false}
  />);
  let email = wrapper.find(`[testID="email"]`)
  let pass = wrapper.find(`[testID="password"]`)

  let submit = wrapper.find(`[type="submit"]`)
 await act(()=> promise )  ; 

 
  
});
it('renders correctly, test using Jest + Enzyme', () => {
  expect(mount(
    <AuthContext.Provider value={{ user: loggedUser ,  useContextMock }}>
  <App/>
  </AuthContext.Provider>
  )).toMatchSnapshot();
});


// it('is calling handle sumbit when click on button', async () => {

// const contextValues = { user: null };
// let promise = Promise.resolve() ; 
// let handleSubmit = jest.fn();
// jest.spyOn(React, 'useContext').mockImplementation(() => ({
//   user: null
// }));
// const myInitialState = false;

// React.useState = jest.fn().mockReturnValue([myInitialState, {}])
//   LoginForm.prototype.handleSubmit = jest.fn();

// const wrapper = shallow(<LoginForm
//    handleSubmit={handleSubmit}
//    validationSchema={validationSchema}
//    loginFailed={false}
// />);

// let email = wrapper.find(`[testID="email"]`)
// let pass = wrapper.find(`[testID="password"]`)
// let submit = wrapper.find(`[testID="LoginButton"]`);
// email.simulate('change', {
//   target: {
//       value: 'miqueias@gmail.com'
//   }
// });
// pass.simulate('change', {
// target: {
//     value: '122hghghgh3'
// }
// });
// console.log("thid is butons " , {...submit})
// await waitFor(() => {
//   submit.simulate("submit");});



 

// expect(handleSubmit).toBeCalled();
 



// });