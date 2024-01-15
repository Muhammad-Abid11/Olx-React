import React from 'react'
import iconArrow from "../../assests/iconArrowDown_.svg"
import './style.css'
export default function Olxnav3() {
    return (
        <div>


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
        </div>
    )
}
