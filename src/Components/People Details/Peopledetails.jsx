import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";



export default function Peopledetails() {
    let baseImg = `https://image.tmdb.org/t/p/original/`;
  
    let params = useParams();
    const [personDetails,setPersonDetails] = useState([]);
  
    async function getPersonDetails(id) {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/person/${id}?api_key=a991300c9a0e7de51dde709d9306e308&language=en-US`
      );
      setPersonDetails(data);
    }
    useEffect(() => {
      getPersonDetails(params.id);
    }, []);
  
    return (
      <>
     
        {personDetails ? 
          <div className="row">
             <h1 className="mb-3 text-center ">{personDetails.name}</h1>
            <div className="col-md-4">
              <img className="w-100 rounded   " src={baseImg + personDetails.profile_path} />
            </div>
            <div className="col-md-8">
            <h5 className="py-2" >birthday: {personDetails.birthday}</h5>
            <h5 className="py-2">place of birth: {personDetails.place_of_birth}</h5>
             
              <h5 className="py-2">Popularity:{personDetails.popularity}</h5>
              <p className="text-muted p-2">{personDetails.biography}</p>
            <a target={"_blank"} className="btn btn-primary mx-2"    href={personDetails.homepage}>More Details</a>
  
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