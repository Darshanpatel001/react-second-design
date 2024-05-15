import React from 'react'
import feture_img from ".././images/featureimg.png"
function Choos_section() {
  return (
    <section class="choose">
    <div class="container
    ">
        <div class="row">
            <div class="col-lg-6  ">
                <div class="choose-box ">
                    <div class="title ">
                        <h2 class="fs-5 mb-4">Why Choose Us
                        </h2>
                        <p class="mb-5">Why choose us for our business needs</p>

                    </div>
                    <p class="mt-1 fs-5 lh-base p1">Welcome to our business website! We understand that in today's
                        competitive market.</p>
                    <div class="choose-data ">
                        <div class="line"></div>
                        <div class="customer d-sm-flex justify-content-around py-5">
                            <div class="coustomer-list d-flex">
                                <h2 class="mb-0">3M</h2>
                                Satisfied
                                <br/>
                                Customers
                            </div>
                            <div class="dot my-4 rounded-5 "></div>
                            <div class="coustomer-list d-flex ">
                                <h2 class="mb-0">04</h2>
                                Years of
                                <br/>
                                Active work
                            </div>
                        </div>

                        <button class="btn">
                            <a href="#brand-logo" class="cstm-btn ">Learn More<i
                                    class="fa-solid ps-2 text-center fa-arrow-right-long"
                                    ></i></a>
                        </button>
                        <button class="btn"/>
                    </div>
                </div>

            </div>
            <div class="col-lg-6 col-md-12 ">
                <div class="imgg ">
                    <img  src={feture_img} alt="feature"/>
                </div>
                 {/* <img class="relative" src="img/img-2.png " alt=""/>  */}
            </div>
        </div>
    </div>
</section>
  )
}

export default Choos_section