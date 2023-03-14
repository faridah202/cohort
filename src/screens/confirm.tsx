import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import TextInput from '../components/textinput';
import imageyy from "../components/Ellipse 181.png";


 const Confirm = () => {
    const [value, setValue] = React.useState('');
    return(
    <div className='h-screen flex-column items-center justify-center px-6'>
        <h1 className='font-bold my-5 text-2xl'>Authentication</h1>
    <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter VIN'/>
     <Link to={'/pol'} className='w-full'>
        <Button label="Login and vote" handleClick={() => {}} />
        </Link>
    </div>
        
    )
}
export default Confirm