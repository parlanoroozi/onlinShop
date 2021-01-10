import React from 'react';
import Main from './Main';
import { Route, Switch } from 'react-router-dom';
import HomeBody from './HomePage-body';
import Login from './../Login/Login';
import Register from './../Login/Register';
import Productslist from './../Products/Product-List';
import LipsProducts from './../Products/Lips';
import Skipproducts from './../Products/skin';
import Brushprouducts from './../Products/Brush';
import Eyeproducts from './../Products/Eye';
import ProductIntroduction from './../Products/Product-introduction';
import Cart from './../Common/Cart';

const Onlineshop = () => {
    return ( 
         <Main>
           <Switch>


 <Route  path='/logiin'  component={Login} />
<Route  path='/register'  component={Register} />
<Route  path='/productList'  component={Productslist} />
<Route  path='/lips'  component={LipsProducts} />
<Route  path='/skin'  component={Skipproducts} />
<Route  path='/brush'  component={Brushprouducts} />
<Route  path='/eye'  component={Eyeproducts} />
<Route  path='/tozihat'  component={ProductIntroduction} />
<Route  path='/Cart'  component={Cart} />






<Route path="/" exact component={HomeBody} />
           </Switch>
        </Main>);
}
 
export default Onlineshop;

