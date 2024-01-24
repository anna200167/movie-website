import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Search from "./Search.jsx"
import Details from "./Details.jsx"
import Wishlist from "./WishList.jsx"
import "./index.scss"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/header/Header.jsx'
import TvDetails from './TvDetails.jsx'
import Tv from './Tv.jsx'
import store from './redux/store.js';
import {Provider} from "react-redux"
import Movie from './Movies.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <BrowserRouter >
    <Header/>
        <Routes>
            <Route index path={"/"} element={<App/>}/>
            <Route path={"/search"} element={<Search/>}/>
            <Route path={"/details/movie/:id"} element={<Details/>} />
            <Route path={"/details/tv/:id"} element={<TvDetails/>} />
            <Route path={"/wishlist"} element={<Wishlist/>} />
            <Route path={"/movies"} element={<Movie/>} />
            <Route path={"/tv"} element={<Tv/>} />


            {/* <Route path={"/filter"} element={Filter} /> */}
        </Routes>
    </BrowserRouter>    
    </Provider>
)
