import { combineReducers } from 'redux';
import signup from './../reducers/signup';
import login from './../reducers/login';

const root = combineReducers({ signup, login });

export default root;
