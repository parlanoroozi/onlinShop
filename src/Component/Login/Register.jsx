import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return ( 
        <Fragment>
        <div className="container container-body">
            <div className="row flex-center container-bg">
            <div className="col-sm-6">

<div className="Fields ">
<div>

<div className="formContainer-login ">
<form>
<h4>ثبت نام</h4>
<hr/>
<div className="Fields ">
<div>


<label for="username2">نام کاربری : </label>
<input type="text" class="form-control" id="username2" aria-describedby="emailHelp" placeholder="نام کاربری ... "/>

<label for="email2"> ایمیل :  </label>
<input type="mail" class="form-control" id="email2" aria-describedby="emailHelp" placeholder=" ایمیل ..."/>

<label for="password2"> رمز عبور : </label>
<input type="password" class="form-control" id="password2" aria-describedby="emailHelp" placeholder="   گذرواژه ...   "/>


                           
<div className="btn-login">
  <button type="submit" class="btn ">ورود</button>

                           </div>
                               <div className="login-link">
                               <Link  to="/logiin">  عضو شده اید؟   </Link>
                           </div>
</div>

</div>
</form>
</div>

</div>

</div>
</div>
<div className="col-sm-6 Fields-img ">
<img src="https://i.pinimg.com/564x/60/41/80/6041804f77e5a73e49d8b834726862c4.jpg" alt=""/>
</div>
            </div>

        </div>

     
</Fragment>
           
     );
}
 
export default Register;