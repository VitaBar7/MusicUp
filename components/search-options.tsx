import React, { Dispatch, SetStateAction, useState } from "react";

type DropdownType = {
    onChange: Dispatch<SetStateAction<string>>
}

export const Dropdown:React.FC<DropdownType> = ({onChange}) => {
    const [searchOption, setSearchOption] = useState('')
    

    return (
        <div className=" max-h-8 mr-4 mb-7 mt-2 max-w-5xl font-sans text-lg sm:flex lg:flex">
            <label  className="block mb-2 text-sm leading-4 font-light tracking-wider">Search options</label>
            <select 
            className="bg-gray-50 min-w-100 pr-6 border border-gray-300 text-dark-green text-sm rounded-sm focus:ring-pink-500 focus:border-pink-500 block w-full p-1 border-gray-600"
            id="selection" 
            value={searchOption} 
            onChange={e => {
                setSearchOption(e.currentTarget.value)
                onChange(e.currentTarget.value)
            }} 
            >
                <option value="song">song</option>
                <option value="artist">artist</option>
            </select>
        </div>
    );
}



export default Dropdown