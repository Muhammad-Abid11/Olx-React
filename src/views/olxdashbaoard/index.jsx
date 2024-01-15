import React, { useEffect, useState } from 'react'

import iconAppStoreEN from "../../assests/iconAppStoreEN_footer.svg"
import iconGooglePlayEN from "../../assests/iconGooglePlayEN_footer.svg"
import iconAppGallery from "../../assests/iconAppGallery_footer.svg"

import Olxads from '../../components/Olxads'
import Olxnav2 from '../../components/OlxNav2'
import './style.css'

export default function OLXdashboard() {

    const [ads, setAds] = useState([])
    useEffect(() => {
        getAds()
    }, [])

    const getAds = () => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => setAds(data.products))
    }
    // console.log("data", ads)
    return (
        <div>
            <Olxnav2 />


            <div class="addCards  my-5">
                <div class="m-4">
                    <h3>Features Ads</h3>
                </div>
                <div class="Ads-Container">
                    {/* <Olxads /> */}

                    {ads.map((Posts, index) => {
                        return (
                            <Olxads ads={Posts} index={index} />
                        )
                    })}
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


        </div >
    )
}
