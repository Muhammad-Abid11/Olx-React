import React from 'react'
import './style.css'

import iconFbfooter from '../../OLX/assests/iconFacebook_footer.svg'
import iconTwitterfooter from '../../OLX/assests/iconTwitter-footer.svg'
import iconYoutubefooter from '../../OLX/assests/iconYoutube_footer.svg'
import iconInstagramfooter from '../../OLX/assests/iconInstagram_footer.svg'
import iconAppStoreENfooter from '../../OLX/assests/iconAppStoreEN_footer.svg'
import iconGooglePlayENfooter from '../../OLX/assests/iconGooglePlayEN_footer.svg'
import iconAppGalleryfooter from '../../OLX/assests/iconAppGallery_footer.svg'
export default function Olxfooter() {
    return (
        <footer>

            <div class="footer2">
                <div>
                    <h6>
                        POPULAR CATEGORIES
                    </h6>
                    <ul>
                        <li>Cars</li>
                        <li>Flats for rent</li>
                        <li>Mobile Phones</li>
                        <li>Jobs</li>
                    </ul>
                </div>
                <div>
                    <h6>
                        TRENDING SEARCHES
                    </h6>
                    <ul>
                        <li> Bikes</li>
                        <li> Watches</li>
                        <li> Books</li>
                        <li> Dogs</li>

                    </ul>
                </div>
                <div>
                    <h6>
                        ABOUT US
                    </h6>
                    <ul>
                        <li> About Dubizzle Group</li>
                        <li> OLX Blog</li>
                        <li> Contact Us</li>
                        <li> OLX for Businesses</li>

                    </ul>
                </div>
                <div>
                    <h6>
                        OLX
                    </h6>
                    <ul>
                        <li>Help</li>
                        <li>Sitemap</li>
                        <li>Terms of use</li>
                        <li>Privacy Policy</li>

                    </ul>
                </div>
                <div>
                    <h6>
                        FOLLOW US
                    </h6>
                    <div class="followUs">
                        <div> <img src={iconFbfooter} alt="iconFbfooter" /></div>
                        <div> <img src={iconTwitterfooter} alt="iconTwitterFooter" /></div>
                        <div> <img src={iconYoutubefooter} alt="iconYoutube" /></div>
                        <div> <img src={iconInstagramfooter} alt="iconInstagram" /></div>

                    </div>
                    <div class="followUsApp">
                        <img src={iconAppStoreENfooter} alt="iconAppstore" />
                        <img src={iconGooglePlayENfooter} alt="iconGoogleStore" />
                        <img src={iconAppGalleryfooter} alt="iconGalleryStore" />
                    </div>
                </div>
            </div>
            <div class="footer3">
                <p><b>Free Classifieds in Pakistan </b> . © 2006-2023 OLX</p>
            </div>
        </footer >

    )
}
