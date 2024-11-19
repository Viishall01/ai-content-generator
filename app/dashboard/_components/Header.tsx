import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-2 shadow-sm border-b-2 flex justify-between items-center bg-white'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-xl bg-white'>
            <Search/>
            <input type="text" placeholder='Search...' className='outline-none'/>
        </div>
        
    </div>
  )
}

export default Header


{/* <h2 className=' p-2 px-4 bg-purple-600 rounded-full text-xs text-white'>Join Membership just for $9.99/Month</h2> */}
        