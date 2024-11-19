import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}: any) => {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 
    flex flex-col justify-center items-center text-white'>
        <h2 className='text-3xl font-bold'>Browse All Template</h2>
        <p className=''>What would you like to create today?</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md my-5 w-[50%] bg-white '>
                <Search className='text-black'/>
                <input type="text"
                placeholder='search'
                className=' bg-transparent outline-none text-black'
                onChange={(e)=>onSearchInput(e.target.value)} />
            </div>
        </div>
    </div>
  )
}

export default SearchSection