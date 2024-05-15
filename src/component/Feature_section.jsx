import React from 'react'


function Feature_section({title, des,price}) {
  return (
   
                <div class="col-lg-4 col-md-6 col-12 mb-5 ">
                    <div class="card features-card">
                        <div class="icon-box">
                            <i class="fa-regular fa-chess-knight"></i>
                        </div>
                        <div class="card-body">
                            <h2 class="fs-3 text-center">{title}</h2>
                            <p class="fs-5 text-center lh-base"> {des}</p>
                            <p>{price}</p>
                        </div>
                    </div>
                </div>

  )
}

export default Feature_section