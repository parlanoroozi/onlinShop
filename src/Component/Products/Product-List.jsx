import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';



const Productslist = (props) => {
    
      return (<Fragment>
  
  
    <div className="container-fluid product-List_body justify-content-around  mb-5">
  
  <div className="row">
  <div className="col-md-3">
  
  <div class="card mb-2 product-card" style={{ width: "17rem" , height: "auto" }}>
  
  
    <div> 
      <img class="card-img-top" src="https://i.pinimg.com/564x/80/21/17/802117e3d1817c558f59ccc8d35fa43f.jpg"
        alt="محصولات پوستی"/>
    </div>
  
    <div class="card mb-7 product-card-btn ">
  
       <NavLink className="list-product-NavLink"  to="/skin">محصولات پوستی </NavLink>  
      
    </div>
  
  
  </div>
  
  </div>
  
  
  <div className="col-md-3">
  
  <div class="card mb-2 product-card" style={{ width: "17rem" , height: "auto" }}>
  
  
    <div> 
      <img class="card-img-top" src="https://i.pinimg.com/564x/d0/b4/fb/d0b4fb19c62725553eb0b7bfea98fe6c.jpg"
        alt=" ابزار های آرایشی"/>
    </div>
  
    <div class="card mb-7 product-card-btn " >
  
       <NavLink  className="list-product-NavLink"   to="/brush">ابزار های آرایشی </NavLink>  
      
    </div>
  
  
  </div>
  
  </div>



  <div className="col-md-3">
  
  <div class="card mb-2 product-card" style={{ width: "17rem" , height: "auto" }}>
  
  
    <div> 
      <img class="card-img-top" src="https://i.pinimg.com/564x/fd/d0/26/fdd02656460d13d566d1d204fff83995.jpg"
        alt=" محصوات آرایش لب"/>
    </div>
  
    <div class="card mb-7 product-card-btn" >
  
       <NavLink  className="list-product-NavLink"  to="/lips">محصولات آرایش لب  </NavLink>  
      
    </div>
  
  
  </div>
  
  </div>



  <div className="col-md-3">
  
  <div class="card mb-2 product-card " style={{ width: "17rem" , height: "auto" }}>
  
  
    <div> 
      <img class="card-img-top" src="https://i.pinimg.com/564x/0e/92/da/0e92da6b1f0eedf55031b3501b8ba56c.jpg"
        alt=" محصوات آرایش چشم  "/>
    </div>
  
    <div class="card mb-7 product-card-btn " >
  
       <NavLink  className="list-product-NavLink"   to="/eye">محصولات آرایش چشم   </NavLink>  
      
    </div>
  
  
  </div>
  
  </div>



  </div>
  
  
  </div>
  
  
   
   
  
      </Fragment>  );
  }
   
  export default Productslist;