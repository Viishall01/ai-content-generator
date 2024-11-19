"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {
    const path = usePathname();
    useEffect(()=>{},[]);
    const MenuList = [
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'
        },
        {
            name:'Billing',
            icon:WalletCards,
            path:'/dashboard/billing'
        },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/setting'
        },
       
    ]
  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>

        <div className='flex justify-center'>
            <Image src={'/logo.svg'} alt='logo' width={120} height={120}></Image>
        </div>
        <hr className='my-6 border'/>
        <div className='mt-3'>
            {MenuList.map((menu,index)=>(
                <div key={index} className={`flex gap-2 mb-2 p-3 hover:bg-purple-600 hover:text-white 
                cursor-pointer rounded-lg items-center ${path == menu.path && 'bg-pink-600 text-white'}`}>
                    <menu.icon className='h-6 w-6'/>
                    <h2>{menu.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav