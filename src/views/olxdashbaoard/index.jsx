import React from 'react'

import iconArrow from "../../OLX/assests/iconArrowDown_.svg"
import mobIcon from "../../OLX/assests/mobiles..png"
import vehiclesIcon from "../../OLX/assests/vehicles.png"
import propertyIcon from "../../OLX/assests/property-for-.png"
import propforRent from "../../OLX/assests/proForRent.png"
import electronic from "../../OLX/assests/electronics.png"
import bikes from "../../OLX/assests/bikes..png"
import indusIcon from "../../OLX/assests/business-industrial-.png"
import servicesIcon from "../../OLX/assests/services..png"
import jobsIcon from "../../OLX/assests/jobs.png"
import animalsIcon from "../../OLX/assests/animals.png"
import furnitureIcon from "../../OLX/assests/furniture-home.png"
import fashionIcon from "../../OLX/assests/fashion.png"
import booksIcon from "../../OLX/assests/books.png"
import kidsIcon from "../../OLX/assests/kids.png"
import iconAppStoreEN from "../../OLX/assests/iconAppStoreEN_footer.svg"
import iconGooglePlayEN from "../../OLX/assests/iconGooglePlayEN_footer.svg"
import iconAppGallery from "../../OLX/assests/iconAppGallery_footer.svg"

import './style.css'


