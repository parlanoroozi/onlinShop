import React, { Fragment, useState } from 'react';
import NavProuduct from './ProductNav';
import { Link, NavLink } from 'react-router-dom';
import Fototer from './../Common/FooterMain';

const Brushprouducts = (props) => {
  
const [cart,setCart]=useState([]);
  const [Productss] = useState([
    {
      name :'ست براش مویی ',
      brand:'M.A.C',
      cost:'200.000',
      image:'https://i.pinimg.com/564x/06/f4/a4/06f4a4899aed405f66d1cc9660ab4885.jpg'

    },
    {
      name :'ست براش رزگلد  ',
      brand:'M.A.C',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/34/d7/e1/34d7e1b6f7cc9301f5a51d2785a437be.jpg'

    },
    {
      name :' ست براش چوبی  ',
      brand:'M.A.C',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/5b/f9/53/5bf953802e2f47aa33785197ab911d42.jpg'
    },
    {
      name :' پد آرایشی  ',
      brand:'  M.A.C',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/1b/91/78/1b917802afbdd0d3186b9f2eedeefa0b.jpg'
    },
    {
      name :' پد آرایشی    ',
      brand:' M.A.C',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/07/0c/58/070c5867ff05affe6f1d30db426e4cb9.jpg'
    },
    {
      name :'پد سیلیکنی   ',
      brand:' M.A.C',
      cost:'100.000',
      image:'https://i.pinimg.com/564x/53/75/ed/5375edeef4e653655196f5446bf147d1.jpg'
    },


  ]);

const addToCart=(Product) =>{
  setCart([...cart,Product]);
  
}
  

    return ( <Fragment> 
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
<button className="btn">     <i onClick={() => addToCart(Product)}  style={{fontSize:"24px"}} class="fa">&#xf291;</i>
</button>        
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
 
export default Brushprouducts;