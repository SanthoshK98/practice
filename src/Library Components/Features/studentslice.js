import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    studentid:'',
    hodid:'',
    age:29
}

const practiceSlice = createSlice({
name:'general',
initialState,
reducers:{
    addage:(state)=>{
     state.age =  state.age+5;
    },
    addstudentid:(state,action)=>{
        state.studentid =action.payload;
    },
    addhodid:(state,action)=>{
        state.hodid = action.payload;
    }
}



})





export const {addstudentid, addage,addhodid} = practiceSlice.actions;

export default practiceSlice.reducer