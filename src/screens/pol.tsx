import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import TextInput from '../components/textinput'
import Select from '../components/inputselect'
import imageToAdd from "../components/Frame 4.png";

 const Polling = () => {
    const [value, setValue] = React.useState('');
 return(
    <div className='h-screen flex-column items-center justify-center px-6'>
        <h2 className='font-bold my-5 text-2xl'>Select a vote</h2>
        <p>Click the button to vote</p>
        <div className='flex justify-content'>
        <img className='mb-4 mr-1'src={imageToAdd} alt="Image" />
        <img className='mb-4'src={imageToAdd} alt="Image" />
        </div>
        <div className='flex'>
        <img className='mb-4 mr-1'src={imageToAdd} alt="Image" />
        <img className='mb-4'src={imageToAdd} alt="Image" />
        </div>
    <Link to={'/succes'} className='w-full mt-5'>
            <Button label="See all" handleClick={() => {}} />
            </Link>
            <div>
                <h1 className='text-center mb-2 mt-2'>OR</h1>
                <h1 className='mb-2'>Enter vote code</h1>
                <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter vote code'/>
            </div>
    </div>
    
                          
    )
    
    }

export default Polling