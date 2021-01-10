import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';


const NavProuduct = ({Product}) => {
    return (  <Fragment>




      
        <nav className=" navbar-expand-lg  navbar-light mt-5 ">
 
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav NavProuduct  ">
    <li className="nav-item">
      <Link  className="nav-link"  to="/Cart">  {`${Product}`}   <i className="fas fa-shopping-basket"style={{fontSize:"18px"}}></i></Link>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/skin">محصولات پوستی</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/brush"> ابزار های آرایشی </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/eye">محصولات آرایش چشم</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/lips">محصولات آرایش لب</NavLink>
      </li>

    </ul>
  </div>
</nav>
    </Fragment>);
}
 
export default NavProuduct;