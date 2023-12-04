import React from 'react'
import axios from "axios";
import  { useEffect, useState } from "react";
import styles from './Tvshows.module.css'
import { Link } from 'react-router-dom';


export default function Tvshows() {
let[trendingTvShows,setTrendingTvShows]=useState([])
let baseImg=`https://image.tmdb.org/t/p/original/`
let nums= new Array(5).fill(1).map((element,index)=> index+1)

async function getTrendingTvShows(pageNumber){
  let {data}=await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=a991300c9a0e7de51dde709d9306e308&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`);
setTrendingTvShows(data.results)

}
useEffect(() => {
  getTrendingTvShows(1);
}, [])
 

  return (
<>
<div className="row m-3">
 <div className="col-md-4">
 <div className={`brdr w-25 my-4 ${styles.brdr}`} ></div>
<h2>Trending</h2>
<h2>Tv Shows</h2>
<h2>To Watch Now</h2>
<p className="text-muted">most watched by day</p>
  <div className={`brdr w-75 ${styles.brdr}`}></div>
 </div>

{trendingTvShows.map((tv)=>
<div key={tv.id} className="col-md-2 my-2">
 <Link to={`/tvdetails/${tv.id}`}>
 <div className='position-relative'>
 <div className="pic"><img className="rounded w-100" src={baseImg+tv.poster_path} alt="TvShows_poster"/></div>
 <div className={`${styles.rate} position-absolute top-0 end-0 bg-info rate text-white  `} >{tv.vote_average}</div>
 </div>
 </Link>

  <h2 className="h6">{tv.name}</h2>
</div>
  )}
</div>
<nav>
  <ul className="pagination pagination-sm d-flex justify-content-center">
   {nums.map((pageNum)=> <li  onClick={()=>getTrendingTvShows(pageNum)} key={pageNum} className="page-item active" aria-current="page">
      <span    className="page-link bg-transparent text-white">{pageNum}</span>
    </li> )}
   
  </ul>
</nav>
</>
  )
}
