import React, { Fragment, useState } from 'react';
import {  Link, NavLink } from 'react-router-dom';
import Fototer from './../Common/FooterMain';



const LipsProducts = (props) => {
  const [cart,setCart]=useState([]);

  const [Productss] = useState([
    {
      name :'برق لب   ',
      brand:'M.A.C',
      cost:'200.000',
      image:'https://i.pinimg.com/564x/fb/74/6b/fb746b2509cf49c9fdfbaefc5bf127b7.jpg'

    },
    {
      name :'رژ جامد کالباسی    ',
      brand:'M.A.C',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/51/71/a3/5171a309380ec9875cd4af3ab1bce18b.jpg'

    },
    {
      name :'  رژ قرمز مخملی  ',
      brand:'M.A.C',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/6a/1d/c6/6a1dc6e897b6df3a58d63a65b27f4d10.jpg'
    },
    {
      name :'برق لب  ',
      brand:'  M.A.C',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/b5/e5/c8/b5e5c83c4df648fa247e84338da624bb.jpg'
    },
    {
      name :'برق لب    ',
      brand:' M.A.C',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/72/ba/0d/72ba0d8810cf03b3b59c29b63057d447.jpg'
    },
    {
      name :'برق لب  ',
      brand:' M.A.C',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/76/8a/b9/768ab9bd190c6709a2f3975ad2650633.jpg'
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

<div className="col-md-auto mt-5"key={idx}>
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
 <i style={{fontSize:"24px"}} class="fa">&#xf291;</i>

       </a>
       </span>
</div>
<div style={{textAlign:"center"}}>
   <NavLink  className="btn-Shop btn" to="/tozihat" > مشاهده </NavLink> 

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
 
export default LipsProducts;