import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import TextInput from '../components/textinput'

const Pvc = () => {
    const [value, setValue] = React.useState('');
    return(
    <div className='h-screen flex-column items-center justify-center px-6 m-auto'>
      <h1 className='text-2xl font-bold my-5'>Verification</h1>
      <p className='font-semibold my-5'>Enter OTP sent to your number</p>
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter OTP'/>
           <Link to={'/pvcready'} className='w-full'>
        <Button label="Submit" handleClick={() => {}} />
        </Link>
    </div>
        
    )
}
export default Pvc