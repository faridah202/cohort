import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import imageyy from "../components/Ellipse 6.png";

const Pvcs = () => {
    return(
    <div className='h-screen flex-column items-center justify-center px-6 m-auto'>
        <img className='p-3 m-auto'src={imageyy} alt="Image" />
        <h1 className='font-semibold text-xl text-center mb-2'>Vote successful!</h1>
        <p className='text-center mb-3'>Your vote has been succesfully submitted</p>
           <Link to={'/'} className='w-full'>
        <Button label="Okay, got it" handleClick={() => {}} />
        </Link>
    </div>
        
    )
}
export default Pvcs