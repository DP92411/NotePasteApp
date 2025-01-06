import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes:localStorage.getItem("pastes")
  ?JSON.parse(localStorage.getItem("pastes"))
  :[]
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
   addToPastes: (state,action) => {
    const paste=action.payload;
    // add a check to don't create paste if same title 
    // already exists

    state.pastes.push(paste);
    localStorage.setItem("pastes",JSON.stringify(state.pastes));  
       
        toast.success("Paste Created Successfully! ")
    
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
    },
    updateToPastes: (state,action) => {
      const paste = action.payload
      const index = state.pastes.findIndex((item)=>
    item._id === paste._id)
     
      if(index>=0){
        
        state.pastes[index] = paste;

        localStorage.setItem("pastes",JSON.stringify(state.pastes))

        toast.success("Paste Updated Successfully!");


      }

    },
    resetAllPastes: (state, action) => {
      state.pastes=[]; 
      localStorage.removeItem("pastes");
      toast.loading("Pastes Reset!");

    },
    removeFromPastes: (state, action) => {
     const pasteId = action.payload;

     console.log(pasteId);
     const index = state.pastes.findIndex((item)=>
    item._id === pasteId);
     
     
     state.pastes.splice(index,1);

     localStorage.setItem("pastes",JSON.stringify
        (state.pastes));
        toast.success("Paste Deleted!");
     
     
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes,removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer