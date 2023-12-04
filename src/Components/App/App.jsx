import { Route,Routes,Navigate,useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Tvshows from "../Tvshows/Tvshows";
import Movies from "../Movies/Movies";
import People from "../People/People";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Notfound from "../Notfound/Notfound";
import Details from "../MovieDetails/MovieDetails";
import Tvdetails from "../Tvdetails/Tvdetails";
import Peopledetails from "../People Details/Peopledetails";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import TrendingContextProvider from '../Store/Store'

function App() {
   let navigate = useNavigate(); 

 const [userData, setUserData] = useState(null);
   function saveUserData() 
   {
     let encodedToken=localStorage.getItem('userToken');
     let decodedToken = jwtDecode(encodedToken);
     setUserData(decodedToken);
   }
 
  
 function logOut()
 {
   setUserData(null); 
   localStorage.removeItem('userToken');
   navigate('/login')
 }

 useEffect(() => {
   if (localStorage.getItem("userToken"))
    {
     saveUserData();
   }
 },[]);

  function ProtectedRoute(props)
     {
    if (localStorage.getItem("userToken")===null)
     {
      return <Navigate to='/login'/>;
     } 
     else
     {
       return props.children;
     }
   
  }
  return (
    <>
    <TrendingContextProvider>    
      <Navbar userData={userData} logOut={logOut} />
      <div className="container">
        <Routes>
          <Route path="" element={<ProtectedRoute> <Home/></ProtectedRoute>} />
          <Route path="home" element={ <ProtectedRoute><Home/></ProtectedRoute> } /> 
          <Route path="movies" element={<ProtectedRoute><Movies/></ProtectedRoute>   } />
          <Route path="tvshows" element={<ProtectedRoute><Tvshows/></ProtectedRoute> } />
          <Route path="people" element={ <ProtectedRoute><People/></ProtectedRoute> } />
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login  saveUserData={saveUserData}/>} />
          <Route path="details" element={<ProtectedRoute><Details /></ProtectedRoute> }>
            <Route path=":id" element={  <Details /> } />
          </Route>
          <Route path="tvdetails" element={<ProtectedRoute><Tvdetails /></ProtectedRoute> }>
            <Route path=":id" element={<Tvdetails />} />
          </Route>
          <Route path="peopledetails" element={<ProtectedRoute> <Peopledetails /></ProtectedRoute>   }>
            <Route path=":id" element={<Peopledetails />} />
          </Route> 
          <Route path="*" element={<ProtectedRoute><Notfound /></ProtectedRoute>    } />
        </Routes>
      </div>
    </TrendingContextProvider>
    </>
  );
}
export default App;
