import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Slider = () => {
    return (<Fragment>
<div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">

<div className="carousel-inner" role="listbox">

  
  <div className=" card-carousel carousel-item active">

    <div className="col-md-3 card-slider" style={{float:"left"}}>
     <div className="card mb-2 ">
         <img 
          src="https://i.pinimg.com/236x/d8/98/83/d89883336fff4cd6046d6f3cdce808f2.jpg" alt="mahsolat"/>
       
        <div className="card-body">
          <h4 className="card-title">پلت سایه 4 رنگ</h4>
          <p className="card-text">چهار رنگ پرکاربرد</p>
          <a className="btn card-btn-slider">مشاهده</a>
        </div>
      </div>
    </div>

    <div className="col-md-3 card-slider" style={{float:"left"}}>
     <div className="card mb-2">
         <img 
          src="https://i.pinimg.com/564x/2a/64/47/2a6447d91e199ca21a38015922d0ebb8.jpg" alt="mahsolat"/>
       
        <div className="card-body">
        <h4 className="card-title">رژ و خط لب</h4>
          <p className="card-text">ست رژ و خط لب</p>
          <a className="btn card-btn-slider">مشاهده</a>
        </div>
      </div>
    </div>

    <div className="col-md-3" style={{float:"left"}}>
     <div className="card mb-2">
         <img 
          src="https://i.pinimg.com/564x/74/bc/d9/74bcd91afff365117c98cc412d4a4ff2.jpg" alt="mahsolat"/>
       
        <div className="card-body">
          <h4 className="card-title">کرم پودر</h4>
          <p className="card-text">کرم پودر  فنتی بیوتی برای پوست های چرب</p>
          <a className="btn card-btn-slider">مشاهده</a>
        </div>
      </div>
    </div>
    
    <div className="col-md-3" style={{float:"left"}}>
     <div className="card mb-2">
         <img 
          src="https://i.pinimg.com/564x/57/ab/29/57ab2953f05158f3354f692800f5977d.jpg" alt="mahsolat"/>
       
        <div className="card-body">
          <h4 className="card-title">پک 4 تایی رژ لب مخملی</h4>
          <p className="card-text">پوشانندگی بالا و بافنی مخملی</p>
          <a className="btn card-btn-slider">مشاهده</a>
        </div>
      </div>
    </div>

  </div>
  

  
  <div className="  card-carousel carousel-item">

  <div className="col-md-3" style={{float:"left"}}>
     <div className="card mb-2">
         <img 
          src="https://i.pinimg.com/564x/fd/5e/34/fd5e34bfb2293e693155a9cbcb9741ef.jpg" alt="mahsolat"/>
       
        <div className="card-body">
          <h4 className="card-title"> رژ مایع لب فنتی</h4>
          <p className="card-text">درخشش و رنگی ماندگار
       </p>
          <a className="btn card-btn-slider">مشاهده</a>
        </div>
      </div>
    </div>

    <div className="col-md-3" style={{float:"left"}}>
     <div className="card mb-2">
         <img 
          src="https://i.pinimg.com/564x/9c/55/fc/9c55fcaccb5a27c64031564b975b38f6.jpg" alt="mahsolat"/>
       
        <div className="card-body">
          <h4 className="card-title"> رژ لب</h4>
          <p className="card-text"> پوشش مخملی و مات</p>
          <NavLink to="/tozihat" className="btn  card-btn-slider">مشاهده</NavLink>
        </div>
      </div>
    </div>

    <div className="col-md-3" style={{float:"left"}}>
     <div className="card mb-2 ">
         <img 
          src="https://i.pinimg.com/564x/9b/57/1d/9b571ddf07c2946fdfe59fcbf371c3a9.jpg" alt="mahsolat"/>
         
       
        <div className="card-body">
          <h4 className="card-title">عطر شنل</h4>
          <p className="card-text">رایحه ای ماندگار و خوش بو</p>
          <a className="btn card-btn-slider">مشاهده</a>
        </div>
      </div>
    </div>
    
    <div className="col-md-3" style={{float:"left"}}>
     <div className="card mb-2">
         <img 
          src="https://i.pinimg.com/564x/f9/da/26/f9da26ecd3623b111ba47550deacc284.jpg" alt="mahsolat"/>
         
       
        <div className="card-body">
          <h4 className="card-title"> اسفنج آرایشی</h4>
          <p className="card-text">مناسب ترین گزینه برای یکدست کردن کرم</p>
          <a className="btn card-btn-slider">مشاهده</a>
        </div>
      </div>
    </div>

  </div>
  

 

</div>
<div className="controls-top">
  <a className="btn-floating" href="#multi-item-example" data-slide="prev">
    <i className="fas fa-chevron-left" style={{color:"gray" , fontSize:"20px"}}></i>
    </a>
  <a className="btn-floating" href="#multi-item-example" data-slide="next">
    <i  style={{color:"gray" , fontSize:"20px"}} className="fas fa-chevron-right"></i></a>
</div>



<ol className="carousel-indicators">
  <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
  <li data-target="#multi-item-example" data-slide-to="1"></li>
  
</ol>


</div>
    </Fragment>  );
}
 
export default Slider;