import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './../Common/Header';
import Footersecound from './../Common/Footersecound';
import Fototer from './../Common/FooterMain';

const Main = (props) => {
  

    return ( 
        <Fragment>   
<Header  />
{props.children}
<Footersecound/>

        </Fragment>
     );
}
 
export default withRouter(Main) ;