import React, { Fragment, useState } from 'react';
import {  Link, NavLink } from 'react-router-dom';
import NavProuduct from './ProductNav';
import Fototer from './../Common/FooterMain';





const Skipproducts = (props) => {
  const [cart,setCart]=useState([]);

  const [Productss] = useState([
    {
      name :'مرطوب کننده  ',
      brand:' Paulas Choice',
      cost:'200.000',
      image:'https://i.pinimg.com/564x/44/50/04/4450041877cd063f517c0ffc59d559a2.jpg'

    },
    {
      name :'کرم مرطوب کننده    ',
      brand:'Lisson',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/60/52/aa/6052aa38d0d85e9021a5a7eca09c9664.jpg'

    },
    {
      name :'  تونر صورت   ',
      brand:'Goop',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/17/e8/c7/17e8c730cfbe6365f6e6c7635b04aeee.jpg'
    },
    {
      name :' سرم روشن ککنده پوست ',
      brand:'Laura',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/52/1a/cb/521acbf1892239d623b19971e2ff5d8a.jpg'
    },
    {
      name :'صابون های دست ساز   ',
      brand:' Organic',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/83/4d/0e/834d0e1e2f55110019d733baa1f32bef.jpg'
    },
    {
      name :'سرم جوان سازی پوست   ',
      brand:' Maya',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/21/87/81/218781b70fff0e3eee4ba43b87554f96.jpg'
    },

  ]);
  const addToCart=(Product) =>{
    setCart([...cart,Product]);
    
  }
      return (<Fragment> 

<br/>

<div className="container mt-5">
      
<nav className=" navbar-expand-lg  navbar-light mt-5 ">
 
 <div className="collapse navbar-collapse" id="navbarNav">
   <ul className="navbar-nav NavProuduct  ">
   <li className="nav-item">
     <Link  className="nav-link"  to="/Cart">  ({cart.length})    <i className="fas fa-shopping-basket"style={{fontSize:"18px"}}></i></Link>
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
<div className="row">
{Productss.map((Product,idx)=>(

<div className="col-md-auto mt-5"key={idx}>
<div class="card mb-2" style={{ width: "19rem" , height: "auto" }}>
<div>
<div > 

<img className="card-img-top" src={Product.image}
 alt=""/>
</div>

<div className="card mb-7  " style={{marginTop:"5px" , width: '19rem', height: 'auto' ,textAlign:'center'}} >

<h5> {Product.name} </h5>
<h4 ><strong><a href=""> {Product.brand}</a></strong></h4>



<div className="card-footer mt-7 ">
 <span className="float-left">{Product.cost} T </span>
 <span className="float-right"><a className="" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
 <i  onClick={() => addToCart(Product)}  style={{fontSize:"24px"}} className="fa">&#xf291;</i>

       </a>
       </span>
</div>
<div style={{textAlign:"center"}}>
<NavLink to="/tozihat"  className="btn-Shop btn" > مشاهده </NavLink> 

</div>
</div>
</div>
</div>
</div>


))}

</div>


</div>
<Fototer/>

    </Fragment>  );
}
 
export default Skipproducts;