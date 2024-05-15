import React from 'react'
import new1 from "../images/new1.png"
import new2 from "../images/new2.png"
import new3 from "../images/new3.png"
function Blog_section() {
    return (
    <section class="news">
    <div class="container">
        <div class="title text-center">
            <h2 class="fs-5">Latest News & Blog</h2>
            <p class="text-center">Browse our articles <br/>
                & resources</p>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
                <div class="card features-card p-0 mt-5">
                    <img src={new1} class="rounded-top-2" alt="icon1"/>

                    <div class="card-body ">
                        <div class="blog-date d-flex ">
                            <a href="javascript:void(0);" class="pt-2 me-3 mb-3 px-4  pb-2 rounded-5">Business</a>
                            <p class="fs-5   ">July 3, 2023</p>
                        </div>
                        <h3>Success simplified business insights for growth</h3>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12">
                <div class="card features-card p-0 mt-5">
                    <img src={new2} class="rounded-top-2" alt="icon1"/>

                    <div class="card-body ">
                        <div class="blog-date d-flex ">
                            <a href="javascript:void(0);" class="pt-2 me-3 mb-3 px-4  pb-2 rounded-5">Business</a>
                            <p class="fs-5   ">July 3, 2023</p>
                        </div>
                        <h3>Success simplified business insights for growth</h3>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12">
                <div class="card features-card p-0 mt-5">
                    <img src={new3} class="rounded-top-2" alt="icon1"/>

                    <div class="card-body ">
                        <div class="blog-date d-flex ">
                            <a href="javascript:void(0);" class="pt-2 me-3 mb-3  px-4  pb-2 rounded-5">Business</a>
                            <p class="fs-5   ">July 3, 2023</p>
                        </div>
                        <h3>Success simplified business insights for growth</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>  
  )
}

export default Blog_section