import {createSlice} from  "@reduxjs/toolkit";

const initialState = {
    open:false,
    // moviesIds:[],
    // tvIds:[],
    movie:localStorage.getItem("movies") ? JSON.parse(localStorage.getItem("movies")) : [],
    tv:localStorage.getItem("tv") ? JSON.parse(localStorage.getItem("tv")) : [],
}

const wishListSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        addMovie:(state,action)=>{
            console.log(action.payload)
            let isExistingItem = state.movie?.findIndex((item) =>  item.id == action.payload.id);
            console.log("isExistingItem "+isExistingItem)
            if(isExistingItem == -1){
                state.movie = [...state.movie,action.payload];
                localStorage.setItem("movies",JSON.stringify(state.movie));
            }else{
                alert("Product Already Exists")
            }           
        },
        removeMovie(state,action){
            const id  = action.payload;
            state.movie = state.movie.filter((item)=>{
                return item.id !== id;
            })
            localStorage.setItem("movies",JSON.stringify(state.movie));
        },
        addTv:(state,action)=>{
            let isExistingTvItem = state.tv?.findIndex(item => item.id === action.payload.id);
            if(isExistingTvItem === -1){
                state.tv = [...state.tv,action.payload];
                localStorage.setItem("tv",JSON.stringify(state.tv));
            }else{
                alert("Tv Show Already exists")
            }
        },
        removeTv(state,action){
            const id  = action.payload;
            state.tv = state.tv.filter((item)=>{
                return item.id !== id;
            })
            localStorage.setItem("tv",JSON.stringify(state.tv));
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