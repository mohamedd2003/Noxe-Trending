import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Tvdetails() {
  let baseImg = `https://image.tmdb.org/t/p/original/`;

  let params = useParams();
  const [tvDetails,setTvDetails] = useState([]);

  async function getTvDetails(id) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=a991300c9a0e7de51dde709d9306e308&language=en-US`
    );
    setTvDetails(data);
  }
  useEffect(() => {
    getTvDetails(params.id);
  }, []);

  return (
    <>
   
      {tvDetails ? 
        <div className="row">
           <h1 className="mb-3 text-center ">{tvDetails.title}</h1>
          <div className="col-md-4">
            <img className="w-100 rounded   " src={baseImg + tvDetails.poster_path} />
          </div>
          <div className="col-md-8">
           
            <h5 className="py-2">Vote Rate:{tvDetails.vote_average}</h5>
            <h5 className="py-2">Vote Count:{tvDetails.vote_count}</h5>
            <h5 className="py-2">Popularity:{tvDetails.popularity}</h5>
            <h5 className="py-2" >release_date:{tvDetails.first_air_date}</h5>
            <p className="text-muted p-2">{tvDetails.overview}</p>
          <a className="btn btn-primary mx-2" target={"_blank"} href={tvDetails.homepage}>watching the TvShow</a>

          </div>
        </div>
      : 
        <div className="vh-100 d-flex  justify-content-center align-items-center">
          <i className="fa fa-spinner fa-spin fa-3x"></i>
        </div>
      }
    </>
  );
}
