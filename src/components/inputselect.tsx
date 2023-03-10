import React from 'react'

interface IProps {
    value: string;
    placeholder?: string;
    handleChange: (e: string) => void;
}
 const Select = () => {
    const options = [
        {
        label: "Choose ID type",
        value: "apple",
        },
        {
            label: "NIN",
            value: "apple",
            },
            {
                label: "International passport",
                value: "apple",
                },
                {
                    label: "Driver's license",
                    value: "apple",
                    }
    ]
    return(
     <select className='w-full h-12 rounded-md border-1  border-gray-200 px-2 mb-4 bg-gray-100'>
        {options.map((option) => (
            <option value={option.value}>{option.label}</option>
        ))}
     </select>
       
    )
}
export default Select