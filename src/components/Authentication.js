import { Navigate } from 'react-router-dom';
const Authentication = (props) => {
  return (
    <>
      {props.mobileNumber !== undefined && props.password !== undefined && (
        <Navigate to='/dashboard' />
      )}
    </>
  );
};
export default Authentication;
