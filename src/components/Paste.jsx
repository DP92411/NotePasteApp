import { Calendar, Copy, Eye, PencilLine, Trash2,Share } from "lucide-react";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import moment from 'moment';
// import { Link } from "react-router-dom";

const Paste = () => {
   const pastes = useSelector((state) => state.paste.pastes);
//    console.log(pastes);
  
   const [searchTerm,setSearchTerm] =useState('');
   const dispatch= useDispatch();
  


   const filteredData = pastes.filter(   
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
   );
    
   function handleDelete(pasteId){
     dispatch(removeFromPastes(pasteId));
    //  toast.success("Deleted successfully")
   }
 
  return (
    
    <div className="flex flex-col gap-y-3">
        {/* Search */}
        <div className="w-full  bg-white flex gap-3 px-4 py-2  rounded-[0.3rem] border border-[rgba(128,121,121,0.3)]  mt-6">
          <input
            type="search"
            placeholder="Search paste here..."
            className="focus:outline-none w-full bg-transparent"
            value={searchTerm} // Bind the input to searchTerm state
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
          />
        </div>

            <div className="flex flex-col border  bg-white border-[rgba(128,121,121,0.3)] py-4 rounded-[0.4rem]">
              <h1 className="px-4 text-4xl font-bold border-b border-[rgba(128,121,121,0.3)] pb-4"
              >All Pastes</h1>
            <div className="w-full px-4 pt-4 flex flex-col gap-y-5">
                {  
                    filteredData.length>0 &&
                    filteredData.map(
                        (paste) =>
                        {
                        <div
                  key={paste?._id}
                  className="border border-[rgba(128,121,121,0.3)] w-full gap-y-6 justify-between flex flex-col sm:flex-row p-4 rounded-[0.3rem]"
                ></div>
                            return (
                                <div className="w-[100%] flex flex-col space-y-3 ">
                                    <div className="flex flex-row justify-between  gap-10 p-4 ">
                                        {/* heading and content */}
                                    <div className=' w-[100%]' key={paste?._id}>
                                    <p className="text-4xl font-semibold ">{paste.title}</p>
                                    <p className="text-sm font-normal line-clamp-3 max-w-[80%] text-[#707070]">{paste.content}</p>
                                    </div> 
                                      {/* Icons */}
                                       <div className=" gap-y-4 sm:items-end  justify-between place-content-center ">
                                       <div className='flex gap-2 flex-wrap sm:flex-nowrap '>
                                       
                                       <button
                                       className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-blue-500"
                                       >
                                           {/* <Link to={`/pasteId=${paste?.id}`}>Edit</Link> */}
                                           <a href={`/?pasteId=${paste?._id}`}>
                                           <PencilLine
                                        className="text-black group-hover:text-blue-500"
                                       size={20}
                                             />
                                           </a>
                                       </button>
                                       <button className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-pink-500"
                                       onClick={() => handleDelete(paste?._id)}>
                                          <Trash2
                         className="text-black group-hover:text-pink-500"
                         size={20}
                       />
                                       </button>
                                       <button  
                                       className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-orange-500"> {/* use link here */}
                                        {/* <Link to={'/pastes/${paste?._id}'}>view</Link>   */}
                                        <a href={`/pastes/${paste?._id}`}>
                                        <Eye
                           className="text-black group-hover:text-orange-500"
                           size={20}
                         /></a>
                                       </button>
                                       <button className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-green-500"
                                       onClick={()=>{
                                       navigator.clipboard.writeText(paste?.content) 
                                       toast.success("copied to clipboard")
                                       }}>
                                           <Copy
                         className="text-black group-hover:text-green-500"
                         size={20}
                       />
                                           </button>
                                       
                                       <button onClick={()=>{toast.success("Shared Successfully")}}
                                           className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-green-500">
                                           {/* to do your self */}
                                           <Share className="text-black group-hover:text-green-500" size={20} />
                                           </button>
                                       
                                    </div>
                                       </div>
                                    </div>
                                     <div className="gap-x-2 flex justify-center">
                                     <Calendar className="text-white   size-6" size={20} />
                                        { moment( paste.createdAt ).format('MMMM Do YYYY, h:mm:ss a')}
                                     </div>
                                  <hr />   
                                
                                </div> 
                              )
                              
                        }
                    )
                }

            </div>
            </div>
    </div>
  )
}

export default Paste