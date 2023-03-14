import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import TextInput from '../components/textinput'

 const Auth = () => {
    const [value, setValue] = React.useState('');
    return(
    <div className='h-screen flex-column items-center justify-center px-6'>
        <h1 className='font-bold text-2xl'>Verify Your Identity</h1>
        <h5 className='text-lg p-2'>Enter the 6-digit that was sent to your email adress</h5>   
        <TextInput value={value} handleChange={(e) => setValue(e)} placeholder=''/>
        <div className='flex justify-between mb-7'>
        <p className='text-left'>OTP not sent?</p>
        <p className='text-right font-semibold'>Resend</p>
        </div>
        <Link to={'/verify2'} className='w-full'>
            <Button label="Proceed" handleClick={() => {}} />
            </Link>
            <p className='text-center mt-3'>Want to try another method of verification?</p>
            <p className='m-auto align-center font-bold text-lg text-center'>Click here</p>
    </div>
        
    )
}
export default Auth