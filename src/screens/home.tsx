import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import TextInput from '../components/textinput'
import Select from '../components/inputselect'

 const Home = () => {
    const [value, setValue] = React.useState('');
    return(
        <div className='w-full h-screen flex-column items-center justify-center px-6'>
            <h1 className='font-bold my-5 text-2xl'>Log in</h1>
            <p className='font-semibold mb-2 text-xl'>Email</p>
            <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter your email adress.'/>
            <p className='font-semibold mb-2 text-xl'>Password</p>
            <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter your password'/>
            <Link to={'/auth'} className='w-full'>
            <Button label="Log in" handleClick={() => {}} />
            </Link>
           <p className='m-5'>Don't have an account? <a className='font-bold p-1'>Sign Up</a></p>
        </div>
    )
}
export default Home
