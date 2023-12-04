import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { trendingContext } from "../Store/Store";
import styles from './Home.module.css'



export default function Home() {

 let{trendingMovies,trendingPersons,trendingTvShows}=useContext(trendingContext)
let baseImg=`https://image.tmdb.org/t/p/original/`

return( 
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
<div  key={movie.id} className="col-md-2 my-2">
 <Link to={`/details/${movie.id}`} className="text-white text-decoration-none">
 <div className='position-relative'>
 <div className="pic"><img className="w-100 rounded" src={baseImg+movie.poster_path} alt="Movie_poster"/></div>
 <div className={`${styles.rate} position-absolute text-white top-0 end-0 bg-info rate`} >{movie.vote_average}</div>
 <h2 className="h6">{movie.title}</h2>
 </div> 
 </Link>

  
</div>

  )}
</div>
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
 <div className="pic"><img className="w-100 rounded" src={baseImg+tv.poster_path} alt="TvShows_poster"/></div>
 <div className={`${styles.rate} position-absolute text-white top-0 end-0 bg-info rate`} >{tv.vote_average}</div>
 </div>
 </Link>

  <h2 className="h6">{tv.name}</h2>
</div>
  )}
</div>
<div className="row">
 <div className="col-md-4">
 <div className={`brdr w-25 my-4 ${styles.brdr}`} ></div>
<h2>Trending</h2>
<h2>Persons</h2>
<h2>To Watch Now</h2>
<p className="text-muted">most watched by day</p>
  <div className={`brdr w-75 ${styles.brdr}`}></div>
 </div>

{trendingPersons.map((person)=>
<div key={person.id} className="col-md-2 my-2">
<Link to={`/peopledetails/${person.id}`}>
<div className='position-relative'>
 <div className="pic"><img className="w-100 rounded" src={baseImg+person.profile_path} alt="TvShows_poster"/></div>
 <div className={`${styles.rate} position-absolute text-white top-0 end-0 bg-info rate`} >{person.popularity}</div>
 </div>
</Link>

  <h2 className="h6">{person.name}</h2>
</div>
  )}
</div>



  </>
)
}
