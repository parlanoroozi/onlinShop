import React, { Fragment } from 'react';
import CardOverLay from './../Common/CardOverlay';
import Slider from './../Common/Slider';
import CountactUs from './../Common/Countact';
import Carousel from './../Common/Carousel';
import Fototer from './../Common/FooterMain';

const HomeBody = () => {
    return ( <Fragment>
        <Carousel/>
  <div className="container-fluid">

  <div className="style-hr">
          <h3>محصولات</h3>
          <hr />
        </div>
        <CardOverLay/>
        <div className="style-hr">
          <h3>محصولات پرفروش</h3>
          <hr />
        </div>
        <Slider/>
        <div className="style-hr">
          <h3>ارتباط با ما</h3>
          <hr />
        </div>

<CountactUs/>
</div>
<Fototer/>

    </Fragment> );
}
 
export default HomeBody;