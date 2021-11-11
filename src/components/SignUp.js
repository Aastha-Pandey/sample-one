import React from 'react';

class SignUp extends React.Component {
  render() {
    return (
      <>
        <div className='w-full max-w-xs'>
          <form className='bg-blue-50 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div class='mb-4'>
              <label class='block text-gray-700 text-sm font-bold mb-2' for='name'>
                Name
              </label>
              <input
                onChange={(event) => {
                  this.props.signUpHandler({
                    ...this.props,
                    name: event.target.value,
                  });
                }}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type='text'
                placeholder='Name'
              />
            </div>
            <div class='mb-4'>
              <label class='block text-gray-700 text-sm font-bold mb-2' for='mobilenumber'>
                Mobile number
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='mobilenumber'
                type='text'
                placeholder='Mobile Number'
                onChange={(event) => {
                  this.props.signUpHandler({
                    ...this.props,
                    mobileNumber: event.target.value,
                  });
                }}
              />
            </div>
            <div class='mb-6'>
              <label class='block text-gray-700 text-sm font-bold mb-2' for='password'>
                Password
              </label>
              <input
                onChange={(event) => {
                  this.props.signUpHandler({
                    ...this.props,
                    password: event.target.value,
                  });
                }}
                className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='******************'
              />
              <p class='text-red-500 text-xs italic'>Please choose a password.</p>
            </div>
            <div class='flex items-center justify-between'>
              <button
                class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='button'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SignUp;
