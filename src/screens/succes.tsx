import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import imageToAdd from "../components/The character thumb up.png";

const Success = () => {
    const [value, setValue] = React.useState('');
    return(
    <div className='h-screen flex-column items-center justify-center px-6 m-auto'>
      <div className=''>
      <img className=' m-auto'src={imageToAdd} alt="Image" />
      <h1 className='font-bold m-auto mb-10 text-2xl'>Registration Succesful</h1>
        </div>
           <Link to={'/pvcreg'} className='w-full'>
        <Button label="Okay,Thanks" handleClick={() => {}} />
        </Link>
    </div>
        
    )
}
export default Success