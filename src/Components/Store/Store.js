import { createContext } from "react";
import axios from "axios";
import React, { useEffect, useState} from "react";


export  let trendingContext=createContext(0);

export default function TrendingContextProvider(props)
{
    let[trendingMovies,setTrendingMovies]= useState([])
    let[trendingTvShows,setTrendingTvShows]=useState([])
    let[trendingPersons,setTrendingPersons]=useState([])
    
    
    async function getTrendingItems(mediaType , callback){
       let {data}=await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=a991300c9a0e7de51dde709d9306e308`);
     callback(data.results)
     }
    
    
    useEffect(() => {
      getTrendingItems("movie",setTrendingMovies);
      getTrendingItems("tv",setTrendingTvShows);
      getTrendingItems("person",setTrendingPersons);
    }, [])
    return <trendingContext.Provider value={{trendingMovies,trendingPersons,trendingTvShows}}>
        {props.children}
    </trendingContext.Provider>
}