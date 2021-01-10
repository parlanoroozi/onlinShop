import React, { Fragment } from 'react';
import {  NavLink } from 'react-router-dom';


const Login = () => {
    return (  <Fragment>
        <div className="container container-body">
            <div className="row flex-center container-bg">
            <div className="col-sm-6">

<div className="Fields ">
<div>

<div className="formContainer-login ">
<form>
<h4>ورود</h4>
<hr/>
<div className="Fields ">
<div>


<label for="username2">نام کاربری : </label>
<input type="text" class="form-control" id="username2" aria-describedby="emailHelp" placeholder="نام کاربری ... "/>
                           
<label for="password2"> رمز عبور : </label>
<input type="password" class="form-control" id="password2" aria-describedby="emailHelp" placeholder="   گذرواژه ..."/>
                           
<div className="btn-login">
  <button type="submit" class="btn ">ورود</button>

                           </div>
                               <div className="login-link">
                           <NavLink  to="/register"> ثبت نام نکرده اید؟   </NavLink>

                           </div>
</div>

</div>
</form>
</div>

</div>

</div>
</div>
<div className="col-sm-6 Fields-img ">
<img src="https://i.pinimg.com/564x/3b/56/a8/3b56a8aa62a8bb686ae6302a05c8ffcf.jpg" alt=""/>
</div>
            </div>

        </div>


     
</Fragment>







);
}
 
export default Login;