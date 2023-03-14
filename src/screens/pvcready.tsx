import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import imageyy from "../components/Frame 11.png";

const Pvcr = () => {
    const [value, setValue] = React.useState('');
    return(
    <div className='h-screen flex-column items-center justify-center px-6 m-auto'>
        <h1 className='mb-4 font-bold text-2xl p-2'>Confirm Candidate</h1>
        <img className=' m-auto'src={imageyy} alt="Image" />
        <h2 className='text-center text-xl font-semibold p-3'>John Doe</h2>
        <p className=''>You have selected Atiku as your preferred Candidate.</p>
        <p className='mb-4'>Click the button to Submit</p>
           <Link to={'/pvcstatus'} className='w-full'>
        <Button label="Submit your vote" handleClick={() => {}} />
        </Link>
    </div>
        
    )
}
export default Pvcr