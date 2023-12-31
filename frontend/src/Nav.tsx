import React from "react"; 
import {Link, useParams} from "react-router-dom";
import "./Nav.css";
import { NavLink } from 'react-router-dom';
import useRecipes from "./utils/axiosutils";
import Recipe from "./Recipe";


function Nav() {
    let RecipeData : Recipe[] = useRecipes();

     return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
  <div className="container-xl">
    <a className="navbar-brand" href="#">
      <img src="images/confectionsbyaryalogo.jpg" alt=""/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pies
          </a>
          <ul className="dropdown-menu">
            {
                RecipeData.map(recipe => 
                    <li><NavLink className="dropdown-item" to={"/recipe/"+recipe.name}>{recipe.name}</NavLink></li> 
                )
            }
          </ul>
        </li>
       

      </ul>
      <div className="search-and-icons">
        <form className="d-flex mb-2 me-2" role="search">
          <input className="form-control me-2" type="search" aria-label="Search"/>
        </form>
        <div className="user-icons d-flex mb-2">
          <div className="profile"><i className="bi bi-person"></i></div>
          <div className="wishlist"><i className="bi bi-heart"></i></div>
          <div className="cart"><i className="bi bi-cart3"></i></div>
        </div>
      </div>
      <div className="contact-info d-md-flex">
        <p>408-386-5987 </p>
        <p><a href="mailto:">aryasastry@gmail.com</a></p>
      </div>
    </div>
  </div>
</nav>
        // {/* <Link to="/">Home</Link> <Link to="/about">About</Link> */}
        );
      
}

export default Nav;