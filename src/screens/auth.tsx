import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import TextInput from '../components/textinput'

 const Auth = () => {
    const [value, setValue] = React.useState('');
    return(
    <div className='h-screen flex-column items-center justify-center px-6'>
        <h1 className='font-bold my-5 text-2xl'>Verify Your Identity</h1>
        <h5 className='font-semibold'>Enter the Phone No. linked to your BVN</h5>
        <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter Phone No'/>
        <h5 className='font-semibold'>Enter Your Mother's Maiden Name</h5>
        <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter Name'/>
        <Link to={'/verify2'} className='w-full'>
            <Button label="Proceed" handleClick={() => {}} />
            </Link>
    </div>
        
    )
}
export default Auth