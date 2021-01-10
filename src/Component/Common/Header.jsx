import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';



const Header = () => {

    return ( 
    
      <Fragment>

<nav class="navbarStyle navbar navbar-expand-lg navbar-light  fixed-top">
  <div className="container navbar-collapse collapse "> 

   <a class="navbar-brand" href="#">   
    
    <img className="logo-header rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfeZOw8pNu0XCeraU0AWakm4m0gbJXGHl9eg&usqp=CAU" alt="logo"/>
        
</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="navbar-collapse collapse  " id="navbarSupportedContent">

    <ul className="navbar-nav  nav-links ml-auto">

   

    <li className="nav-item">
      <Link  className="nav-link "   to="/logiin"> <i className="fas fa-user" style={{fontSize:"18px"}}>  </i></Link>
      </li>
      <li className="nav-item">
      <Link  className="nav-link"  to="/Cart">    <i style={{fontSize:"18px"}} className="fas fa-columns"></i> </Link>
      </li>
   
      <li class="nav-item">
        <Link class="nav-link NavLink-Header-style" to="/productList">محصولات</Link>
      </li>
   
      
      <li class="nav-item active">
        <Link class="nav-link NavLink-Header-style" exact to="/">صفحه اصلی <span class="sr-only">(current)</span></Link>
      </li>
    </ul>
   
  </div>
  </div>
</nav>



  
        </Fragment> );
}
 
export default Header;