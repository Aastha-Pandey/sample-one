import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from './../redux/containers/logincontainer';

import SignUp from './../redux/containers/signupcontainer';

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login.loginConnect />} />
          <Route exact path='/signup' element={<SignUp.signUpConnect />} />
        </Routes>
      </Router>
    </>
  );
};
export default AppRoutes;
