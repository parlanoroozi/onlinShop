import React, { Fragment } from 'react';

const Carousel = () => {
    return (  <Fragment>
        <div id="demo" className="carousel slide container-fluid" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="carousel-img" src="https://images.unsplash.com/photo-1527632911563-ee5b6d53465b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="brush" />
      <div class="carousel-caption">
        <h3>CHANEL </h3>
        <p>نمایندگی محصولات CHANEL</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img className="carousel-img" src="https://images.unsplash.com/photo-1512207846876-bb54ef5056fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="brush"/>
      <div class="carousel-caption">
        <h3>TARTR</h3>
        <p> TARTR نمایندگی محصولات </p>
      </div>   
    </div>
    <div class="carousel-item">
      <img className="carousel-img" src="https://images.unsplash.com/photo-1522337956741-4b9ce9700652?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1319&q=80" alt="brush" />
      <div class="carousel-caption">
        <h3>BOBBI BROWN</h3>
        <p> BOBBI BROWN نمایندگی محصولات</p>
      </div>   
      
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
    </Fragment>);
}
 
export default Carousel;