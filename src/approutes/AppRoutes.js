import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import Login from './../redux/containers/logincontainer';
import SignUp from './../redux/containers/signupcontainer';
import DashBoard from '../components/Dashboard';
import About from '../components/About';
import Contact from '../components/Contact';

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login.loginConnect />} />
          <Route exact path='/signup' element={<SignUp.signUpConnect />} />
          <Route exact path='/dashboard' element={<DashBoard />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
export default AppRoutes;
