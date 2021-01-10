import React, { Fragment } from 'react';

const Off = () => {
   
    const answerArray = ["یه بار دیگه شانستو امتحان کن!", " OFF55112648", "نا امید نشو! ", "OFF778859865", "OFF67309214/4", "ای بابا نشد ", " OFF5874684630 "];
    
const message = document.querySelector(".message");
const button = document.querySelector(".btn");
    function todo() {
        let res = Math.floor(Math.random() * answerArray.length);
    
        message.innerText =  " " +
            answerArray[res];
    
    }
    return ( 
<Fragment>

<div className="div1">
    <h3>کد تخفیف </h3>
    <h4>هدیتو از همستر بگیر!</h4>
    <br/>
    <div className="message">
</div>
<br/>
    <button onClick={todo} className="btn button-off">شانستو امتحان کن<img src="https://img.icons8.com/fluent/48/000000/cute-hamster.png"/></button>
    <br/>
   
</div>
</Fragment> 
 );
 
}
 
export default Off;