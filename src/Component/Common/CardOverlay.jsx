import React, { Fragment } from 'react';

const CardOverLay = () => {
    return ( <Fragment>
         <section class="gallery">
        <div class="cards-wrapper">


            <div class="card card_style">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading"> محصولات مراقبت پوست</h1>
                    <button type="button" class="card-overlay-btn">مشاهده</button>
                </div>
                <img src="https://i.pinimg.com/564x/0f/60/36/0f60363ec10e46b7b67120ed31fa94fc.jpg" class="card-img"/>
            </div>


            <div class="card card_style">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">ابزار های آرایشی </h1>
                    <button type="button" class="card-overlay-btn">مشاهده</button>
                </div>
                <img src="https://i.pinimg.com/564x/1e/8e/61/1e8e61d0361cc5de9268fe1106d706de.jpg" class="card-img"/>
            </div>
            <div class="card card_style">
                <div class="card-overlay">
                    <h1 className="card-overlay-heading"> محصولات آرایش لب</h1>
                    <button type="button" className="card-overlay-btn">مشاهده</button>
                </div>
                <img src="https://i.pinimg.com/564x/8f/8c/a0/8f8ca0b5c5da98025bd501673a305c87.jpg" class="card-img"/>
            </div>
            <div class="card card_style">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">محصولات آرایش چشم </h1>
                    <button type="button" class="card-overlay-btn">مشاهده</button>
                </div>
                <img src="https://i.pinimg.com/564x/15/44/a1/1544a1e6c33ade82bb5b4d8d7e67aa7b.jpg" class="card-img"/>
            </div>
           
           
        </div>
    </section>
    </Fragment> );
}
 
export default CardOverLay;