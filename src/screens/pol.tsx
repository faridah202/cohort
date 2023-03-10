import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import TextInput from '../components/textinput'
import Select from '../components/inputselect'

 const Polling = () => {
    const options = [
        {
        label: "Choose location",
        value: "apple",
        },
        {
            label: "Ikate",
            value: "apple",
            },
            {
                label: "Surulere",
                value: "apple",
                },
                {
                    label: "Jabi",
                    value: "apple",
                    },

                    {
                        label: "iyanya",
                        value: "apple",
                        }
                    ]
    
 return(
    <div className='h-screen flex-column items-center justify-center px-6'>
        <h2 className='font-bold my-5 text-2xl'>Choose Polling Unit</h2>
<select className='w-full h-12 rounded-md border-1  border-gray-200 px-2 mb-4 bg-gray-100'>
    {options.map((option) => (
    <option value={option.value}>{option.label}</option>
    ))}
    </select>
    <div>
        <h1 className='font-semibold'>Choose PVC collation centre</h1>
    <select className='w-full h-12 rounded-md border-1  border-gray-200 px-2 mb-20 bg-gray-100'>
    {options.map((option) => (
    <option value={option.value}>{option.label}</option>
    ))}
    </select>  
    </div>
    <Link to={'/succes'} className='w-full'>
            <Button label="Proceed" handleClick={() => {}} />
            </Link>
    </div>
    
                          
    )
    
    }

export default Polling