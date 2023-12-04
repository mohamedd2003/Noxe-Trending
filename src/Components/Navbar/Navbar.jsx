import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar(props) {
  return (
    <>
      <nav className={` ${styles.nv} navbar navbar-expand-lg `}>
        <div className="container-fluid">
          <a className="text-white navbar-brand">Noxe</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {props.userData ? <>
                <li className="nav-item">
                  <Link className="nav-link text-white active" aria-current="page" to="home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="tvshows">
                    Tv Shows
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="people">
                    People
                  </Link>
                </li>
              </> : ''}


            </ul>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <div className="socisl-icons">
                <i className="mx-2 fab fa-facebook"></i>
                <i className="mx-2 fab fa-spotify"></i>
                <i className="mx-2 fab fa-instagram"></i>
                <i className="mx-2 fab fa-youtube"></i>
              </div>
            </ul>


            <ul className="navbar-nav  mb-2 mb-lg-0">
              {props.userData ?
                <li className="nav-item order-lg-last order-first">
                  <span onClick={props.logOut} className="nav-link text-white">
                    Logout
                  </span>
                </li>
                :
                <>
                  <li className="nav-item" aria-current="page">
                    <Link className="nav-link text-white active" to="register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="login">  Login   </Link>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
