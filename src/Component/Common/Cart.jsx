import React, { Fragment } from 'react';
import Fototer from './FooterMain';
import TableCourses from './Table';
import Off from './Off';


const Cart = () => {
    const ChangeTheme =()=>{
        var element = document.body;
   element.classList.toggle("dark-mode");
    }
    return (<Fragment>
        <br/>
        <br/>
        <br/>
        <br/>

        <div className="container-fluid mt-5 cartbody">
 
        <div className="mt-5 tab-content" id="v-pills-tabContent">
  
  <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><div className="main mt-5">
  <h2  style={{textAlign:"right"}}>سبد خرید </h2>
<TableCourses/>
  </div>  
</div>

  <div className="tab-pane fade " id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
      <form>

<div className="Fields-cart  mt-5 ">
<div >
<label for="username3">نام کاربری جدید : </label>
<input type="text" className="form-control" id="username3" aria-describedby="emailHelp" placeholder="نام کاربری ... "/>

<label for="mail"> ایمیل جدید  : </label>
<input type="mail" className="form-control" id="mail" aria-describedby="emailHelp" placeholder="   ایمیل ..."/>
                           
<label for="password3"> رمز عبور جدید  : </label>
<input type="password" class="form-control" id="password3" aria-describedby="emailHelp" placeholder="   گذرواژه ..."/>
<br/>
<br/>
<label for="username2">آدرس  جدید : </label>
<br/>
<textarea id="txt" name="txt">
آدرس خود را وارد کنید
</textarea> 
 <div className="btn-save">
  <button type="submit" className="btn">ذخیره</button>
  </div>
                             
</div>

</div>
</form>
</div>
<div className="tab-pane fade " id="v-pills-off" role="tabpanel" aria-labelledby="v-pills-off-tab">
  <Off/>
</div>
</div>


<div className="sidenav mt-5 ">
  <a href="#about">
      <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://image.freepik.com/free-vector/portrait-african-american-woman-profile-avatar-young-black-girl_102172-418.jpg" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>Parla Noroozi</h4>
                    </div>
                  </div>
                </div>                </div>

                </a>
  <a  href="#services"> 
  <input onClick={ChangeTheme} type="checkbox" name="checkbox" className="switch" />
</a>
<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="true">سبد خرید</a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"> تغیر اطلاعات کاربری</a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-off" role="tab" aria-controls="v-pills-off" aria-selected="false"> دریافت کد تخفیف  </a>

  </div>
</div>
        </div>
       


    </Fragment>  );
}
 
export default Cart;