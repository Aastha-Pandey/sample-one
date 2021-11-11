import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from './../redux/containers/logincontainer';
import SignUp from './../redux/containers/signupcontainer';
import DashBoard from '../components/Dashboard';
import About from '../components/About';
import Contact from '../components/Contact';
import Auth from './../redux/containers/logincontainer';

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login.loginConnect />} />
          <Route exact path='/signup' element={<SignUp.signUpConnect />} />
          <Route
            exact
            path='/contact'
            element={
              <Auth.authConnect>
                <Contact />
              </Auth.authConnect>
            }
          ></Route>
          <Route
            exact
            path='/dashboard'
            element={
              <Auth.authConnect>
                <DashBoard />
              </Auth.authConnect>
            }
          ></Route>
          <Route
            exact
            path='/about'
            element={
              <Auth.authConnect>
                <About />
              </Auth.authConnect>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
};
export default AppRoutes;
