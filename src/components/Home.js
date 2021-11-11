import { useState } from 'react';
import SignUp from './../redux/containers/signupcontainer';
import Login from './../redux/containers/logincontainer';
const HomeComponent = () => {
  const [loginButtonClicked, setLoginButtonClicked] = useState();
  return (
    <>
      <div className='bg-blue-300 relative h-screen flex items-center justify-around py-32'>
        <div className='bg-blue-50 absolute h-5/6 w-11/12 grid grid-cols-2 rounded-lg '>
          <div className='flex justify-center items-center h-screen md:h-auto lg:h-auto'>
            {loginButtonClicked ? (
              <div className='flex flex-col'>
                <Login.loginConnect />
                <div className='flex space-x-4'>
                  <p class='text-left text-gray-500 text-xs pb-4 '>Not a member?</p>
                  <button
                    onClick={() => setLoginButtonClicked(false)}
                    class='font-semibold text-blue-900 border border-r-0 border-l-0 border-t-0 border-blue-900 text-sm self-start'
                    type='button'
                  >
                    Sign up
                  </button>
                </div>
              </div>
            ) : (
              <div className='flex flex-col'>
                <SignUp.signUpConnect />
                <div className='flex space-x-4'>
                  <p class='text-left text-gray-500 text-xs pb-4 '>Already a member?</p>
                  <button
                    onClick={() => setLoginButtonClicked(true)}
                    class='font-semibold text-blue-900 border border-r-0 border-l-0 border-t-0 border-blue-900 text-sm self-start'
                    type='button'
                  >
                    Login
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className='bg-blue-700 hidden rounded-lg md:flex md:flex-col lg:flex lg:flex-col justify-center '>
            <div className='flex justify-between'>
              <div className='flex space-x-4'>
                <div className='bg-yellow-500 -translate-y-7  rounded-sm -translate-x-10 w-24 h-40 transform  skew-y-12 ...'></div>
                <div className='bg-yellow-300  rounded-sm -translate-x-10 w-12 h-20 transform  skew-y-12 ...'></div>
              </div>

              <div className='bg-blue-900 rounded-sm -translate-x-24  w-24 h-40 transform skew-y-12 ...'>
                <img
                  className='absolute rounded-sm  -translate-x-6 w-24 h-40  -my-6 transform skew-y-1 ...'
                  src='https://images.unsplash.com/photo-1636146321825-c8dd069be6ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                  alt='camera'
                />
              </div>
            </div>

            <p className='text-blue-50  flex flex-col place-self-center text-3xl font-semibold '>
              Explore your creativity
              <p className='text-blue-50 text-sm pt-5 font-normal'>
                Discover new skills, meet passionate teachers
                <br />
                and become a part of the most helpful community
                <br /> of creatives in the world.
              </p>
            </p>
            <div className='flex justify-between'>
              <div className='flex space-x-8'>
                <div className='bg-blue-400 relative rounded-sm -translate-x-6 translate-y-5 w-24 h-40 transform  skew-y-12 ...'>
                  <img
                    className='absolute rounded-sm  -translate-x-6 w-24 h-40  -my-8 transform skew-y-1 ...'
                    src='https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
                    alt='a laptop'
                  />
                </div>
                <div className='bg-blue-400 self-end rounded-sm -translate-x-10 w-12 h-20 transform  skew-y-12 ...'></div>
              </div>
              <div className='flex'>
                <div className='bg-blue-900 rounded-sm -translate-x-24 translate-y-8 w-24 h-40 transform skew-y-12 ...'></div>

                <div className='bg-blue-900  rounded-sm -translate-x-10 w-12 h-20 transform  skew-y-12 ...'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
