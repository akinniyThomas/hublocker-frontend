import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    textContent: ""
};

export const searchFrameSlice = createSlice({
    name:"searchFrame",
    initialState,
    reducers:{
        setTextContent: (state, action)=>{
            state.textContent = action.payload;
        }
    }
});

export const {setTextContent}= searchFrameSlice.actions;

export default searchFrameSlice.reducer;