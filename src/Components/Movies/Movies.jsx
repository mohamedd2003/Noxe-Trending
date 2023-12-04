import React from 'react'
import axios from "axios";
import  { useEffect, useState } from "react";
import styles from './Movies.module.css'
import { Link } from 'react-router-dom';

export default function Movies() {
  let[trendingMovies,setTrendingMovies]=useState([])
let nums= new Array(5).fill(1).map((element,index)=> index+1)
let baseImg=`https://image.tmdb.org/t/p/original/`

async function getMovies(pageNumber){
  let {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a991300c9a0e7de51dde709d9306e308&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`);
  setTrendingMovies(data.results)

}
useEffect(() => {
  getMovies(1);
}, [])

  
  return (
    <>
    <div className="row">
 <div className="col-md-4">
 <div className={`brdr w-25 my-4 ${styles.brdr}`} ></div>
<h2>Trending</h2>
<h2>Movies</h2>
<h2>To Watch Now</h2>
<p className="text-muted">most watched by day</p>
  <div className={`brdr w-75 ${styles.brdr}`}></div>
 </div>

{trendingMovies.map((movie)=>
<div key={movie.id} className="col-md-2 my-2">
<Link to={`/details/${movie.id}`} className="text-white text-decoration-none">
 <div className='position-relative'>
 <div className="pic"><img className="rounded w-100" src={baseImg+movie.poster_path} alt="Movie_poster"/></div>
 <div className={`${styles.rate} position-absolute top-0 end-0 bg-info rate`} > {movie.vote_average}</div>
 <h2 className="h6">{movie.title}</h2>
 </div> 
 </Link>

</div>
  )}
</div>
<nav>
  <ul className="pagination pagination-sm d-flex justify-content-center">
   {nums.map((pageNum)=> <li  onClick={()=>getMovies(pageNum)} key={pageNum} className="page-item active" aria-current="page">
      <span    className="page-link bg-transparent text-white">{pageNum}</span>
    </li> )}
   
  </ul>
</nav>
    </>
  )
}
