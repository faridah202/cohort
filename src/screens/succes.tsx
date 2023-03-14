import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import imageToAdd from "../components/Frame 10.png";

const Success = () => {
    const [value, setValue] = React.useState('');
    return(
    <div className='h-screen flex-column items-center justify-center px-6 m-auto'>
      <div className='flex justify-content'>
        <p><img className=' 'src={imageToAdd} alt="Image" />John Doe</p>
        <p><img className=' 'src={imageToAdd} alt="Image" />John Doe</p>
        
        </div>
        <div className='flex justify-content'>
        <p><img className=' 'src={imageToAdd} alt="Image" />John Doe</p>
        <p><img className=''src={imageToAdd} alt="Image" />John Doe</p>
        </div>
           <Link to={'/pvcreg'} className='mt-2 w-full'>
        <Button label="Select" handleClick={() => {}} />
        </Link>
    </div>
        
    )
}
export default Success