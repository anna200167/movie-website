import {createSlice} from  "@reduxjs/toolkit";

const initialState = {
    open:false,
    moviesIds:[],
    tvIds:[],
    movie:[],
    tv:[],
}

const wishListSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        addMovie:(state,action)=>{
            console.log(action.payload)
            state.movie = [...state.movie,action.payload];
            
        },
        removeMovie(state,action){
            state;
        },
        addTv:(state,action)=>{
            console.log(action.payload)
            state.tv = [...state.tv,action.payload];
        },
        removeTv(state,action){
            state;
        },
        closeWishlist:(state)=>{
            console.log("Before"+state.open)
            state.open = false;
            console.log("After"+state.open)

        },
        openWishList:(state)=>{
            state.open = true
        }
    }
})

export const {addMovie,addTv,removeMovie,removeTv,closeWishlist,openWishList}  = wishListSlice.actions;
export default wishListSlice.reducer;