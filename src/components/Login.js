import { Navigate } from 'react-router-dom';
const Login = (props) => {
  return (
    <>
      {props.loginClicked && props.mobileNumber !== undefined && props.password !== undefined && (
        <Navigate to='/dashboard' />
      )}
      <div class='w-full max-w-xs '>
        <form class='bg-blue-50 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div class='mb-4'>
            <label class='block text-gray-700 text-sm font-bold mb-2' for='mobilenumber'>
              Mobile Number
            </label>
            <input
              required
              onChange={(event) =>
                props.loginHandler({
                  ...props,
                  mobileNumber: event.target.value,
                })
              }
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='mobilenumber'
              type='text'
              placeholder='Mobile Number'
            />
          </div>
          <div class='mb-6'>
            <label class='block text-gray-700 text-sm font-bold mb-2' for='password'>
              Password
            </label>
            <input
              required
              onChange={(event) =>
                props.loginHandler({
                  ...props,
                  password: event.target.value,
                })
              }
              class='shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='******************'
            />
          </div>
          <div class='flex items-center justify-between'>
            <button
              onClick={() => {
                if (props.mobileNumber && props.password) {
                  props.loginHandler({
                    ...props,
                    loginClicked: true,
                  });
                } else {
                  alert('Fill the details!');
                }
              }}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
