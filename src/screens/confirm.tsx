import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import TextInput from '../components/textinput';



 const Confirm = () => {
    const [value, setValue] = React.useState('');
    return(
    <div className='h-screen flex-column items-center justify-center px-6'>
        <h1 className='font-bold my-5 text-2xl'>Confirm your personal information</h1>
    <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Full Name'/>
        <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Date of birth'/>
        <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter Phone No'/>
        <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='State of origin'/>
        <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Nex of kin'/>
        <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='City'/>
        <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Home Adress'/>
     <Link to={'/pol'} className='w-full'>
        <Button label="Proceed" handleClick={() => {}} />
        </Link>
    </div>
        
    )
}
export default Confirm