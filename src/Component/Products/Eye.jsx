import React, { Fragment, useState } from 'react';
import {  Link, NavLink } from 'react-router-dom';
import Fototer from './../Common/FooterMain';





const Eyeproducts = (props) => {
  const [cart,setCart]=useState([]);

  const [Productss] = useState([
    {
      name :'کانسیلر چشم ',
      brand:' Paulas Choice',
      cost:'200.000',
      image:'https://i.pinimg.com/564x/68/e1/02/68e1024c910f727c53665e6bdc1e491b.jpg'

    },
    {
      name :'مداد چشم مشکی   ',
      brand:'Almay',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/30/48/16/304816bba0368ccf5223724d4a924e71.jpg'

    },
    {
      name :'  پالت سایه 9 رنگ  ',
      brand:'Bobbi Brown',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/74/ca/fa/74cafae4d3121f56382dfdc105a18a23.jpg'
    },
    {
      name :' ریمل حجم دهنده',
      brand:'Faux Clis',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/11/24/a1/1124a133cdf494372a8c28e6c6a1cb9e.jpg'
    },
    {
      name :'ریمل آبی   ',
      brand:' Faux Clis',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/6c/fd/e5/6cfde51daa0578d3623fd50eab99cd94.jpg'
    },
    {
      name :'پالت سایه صورتی  ',
      brand:' Cplorpop',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/a5/dc/ce/a5dccef04685f686dc0be85a50940295.jpg'
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
     <Link  className="nav-link"  to="/Cart">   ({cart.length})  <i className="fas fa-shopping-basket"style={{fontSize:"18px"}}></i></Link>
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

<div className="col-md-auto mt-5" key={idx}>
<div class="card mb-2" style={{ width: "19rem" , height: "auto" }}>
<div>
<div > 

<img class="card-img-top" src={Product.image}
 alt=""/>
</div>

<div class="card mb-7  " style={{marginTop:"5px" , width: '19rem', height: 'auto' ,textAlign:'center'}} >

<h5> {Product.name} </h5>
<h4 ><strong><a href=""> {Product.brand}</a></strong></h4>



<div class="card-footer mt-7 ">
 <span class="float-left">{Product.cost} T </span>
 <span class="float-right"><a class="" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
 <i  onClick={() => addToCart(Product)}  style={{fontSize:"24px"}} class="fa">&#xf291;</i>

       </a>
       </span>
</div>
<div style={{textAlign:"center"}}>
  <NavLink className="btn-Shop btn" to="/tozihat" > مشاهده </NavLink> 

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
 
export default Eyeproducts;