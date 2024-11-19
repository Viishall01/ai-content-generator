"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
interface props{
  selectedTemplate?:TEMPLATE,
  userFormInput:any,
  loading: boolean,
}

function FormSection({selectedTemplate, userFormInput, loading }:props) {
const [formData, setFormData] = useState<any>();

  const handleInputChange = (event: any)=>{
  const {name,value}= event.target;
  setFormData({...formData, [name]:value})
  };

  const onsubmit = (e:any)=>{
    // e.preventDefault();
    userFormInput(formData)
  }
  return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt='icon' height={70} width={70}/>
      <h2 className='font-bold text-2xl mb-2 text-purple-600'>{selectedTemplate?.name}</h2>
      <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>
      {/* @ts-ignore */}
        {selectedTemplate?.form?.map((item, index)=>(
          <form key={index} className='mt-6' onSubmit={onsubmit}>
            <div className='my-2 flex flex-col gap-2 mb-2'>
              <label htmlFor="" className='font-bold'>{item.label}</label>
              {item.field == 'input'?
              <Input 
              name={item.name}
              required={item?.required}
              onChange={handleInputChange}/>:item.field=='textarea'?
              <Textarea
              name={item.name}
              required={item?.required}
              onChange={handleInputChange}/>:null}
            </div>
          </form>
        ))}
        <Button type='submit'onClick={onsubmit} className='bg-purple-500 w-full py-6 my-4'
        disabled={loading}>{loading&&<Loader2Icon className='animate-spin'/>}Generate Content</Button>
        
    </div>
  )
}

export default FormSection