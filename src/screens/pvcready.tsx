import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import imageyy from "../components/Payment Successful.png";

const Pvcr = () => {
    const [value, setValue] = React.useState('');
    return(
    <div className='h-screen flex-column items-center justify-center px-6 m-auto'>
        <div className='bg-green-900 p-10'>
            <h1 className='text-white font-bold text-2xl'>Your PVC is Ready!</h1>
        </div>
        <h1 className='m-auto font-semibold text-2xl'>Hello Jane!</h1>
        <img className=' m-auto'src={imageyy} alt="Image" />
        <p className='p-2'>Your PVC is now ready for collection. 
            Click the button to check your designated collection center to find out where you can collect it</p>
           <Link to={'/pvcstatus'} className='w-full'>
        <Button label="Check Collation centre" handleClick={() => {}} />
        </Link>
    </div>
        
    )
}
export default Pvcr