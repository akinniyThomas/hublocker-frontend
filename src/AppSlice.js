import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    locations: [],
    lockers: [],
    showingLockers:[],
    showingLocations:[]
}

export const appSlice = createSlice({
    name:"app",
    initialState,
    reducers:{
        setLocations: (state, action)=>{
            state.locations = action.payload;
        },
        setLockers: (state, action)=>{
            state.lockers=action.payload;
        },
        setShowingLockers:(state, action)=>{
            state.showingLocations = action.payload;
        },
        setShwoingLocations:(state, action)=>{
            state.showingLockers = action.payload;
        }
    }
});

export const { setLocations, setLockers, setShowingLockers, setShwoingLocations } = appSlice.actions;

export default appSlice.reducer;