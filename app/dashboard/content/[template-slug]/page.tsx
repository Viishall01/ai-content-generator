"use client"
import React, { useState, use } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Template from '@/app/(data)/Template'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'


interface props {
    params:{
        'template-slug':string,
    }
}
const CreateNewContent = (props:props) => {
  
  const selectedTemplate:TEMPLATE|undefined=Template?.find((item)=>item.slug==props.params['template-slug']);
  
  const [loading, setLoading]= useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  
   
      const GenerateAiContent = async (FormData:any)=>{
      setLoading(true);
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const FinalAIprompt = JSON.stringify(FormData)+", "+SelectedPrompt

      const result = await chatSession.sendMessage(FinalAIprompt);
      console.log(result.response.text());
      setAiOutput(result?.response.text());
      setLoading(false);
    }
    
  return (
    <div className='sm:p-0 md:p-10'>
      <Link href={'/dashboard'}>
      <Button className='bg-purple-500 p-5 pr-10 '><ArrowLeft/>Back</Button></Link>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5 py-5 '>
        {/* formsection */}
        <FormSection
         selectedTemplate={selectedTemplate}
         userFormInput={(v:any)=>GenerateAiContent(v)}
         loading={loading}/>

        {/* outputSection */}
        <div className=''>
        <OutputSection aiOutput={aiOutput}/>
        </div>
    </div>
    </div>
  )
}

export default CreateNewContent

// Define the Template type
// type TEMPLATE = {
//   slug: string;
//   name: string;
// };

// // The array of templates
// const Template: TEMPLATE[] = [
//   { slug: 'blog-post', name: 'Blog Post' },
//   { slug: 'product-page', name: 'Product Page' },
//   { slug: 'contact-us', name: 'Contact Us' }
// ];

// // Simulate route parameters (using an object for demonstration)
// const props = {
//   params: {
//     'template-slug': 'product-page'
//   }
// };

// // Find the template with the matching slug
// const selectedTemplate: TEMPLATE|undefined = Template?.find((item) => item.slug === props.params['template-slug']);

// // Display the results
// if (selectedTemplate) {
//   console.log(`Found Template: ${selectedTemplate.name} (Slug: ${selectedTemplate.slug})`);
// } else {
//   console.log("No matching template found.");
// }

