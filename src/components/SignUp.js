import React from 'react';
import { Navigate } from 'react-router-dom';

class SignUp extends React.Component {
  render() {
    return (
      <>
        {this.props.signupClicked &&
          this.props.name !== undefined &&
          this.props.mobileNumber !== undefined &&
          this.props.password !== undefined && <Navigate to='/dashboard' />}
        <div className='w-full max-w-xs'>
          <form className='bg-blue-50  shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div class='mb-4'>
              <label class='block text-gray-700 text-sm font-bold mb-2' for='name'>
                Name
              </label>
              <input
                required
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
                required
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
                required
                onChange={(event) => {
                  this.props.signUpHandler({
                    ...this.props,
                    password: event.target.value,
                  });
                }}
                className='shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='******************'
              />
            </div>
            <div class='flex items-center justify-between'>
              <button
                onClick={() => {
                  if (this.props.name && this.props.mobileNumber && this.props.password) {
                    this.props.signUpHandler({
                      ...this.props,
                      signupClicked: true,
                    });
                  } else {
                    alert('Fill the form!');
                  }
                }}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
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
