import React, { Fragment,useState } from 'react';

const ProductIntroduction = () => {

  const [Counter , setCounter] = useState(0)
    return ( <Fragment>
  
        <div className="container  shadow-sm p-3 mb-5 bg-white rounded tozihat-body ">


<div className="row respansiv-tozihat ">
  <div class="col-md-6"><div class="container">

<div class="tab-content">
  <div id="pic1" class="tab-pane fade in active">
  <img src="https://i.pinimg.com/564x/cc/a4/02/cca40290bc3bc0edc2b6def49b2ff33f.jpg" alt=""/>
  </div>
  <div id="pic2" class="tab-pane fade">
  <img src="https://i.pinimg.com/564x/51/5b/51/515b519a75d44e844f4daad9fadbfc7a.jpg" alt=""/>
  </div>
  <div id="pic3" class="tab-pane fade">
  <img src="https://i.pinimg.com/564x/1c/16/b5/1c16b59056ed4d598282838b82f04a95.jpg" alt=""/>
      </div>
  
</div>
<ul class="nav row nav-tabs justify-content-center">
  <li class="active"><a data-toggle="tab" href="#pic1"><img className="img-tab rounded" src="https://i.pinimg.com/564x/cc/a4/02/cca40290bc3bc0edc2b6def49b2ff33f.jpg" alt=""/></a></li>
  <li><a data-toggle="tab" href="#pic2"> <img className="img-tab rounded" src="https://i.pinimg.com/564x/51/5b/51/515b519a75d44e844f4daad9fadbfc7a.jpg" alt=""/></a></li>
  <li><a data-toggle="tab" href="#pic3"> <img className="img-tab rounded" src="https://i.pinimg.com/564x/1c/16/b5/1c16b59056ed4d598282838b82f04a95.jpg" alt=""/></a></li>
</ul>
</div></div>
  <div class="col-md-6 tozihat">
      <h3 style={{textAlign:"center"}}>ست کامل براش</h3>
      <hr  style={{marginLeft:"5%"}} />
      <h4 style={{textAlign:"right"}}>: ویژگی ها</h4>
      <ul style={{textAlign:"right",listStyle:"none"}}>
        <li>پر تراکم</li>
        <li> بسیار نرم و راحت </li>
      </ul>
      <hr style={{width:"50%" , marginLeft:"50%"}} />
      <div className="container">
      <form className="form-tozihat"> 
      <h4> : انتخاب رنگ</h4>
    <label className="radio-inline mr-3 ">
      <input type="radio" name="optradio" checked/>رز گلد
    </label>
    <label className="radio-inline mr-3">
      <input type="radio" name="optradio"/>مشکی
    </label>
    <label className="radio-inline">
      <input type="radio" name="optradio"/>سفید
    </label>
  </form>
  <hr style={{width:"50%" , marginLeft:"50%"}} />
  <div className="submit-tozihat">
  <button onClick={()=>setCounter(prevState => prevState+1)} className="btn button-tozihat">افزودن به سبد خرید{Counter}</button>

  </div>
  </div>
  </div>
</div>

</div>
<ul className="nav nav-tabs justify-content-center">
  <li  style={{paddingRight:"25px"}} className="active"><a style={{color:"#c77a7abd"}} data-toggle="tab" href="#naghd">نقد و برسی</a></li>
  <li><a  style={{color:"#c77a7abd"}} data-toggle="tab" href="#moshakhasat"> مشخصات</a></li>
</ul>

<div className="tab-content rtl">
  <div id="naghd" className="tab-pane fade in active ">
    <h3 className="mt-3"><i style={{color:"orange"}} className="fas fa-glasses"></i>    شرح</h3>
    <p style={{paddingRight:"10px"}}> برای داشتن آرایشی بی نقص و زیبا تنها استفاده از لوازم آرایش با کیفیت و اصل کافی نیست، ابزار مناسب نیز یکی از فاکتورهای اساسی در آرایش حرفه ای می باشد. </p>
    <p style={{paddingRight:"10px"}}>این براش ها باعث پخش شدن یکسان و یکنواخت لوازم آرایش پودری بر روی پوست صورت می گردد و با دقت بیشتری می توانید لوازم آرایشی که در ناحیه مشخصی باید استفاده شود مثل کانسیلر را در آرایش صورت خود استفاده نمایید</p>
  </div>
  <div id="moshakhasat" className=" rtl tab-pane fade">
    <h3 className="mt-3">  مشخصات محصول </h3>

<table className="table ">
  <thead className="thead-light">
    <tr>
      <th style={{fontSize:"22px"}} scope="col"><i style={{color:"red"}} className="fas fa-candy-cane"></i>  مشخصات کلی</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">مشخصه اصلی</th>
      <td>ست براش</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">صادر کننده مجوز</th>
      <td> سازمان غذا و دارو </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">سایر توضیحات</th>
      <td> ساخته شده از موی مصنوعی بسیار نرم با تراکم بالا </td>
      <td> </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"> </th>
      <td>  پخش کاملا یکنواخت  </td>
      <td></td>
      <td></td>
    </tr>  <tr>
      <th scope="row"> </th>
      <td>  کاملا نرم و روان  </td>
      <td></td>
      <td></td>
    </tr>  <tr>
      <th scope="row"> </th>
      <td>  پوشش منافذ و خطوط پوست  </td>
      <td> </td>
      <td></td>
    </tr>  
  </tbody>
</table>
  </div>
  
</div>

    </Fragment> );
}
 
export default ProductIntroduction;