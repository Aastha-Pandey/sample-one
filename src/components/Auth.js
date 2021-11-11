import { Navigate, useLocation } from 'react-router-dom';
import Contact from './Contact';
import DashBoard from './Dashboard';
import About from './About';
const Auth = (props) => {
  let location = useLocation();

  const switchTabs = () => {
    switch (location.pathname) {
      case '/dashboard':
        return <DashBoard />;
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
    }
  };
  return (
    <>
      {props.mobileNumber === undefined && props.password === undefined ? (
        <Navigate to='/' />
      ) : (
        <> {switchTabs()}</>
      )}
    </>
  );
};

export default Auth;
