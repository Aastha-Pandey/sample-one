import SignUp from './../../components/SignUp';
import { signUpAction } from '../actions/signupAction';
import { connect } from 'react-redux';
import Authentication from '../../components/Authentication';

const mapStateToProps = (state) => {
  return {
    name: state.signup.name,
    mobileNumber: state.signup.mobileNumber,
    password: state.signup.password,
    signupClicked: state.signup.signupClicked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpHandler: (data) => dispatch(signUpAction(data)),
  };
};

export default {
  signUpConnect: connect(mapStateToProps, mapDispatchToProps)(SignUp),
  authenticationConnect: connect(mapStateToProps, mapDispatchToProps)(Authentication),
};
