// "use client"
import Template from '@/app/(data)/Template'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface FORM {
    label:string,
    field:string,
    name: string,
    required?:boolean 
};
export interface TEMPLATE{
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[],
};

const TemplateListSection = ({userSearchInput}:any) => {
  const [templateList, setTemplateList]= useState(Template);
  useEffect(()=>{
    if(userSearchInput){
      const filterData = Template.filter(item=>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    }else{
      setTemplateList(Template);
    }
  },[userSearchInput])
  return (
    <div className='grid grid-cols-1 sm:p-5 md:grid-cols-3 lg:grid-cols-4 gap-5 md:p-10'>
        {templateList.map((item:TEMPLATE,index:number)=>(
            <TemplateCard {...item} key={index}/>
        ))}
    </div>
  )
}

export default TemplateListSection