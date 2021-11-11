import Login from './../../components/Login';
import { loginAction } from '../actions/loginAction';
import { connect } from 'react-redux';
import Authentication from '../../components/Authentication';

const mapStateToProps = (state) => {
  return {
    mobileNumber: state.login.mobileNumber,
    password: state.login.password,
    loginClicked: state.login.loginClicked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginHandler: (data) => dispatch(loginAction(data)),
  };
};

export default {
  loginConnect: connect(mapStateToProps, mapDispatchToProps)(Login),
  authenticationConnect: connect(mapStateToProps, mapDispatchToProps)(Authentication),
};
