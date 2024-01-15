import React from 'react'
import mobIcon from "../../assests/mobiles..png"
import vehiclesIcon from "../../assests/vehicles.png"
import propertyIcon from "../../assests/property-for-.png"
import propforRent from "../../assests/proForRent.png"
import electronic from "../../assests/electronics.png"
import bikes from "../../assests/bikes..png"
import indusIcon from "../../assests/business-industrial-.png"
import servicesIcon from "../../assests/services..png"
import jobsIcon from "../../assests/jobs.png"
import animalsIcon from "../../assests/animals.png"
import furnitureIcon from "../../assests/furniture-home.png"
import fashionIcon from "../../assests/fashion.png"
import booksIcon from "../../assests/books.png"
import kidsIcon from "../../assests/kids.png"

import './style.css'
export default function Olxnav2() {
    return (
        <div>



            {/* <!-- slider --> */}
            <div class="slider">
            </div>

            {/* <!-- All categories --> */}
            <div class="cat">
                <div class="cat1">
                    <h3>All categories</h3>
                </div>
                <div className='categories'>
                    <div class="product1">
                        <div><img src={mobIcon} alt="mob" /></div>
                        <div>Mobile</div>
                    </div>

                    <div class="product1">
                        <div><img src={vehiclesIcon} alt="vehicles" /></div>
                        <div>Vehicles</div>
                    </div>
                    <div class="product1">
                        <div><img src={propertyIcon} alt="propertyIcon" /></div>
                        <div>Property For Sale</div>
                    </div>
                    <div class="product1">
                        <div><img src={propforRent} alt="propForRent" /></div>
                        <div>Property For Rent</div>
                    </div>
                    <div class="product1">
                        <div><img src={electronic} alt="electronic" /></div>
                        <div>Electronics & Home Appliances </div>
                    </div>
                    <div class="product1">
                        <div><img src={bikes} alt="bikeIcons" /></div>
                        <div>Bikes</div>
                    </div>
                    <div class="product1">
                        <div><img src={indusIcon} alt="Industrial Icon" /></div>
                        <div>Business, Industrial & Agriculture</div>
                    </div>
                    <div class="product1">
                        <div><img src={servicesIcon} alt="servicesIcon" /></div>
                        <div>Services</div>
                    </div>
                    <div class="product1 ">
                        <div><img src={jobsIcon} alt="jobsIcon" /></div>
                        <div>Jobs</div>
                    </div>
                    <div class="product1 ">
                        <div><img src={animalsIcon} alt="animalsIcon" /></div>
                        <div>Animals </div>
                    </div>
                    <div class="product1 ">
                        <div><img src={furnitureIcon} alt="furnitureIcon" /></div>
                        <div>Furniture & Home Decor</div>
                    </div>
                    <div class="product1 ">
                        <div><img src={fashionIcon} alt="fashionIcon" /></div>
                        <div>Fashion & Beauty</div>
                    </div>
                    <div class="product1 ">
                        <div><img src={booksIcon} alt="booksIcon" /></div>
                        <div>Books, Sports & Hobbies</div>
                    </div>
                    <div class="product1 ">
                        <div><img src={kidsIcon} alt="kidsIcon" /></div>
                        <div>Kids</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
