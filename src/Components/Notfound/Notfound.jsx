import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
   <>
   <div className="container-fluid" >
     <h1 className='text-white h1 fw-bolder'>Page not Found </h1>
     <Link className='btn btn-info text-white my-3 text-center'  to="home">Go To Home </Link>

   </div>


   </>
  )
}
