import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import TextInput from '../components/textinput'
import Select from '../components/inputselect'

 const Home = () => {
    const [value, setValue] = React.useState('');
    return(
        <div className='w-full h-screen flex-column items-center justify-center px-6'>
            <h1 className='font-semibold my-5 text-2xl'>Register</h1>
            <p className='mb-2'>Choose an ID and enter number</p>
            <Select/>
            <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter ID No'/>
            <Link to={'/auth'} className='w-full'>
            <Button label="Proceed" handleClick={() => {}} />
            </Link>
           
        </div>
    )
}
export default Home
