import React, { Dispatch, SetStateAction, useState } from "react";

type DropdownType = {
    onChange: Dispatch<SetStateAction<string>>
}

export const Dropdown:React.FC<DropdownType> = ({onChange}) => {
    const [searchOption, setSearchOption] = useState('')
    

    return (
        <div className="max-h-8 z-12 mr-4 mb-7 mt-2 max-w-5xl gap-3 justify-center font-sans text-lg sm:flex lg:flex xs:max-sm:mt-2">
            <label  className="block text-sm align-center mt-1 leading-4 font-light tracking-wider xs:max-sm:text-xs xs:max-sm:mb-2">Search by</label>
            <select 
            className="bg-white text-dark-grey text-sm py-1 px-2 rounded-md focus:ring-pink-500 focus:border-pink-500 xs:max-sm:text-xs xs:min-w-48"
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