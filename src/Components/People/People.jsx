import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./People.module.css";
import { Link } from "react-router-dom";

export default function People() {
  let [trendingPersons, setTrendingPersons] = useState([]);
  let baseImg = `https://image.tmdb.org/t/p/original/`;
let nums= new Array(5).fill(1).map((element,index)=> index+1)


  async function getPersonDetails() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/person/day?api_key=a991300c9a0e7de51dde709d9306e308 `
    );
    setTrendingPersons(data.results);

    
  }
  useEffect(() => {
    getPersonDetails();
  }, []);
  return (
    <>
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
 <div className="pic"><img className="rounded w-100" src={baseImg+person.profile_path} alt="Trending_Person"/></div>
 <div className={`${styles.rate} position-absolute top-0 end-0 bg-info rate text-white`} >{person.popularity}</div>
 </div>
</Link>

  <h2 className="h6">{person.name}</h2>
</div>
  )}
</div>
    </>
  );
}