export default function OLXdashboard() {
    return (
        <div>


            {/* <!-- menubar --> */}
            <div class="menu">
                <ul>
                    <li> <a href="#"><b>All categories </b><img src={iconArrow} alt="Arrow Icon" /></a></li>
                    <li> <a href="#">Mobile Phones</a></li>
                    <li> <a href="#">Cars</a></li>
                    <li> <a href="#">Motorcycles</a></li>
                    <li> <a href="#">Houses</a></li>
                    <li> <a href="#">TV - Video - Audio</a></li>
                    <li> <a href="#">Tablets</a></li>
                    <li> <a href="#">Land & Plots</a></li>
                </ul>
            </div>
            {/* <!-- slider --> */}
            <div class="slider">
            </div>

            {/* <!-- All categories --> */}
            <div class="cat container ">
                <div class="cat1">
                    <h3>All categories</h3>
                </div>
                <div class="products row">
                    <div class="product1 col-6 col-sm-3 col-lg-2">
                        <div><img src={mobIcon} alt="mob" /></div>
                        <div>Mobile</div>
                    </div>
                    <div class="product1 col-6 col-sm-3 col-lg-2">
                        <div><img src={vehiclesIcon} alt="vehicles" /></div>
                        <div>Vehicles</div>
                    </div>
                    <div class="product1 col-6 col-sm-3 col-lg-2">
                        <div><img src={propertyIcon} alt="propertyIcon" /></div>
                        <div>Property For Sale</div>
                    </div>
                    <div class="product1 col-6 col-sm-3 col-lg-2">
                        <div><img src={propforRent} alt="propForRent" /></div>
                        <div>Property For Rent</div>
                    </div>
                    <div class="product1 col-6 col-sm-3 col-lg-2">
                        <div><img src={electronic} alt="electronic" /></div>
                        <div>Electronics & Home Appliances </div>
                    </div>
                    <div class="product1 col-6 col-sm-3 col-lg-2">
                        <div><img src={bikes} alt="bikeIcons" /></div>
                        <div>Bikes</div>
                    </div>
                    <div class="product1 col-6 col-sm-3 col-lg-2">
                        <div><img src={indusIcon} alt="Industrial Icon" /></div>
                        <div>Business, Industrial & Agriculture</div>
                    </div>
                    <div class="product1 col-6 col-sm-3 col-lg-2">
                        <div><img src={servicesIcon} alt="servicesIcon" /></div>
                        <div>Services</div>
                    </div>
                    <div class="product1 col-6 col-sm-3 col-lg-2">
                        <div><img src={jobsIcon} alt="jobsIcon" /></div>
                        <div>Jobs</div>
                    </div>
                    <div class="product1 col-6 col-sm-3 col-lg-2">
                        <div><img src={animalsIcon} alt="animalsIcon" /></div>
                        <div>Animals </div>
                    </div>
                    <div class="product1 col-6 col-sm-3 col-lg-2">
                        <div><img src={furnitureIcon} alt="furnitureIcon" /></div>
                        <div>Furniture & Home Decor</div>
                    </div>
                    <div class="product1 col-6 col-sm-3 col-lg-2">
                        <div><img src={fashionIcon} alt="fashionIcon" /></div>
                        <div>Fashion & Beauty</div>
                    </div>
                    <div class="product1 col-6 col-sm-3 col-lg-2">
                        <div><img src={booksIcon} alt="booksIcon" /></div>
                        <div>Books, Sports & Hobbies</div>
                    </div>
                    <div class="product1 col-6 col-sm-3 col-lg-2">
                        <div><img src={kidsIcon} alt="kidsIcon" /></div>
                        <div>Kids</div>
                    </div>
                </div>
            </div>





            <div class="addCards container-fluid ">
                <div class="my-5">
                    <h3>Mobile Phones</h3>
                </div>
                <div class="row">
                    <div class="card1 col-lg-4 col-12 col-xl-3 col-md-6 col-sm-6 ">
                        <div class="card"
                        // style={{ width: "18rem" }}
                        >
                            <div class="card-img-top"
                            //  style="background-image:url('./assests/ad1.jpg') ;"
                            >
                                {/* <!-- <img src="assests/ad1.jpg" class="card-img-top" alt="ad1"> --> */}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Rs 31,500</h5>
                                <p class="card-text">One Plus <br /> 8T,9,9Pro,9R,10Pro,8,8Pro,7,7T</p>
                                <p class="add">Allama Iqbal Town,Lahore <br />3 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div class="card2 col-lg-4 col-12 col-xl-3 col-md-6 col-sm-6 ">
                        <div class="card"
                        // style="width: 18rem;"
                        >
                            <div class="card-img-top"
                            // style="background-image:url('./assests/add2.jpg') ;"
                            >
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Rs 15,500</h5>
                                <p class="card-text">Vivo Oppo Moto Google Oneplus Sony best price DELIVERY all pakistan</p>
                                <p class="add">Nazimabad 2, Karachi<br />4 weeks ago</p>
                            </div>
                        </div>
                    </div>
                    <div class="card2 col-lg-4 col-12 col-xl-3 col-md-6 col-sm-6 ">
                        <div class="card"
                        // style="width: 18rem;"
                        >
                            <div class="card-img-top"
                            // style="background-image:url('./assests/add3.jpg') ;"
                            >
                                {/* <!-- <img src="assests/ad1.jpg" class="card-img-top" alt="ad1"> --> */}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Rs 16,500</h5>
                                <p class="card-text">Vivo Y83 & Vivo Y85</p>
                                <p class="add">Garhi Shahu, Lahore<br />3 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div class="card2 col-lg-4 col-12 col-xl-3 col-md-6 col-sm-6 ">
                        <div class="card"
                        //  style="width: 18rem;" 
                        >
                            <div class="card-img-top"
                            //  style="background-image:url('./assests/add4.jpg') ;"
                            >
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Rs 71,000</h5>
                                <p class="card-text">iphone 11 non pta</p>
                                <p class="add">GT Road, Gujranwala<br />1 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- car section --> */}


            <div class="addCards container-fluid ">
                <div class="my-3">
                    <h3>Cars</h3>
                </div>
                <div class="row">
                    <div class="card1 col-lg-4 col-12 col-xl-3 col-md-6 col-sm-6 ">
                        <div class="card"
                        // style="width: 18rem;"
                        >
                            <div class="card-img-top"
                            // style="background-image:url('./assests/car1.jpg') ;"
                            >
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Rs 6,200,000</h5>
                                <p class="card-text">Honda Civic for Sale</p>
                                <p class="add">Askari 10, Lahore<br />18 hours ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Footer --> */}
            <footer>
                <div class="footer">
                    <div class="footer-img"></div>
                    <div class="footer-text  d-none  d-sm-none d-md-block">
                        <h1>TRY THE OLX APP</h1>
                        <br />
                        <p>Buy, sell and find just about anything using the app on your mobile.</p>
                    </div>
                    <div>
                        <div>
                            <p></p>GET YOUR APP
                        </div>
                        <div class="AppStore">
                            <img src={iconAppStoreEN} alt="alibaba" />
                            <img src={iconGooglePlayEN} alt="alibaba" />
                            <img src={iconAppGallery} alt="alibaba" />
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}
