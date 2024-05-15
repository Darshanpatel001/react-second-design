import React from 'react'
import img_1 from "../../images/img-1.png"
import img_2 from "../../images/img-2.png"
import img_3 from "../../images/img-3.png"
import active_member from "../../images/active-member-1.png"
import active_member_2 from "../../images/active-member-2.png"
import active_member_3 from "../../images/active-member-3.png"
function Banner() {
  return (
    <section class="banner">
    <div class="container">
        <div class="row">
            <div class=" col-lg-6 col-md-6     mb-5 ">
                <h1>Empower your <br/> business, ignite <br/> success.</h1>
                <p class="fs-5">Customer satisfaction is at the core of our business philosophy. We strive to build
                    long-lasting
                    relationships with our clients.</p>
                <div>
                    <button class="btn mt-5 mb-5">
                        <a href="#brand-logo" class="cstm-btn">Get started</a>
                    </button>
                    <button class="btn">
                        <a href="javascript:void(0);" class="cstm-btn-1">Contact us</a>
                    </button>
                </div>

            </div>
            <div class="col-lg-6   ">
                <div class="img-box position-relative">
                    <div class="size">
                        <img src={img_1} alt="img-1" class="main-img"/>
                        <img src={img_2} alt="uper-img"
                            class="position-absolute top-0 start-0 translate-middle"/>
                        <img src={img_3} alt="lower-img" class="position-absolute lower-img"/>
                    </div>
                    <div class="card position-absolute">
                        <div class="active-box d-flex">
                            <img src={active_member} class="card-img-top" alt="..."/>
                            <img src={active_member_2} class="card-img-top" alt="..."/>
                            <img src={active_member_3} class="card-img-top" alt="..."/>
                        </div>
                        <h5 class="card-title pt-3">Active 2K Members</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section> 

  )
}

export default Banner