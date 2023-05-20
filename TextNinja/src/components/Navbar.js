import React from 'react';
import { Link } from 'react-router-dom';





export default function Navbar(props) {



  return (

    <>
      <div>

        

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className='container-fluid'>
            <a className="navbar-brand" href="/">{props.title}</a>




            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                </li>
                <li className="nav-item">
                  <Link className ="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-a disabled" href="/">
                    {props.aboutText}
                  </a>
                </li>


              </ul>
            </div>



            <div
              className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"
                }`}
            >
              <input
                className="form-check-input mx-1"
                type="checkbox"
                onClick={props.Toggle}
                
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"

              >{`${props.mode}`}</label>



            </div>

          </div>

        </nav>
      </div>

    </>

  );
}

