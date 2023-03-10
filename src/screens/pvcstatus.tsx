import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import imageyy from "../components/Ellipse 181.png";

const Pvcs = () => {
    const [value, setValue] = React.useState('');
    return(
    <div className='h-screen flex-column items-center justify-center px-6 m-auto'>
        <h1 className='font-bold m-auto text-2xl'>PVC status</h1>
        <img className=' m-auto'src={imageyy} alt="Image" />
        <h1 className='font-bold m-auto text-2xl'>Hello,Jane Doe</h1>
        <p className='font-bold m-auto text-2xl'>20-19-02-020</p>
        <h2>Polling Unit</h2>
        <p className='border-8 bg-gray-1'>Rd HerTech Trail Street, Port Harcout, Rivers State</p>
        <h2>Collection Centre</h2>
        <p className='border-8 bg-gray-1'>Rd HerTech Trail Street, Port Harcout, Rivers State</p>
        <h2>Change collection centre? <a className='text' href='#'>Resend</a></h2>
           <Link to={'/'} className='w-full'>
        <Button label="Close" handleClick={() => {}} />
        </Link>
    </div>
        
    )
}
export default Pvcs