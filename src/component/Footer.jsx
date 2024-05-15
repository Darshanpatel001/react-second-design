import React from 'react'
import footer_logo from "../images/footerlogo.png"

function Footer() {
  return (
    <footer>
    <div class="container">
        <div class="footer-top">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12 ">
                    <div class="footerr">
                        <div class="footer-title">
                            <img src={footer_logo} alt="logo"/>
                        </div>
                        <p class="mt-4 fs-5 mb-4  ">4965 Graystone Lakes, Milledgevi banahay Newwork.</p>
                        <div class="footer-social d-flex mb-5">
                            <a href="javascript:void(0);" class="pe-2"><i
                                    class="fa-brands rounded-5 d-flex justify-content-center align-items-center  fa-facebook-f"
                                    ></i></a>
                            <a href="javascript:void(0);" class="pe-2"><i
                                    class="fa-brands rounded-5 d-flex justify-content-center align-items-center  fa-twitter"
                                    ></i></a>
                            <a href="javascript:void(0);" class="pe-2"><i
                                    class="fa-brands rounded-5 d-flex justify-content-center align-items-center  fa-instagram"
                                    ></i></a>
                            <a href="javascript:void(0);" class="pe-2"><i
                                    class="fa-brands rounded-5 d-flex justify-content-center align-items-center  fa-skype"
                                    ></i></a>
                        </div>
                        <div class="webflow ">
                            <div class="text-white hove fs-5">
                                <p>More Webflow<i class="ps-5 fa-solid fa-arrow-right" ></i>
                                    <br/>Templates
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12  ">
                    <div class="footer-title text-lg-center">
                        <h3 class="text-white  mb-5 fs-2">Menu</h3>
                    </div>
                    <ul class="list fs-4 text-lg-center  m-0 p-0">
                        <li class="mb-4  "><a href="javascript:void(0);">Home Page</a></li>
                        <li class="mb-4 "><a href="javascript:void(0);">About Us</a></li>
                        <li class="mb-4 "><a href="javascript:void(0);">Blog</a></li>
                        <li class="mb-4 "><a href="javascript:void(0);">Single Blog</a></li>
                        <li class="mb-4 "><a href="javascript:void(0);">Single Blog</a></li>
                        <li class="mb-4 "><a href="javascript:void(0);">Contact Us</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 col-12  ">
                    <div class="footer-title text-lg-center">
                        <h3 class="text-white  mb-5 fs-2">Template Pages</h3>
                    </div>
                    <ul class="list fs-4 text-lg-center  m-0 p-0">
                        <li class="mb-4  "><a href="javascript:void(0);">Create Account</a></li>
                        <li class="mb-4 "><a href="javascript:void(0);">Sign In</a></li>
                        <li class="mb-4 "><a href="javascript:void(0);">Forgot Password</a></li>
                        <li class="mb-4 "><a href="javascript:void(0);">Confirm Email</a></li>
                        <li class="mb-4 "><a href="javascript:void(0);">Terms & Conditions</a></li>
                        <li class="mb-4 "><a href="javascript:void(0);">Style Guide</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 col-12  ">
                    <div class="footer-title ">
                        <h3 class="text-white  mb-5 fs-2">Newsletter</h3>
                        <p class="mt-4 fs-5 mb-4 ">Stay up to update with our latest news and products.</p>
                    </div>
                    <div class="from-newsletter ">
                        <input type="email" class="letter fs-5 ps-3 rounded-3" placeholder="Enter Your Mail"
                            required/>
                    </div>
                    <div class="new-letter-button">
                        <input type="submit" class="mt-4 button text-white py-2 rounded-3 px-5 fs-5"
                            value="Sign Up"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div class="footer-bottom text-center">
            <div class="copyright fs-5">
                Copyright © | Designed by 
                <a href="javascript:void(0);">Brandbes</a>
                - Powered by 
                <a href="javascript:(0);">Webflow</a>
            </div>
        </div>
</footer>  
  )
}

export default Footer