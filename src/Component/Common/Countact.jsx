import React, { Fragment } from 'react';

const CountactUs = () => {
    return ( <Fragment>
        <div className="container contact-body">
        <div className="row contact-form ">
  <div className="contact-img-body col-6 col-sm-6 col-md-6"></div>
  <div className="  col-6 col-sm-6 col-md-6">
      <div>
      <form className="form-style">
<h3 className="header-form" >ارتباط با ما</h3>

      <div class="form-group "> 
		<label for="full_name" class="control-label">: نام  </label>
		<input type="text" class="form-control" id="full_name" name="full_name" placeholder="نام خود را وارد کنید"/>
    
	</div>	
    <div class="form-group "> 
		<label for="mail" class="control-label">: ایمیل  </label>
		<input type="email" class="form-control" id="mail" name="mail" placeholder="نام خود را وارد کنید"/>
    
	</div>	
    <div class="form-group "> 
		<label for="mail" class="control-label">: ایمیل  </label>
        <textarea id="txt" name="txt">
متن خود را وارد کنید</textarea>    
	</div>
    <div className="btn-form-body">
        <input className="btn-form" type="submit" value="ارسال"/>
    </div>
</form>
      </div>
  </div>
</div>
        </div>
    </Fragment> );
}
 
export default CountactUs;