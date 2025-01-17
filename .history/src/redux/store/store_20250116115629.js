import { configureStore } from '@reduxjs/toolkit'
import { ALLMOVIES } from '../types/moviesType'


// eslint-disable-next-line no-unused-vars
const moviesReducer = (state,action)=>{
switch(action.type){
    case "ALLMOVIES"
}
}

// create a store with the reducer
const store = configureStore({
    reducer: {},
  })
