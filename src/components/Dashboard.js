import { Link } from 'react-router-dom';

const DashBoard = () => {
  return (
    <>
      <div className='bg-blue-50 h-screen flex justify-center items-center'>
        <div className='flex space-x-4'>
          <Link
            to='/about'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            About
          </Link>
          <Link
            to='/contact'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
