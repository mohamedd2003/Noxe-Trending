import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Details() {
  let baseImg = `https://image.tmdb.org/t/p/original/`;

  let params = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  async function getMovieDetails(id) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a991300c9a0e7de51dde709d9306e308&language=en-US`
    );
    setMovieDetails(data);
  }
  useEffect(() => {
    getMovieDetails(params.id);
  }, []);

  return (
    <>
      {movieDetails ? 
        <div className="row">
           <h1 className="mb-3 text-center ">{movieDetails.title}</h1>
          <div className="col-md-4">
            <img className="w-100 rounded   " src={baseImg + movieDetails.poster_path} />
          </div>
          <div className="col-md-8">
           
            <h5 className="py-2">Vote:{movieDetails.vote_average}</h5>
            <h5 className="py-2">Vote:{movieDetails.vote_count}</h5>
            <h5 className="py-2">Popularity:{movieDetails.popularity}</h5>
            <h5 className="py-2" >release_date:{movieDetails.release_date}</h5>
            <p className="text-muted p-2">{movieDetails.overview}</p>
          <a target={"_blank"} className="btn btn-primary mx-2" href={movieDetails.homepage}>watching the movie</a>

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
