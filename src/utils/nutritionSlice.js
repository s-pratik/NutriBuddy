import { createSlice } from "@reduxjs/toolkit";
import Nutrition from "../Screens/Nutrition";

export const fetchNutritions=createAsyncThunk(async()=>{
    const res=await fetch('http://platform.fatsecret.com/rest/server.api/food');
    const result=res.json();
    return result;
}


)
const nutritionSlice=createSlice({
    name:'nutrition',
    initialState:{
        data:null,
        isLoader:false,
        isError:false,
    },
    extraReducers:builder=>{
        builder.addCase(fetchNutritions.pending,(state,action)=>{
            state.isLoader=true;
        });
        builder.addCase(fetchNutritions.fulfilled,(state,action)=>{
            state.isLoader=false;
            state.data=action.payload;
        });
        builder.addCase(fetchNutritions.rejected,(state,action)=>{
            state.isLoader=false;
            state.isError=true;
            
        });
    },
});

export default Nutrition.reducer;