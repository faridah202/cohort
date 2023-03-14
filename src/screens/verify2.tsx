import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import imageToAdd from "../components/sentiment_satisfied.png";
import TextInput from '../components/textinput';

 const Verify = () => {
    const [value, setValue] = React.useState('');
    return(
    <div className='h-screen flex-column items-center justify-center px-6'>
        <img className=' m-auto'src={imageToAdd} alt="Image" />
        <h1 className='text-center mb-2 text-2xl font-semibold'>Welcome user</h1>
        <p className='text-center text-lg mb-4'>Click the button to vote</p>
           <Link to={'/confirm'} className='w-full'>
        <Button label="Vote" handleClick={() => {}} />
        </Link>
    </div>
        
    )
}
export default Verify