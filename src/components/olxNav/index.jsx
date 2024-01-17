import React, { useState } from 'react'

import carIcon from '../../assests/header-car.png'
import Logo from "../../assests/logo-blue.png"
import LogoBlack from "../../assests/olx-black.png"
import property from "../../assests/header-property.png"
import searchIcon from "../../assests/search.png"
import findIcon from "../../assests/find.png"
import iconPlus from "../../assests/iconPlusSell.svg"
import iconSellBorder from "../../assests/iconSellBorder.svg"

import MyModal from '../Modal'
import './style.css'
export default function Olxnav() {

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div>
            <nav className="sticky-top bg-light">
                <div className="nav-bar ">
                    <div className="nav-box-1">
                        <img src={Logo} alt="blue-logo" />
                    </div>
                    <div className="nav-box-2 ">
                        <div className="nav-img-2">
                            <img src={carIcon} alt="car-icon" />
                        </div>
                        <div><b>Motors</b></div>
                    </div>
                    <div className="nav-box-2 ">
                        <div className="nav-img-2">
                            <img src={property} alt="prop-icon" />
                        </div>
                        <div><b>Property</b></div>
                    </div>

                </div>
                <div className="navbar2">
                    <div className="navbar2-box1">
                        <img src={LogoBlack} alt="LogoBlack" />
                    </div>
                    <div className="navbar2-box2">
                        <label for="location"><img src={searchIcon} alt="search-icon" /></label>
                        <select id="location">
                            <option value="Pakistan">Pakistan</option>
                            <option value="India">India</option>
                            <option value="UAE">UAE</option>
                        </select>
                    </div>
                    <div className="navbar2-box3">
                        <div className="navbar2-input"><input type="search" id="find"
                            placeholder="Find Cars, Mobile Phones and more..." class="custom-input" /></div>
                        <div className="navbar2-box3-img">
                            <img src={findIcon} alt="find" />
                        </div>
                    </div>
                    <div className="navbar2-box4">
                        {/*  */}

                        <MyModal show={showModal} handleClose={handleClose} />
                        {/*  */}

                        <button class="login-text" onClick={handleShow}>Login</button>
                    </div>


                    <div className="navbar2-box5">
                        <button>
                            <img src={iconSellBorder} alt="iconSellBorder" />
                            <div className="navbar2-box5-sell">
                                <img src={iconPlus} alt="iconPlus" />
                                <span>Sell</span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    )
}
