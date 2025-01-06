import React from 'react'
import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { toast } from 'react-hot-toast';
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
const ViewPaste = () => {

    const {id}=useParams();
    const allPastes = useSelector((state) => state.paste.pastes);
    // bringing the same paste
    const paste=allPastes.filter((p)=>p._id === id)[0];
  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
    
     <div className='flex flex-col gap-y-5 items-start mb-8' >
        <input
         className='w-full text-black border border-input rounded-md p-2'
         type="text"
         placeholder='Enter Title here'
         value={paste.title}
         disabled
         onChange={(e)=>setTitle(e.target.value) }
        />
        {/* <button onClick={createPaste}>
            {
                pasteId ? "Update My Paste" :"Create My Paste!"
            }
        </button> */}
        {/* <button 
        onClick={()=>{ navigator.clipboard.writeText(paste?.content) 
          toast.success("copied to clipboard")}}>
            Copy Content</button> */}
    
    <div className={`w-full flex flex-col items-start relative rounded bg-opacity-10 border border-[rgba(128,121,121,0.3)] backdrop-blur-2xl`}>
    <div
            className={`w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 border-b border-[rgba(128,121,121,0.3)]`}
          >
            <div className="w-full flex gap-x-[6px] items-center select-none group">
              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(255,95,87)]" />

              <div
                className={`w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(254,188,46)]`}
              />

              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(45,200,66)]" />
            </div>
            {/* Circle and copy btn */}
            <div
              className={`w-fit rounded-t flex items-center justify-between gap-x-4 px-4`}
            >
              {/*Copy  button */}
              <button
                className={`flex justify-center items-center  transition-all duration-300 ease-in-out group`}
                onClick={() => {
                  navigator.clipboard.writeText(paste.content);
                  toast.success("Copied to Clipboard");
                }}
              >
                <Copy className="group-hover:text-sucess-500 text-white" size={20} />
              </button>
            </div>
          </div>
        <textarea className="w-full p-3  focus-visible:ring-0"
         name="" id=""
          value={paste.content}
        placeholder='Enter description 0r content!'
        disabled
        onChange={(e)=>{setValue(e.target.value)}}
        rows={20}></textarea>
    </div>
    </div>
    </div>
  )
}

export default ViewPaste
