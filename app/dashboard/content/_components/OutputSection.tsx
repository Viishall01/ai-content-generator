import { Editor } from '@toast-ui/react-editor'
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';


interface ptops {
  aiOutput:string
}
const OutputSection = ({aiOutput}:ptops) => {
  const editorRef:any = useRef();

  useEffect(()=>{
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput])
  return (
    <div className='bg-white shadow-lg border rounded-lg p-5'>
      <div className='flex justify-between items-center'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='m-1 flex gap-2'><Copy className='w-2 h-2'/>Copy</Button>
      </div>
      <Editor
      ref={editorRef}
      initialValue="hello ! from @viishall.01"
      // previewStyle="vertical"
      height="400px"
      initialEditType="wysiwyg"
      useCommandShortcut={true}
      onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default OutputSection