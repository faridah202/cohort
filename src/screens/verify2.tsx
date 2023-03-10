import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import imageToAdd from "../components/messageicon.png";


 const Verify = () => {
    const [value, setValue] = React.useState('');
    return(
    <div className='h-screen flex-column items-center justify-center px-6'>
        <h1 className='font-bold my-5 text-2xl '>Verify Your Identity</h1>
        <p>Enter the 6-digit OTP sent to 0803xxxxxx94</p>
      <div className='mx-auto'>
      <img className='m-auto mb-5 mt-5' src={imageToAdd} alt="Image" />
      </div>
      <p className='px-2'>Didn't recieve an OTP?<Link to={'/confirm'} className='text-green-900'>
        Resend
        </Link></p>
      <p className='px-2'>Don't have access to 0803xxxxxx94? <a className='text-green-900' href="#">Click here</a></p>
           <Link to={'/confirm'} className='w-full'>
        <Button label="Verify Me" handleClick={() => {}} />
        </Link>
    </div>
        
    )
}
export default Verify