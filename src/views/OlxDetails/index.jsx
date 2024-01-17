import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Olxnav from '../../components/olxNav'
import Olxnav3 from '../../components/OlxNav3'
import Olxfooter from '../../components/Olxfooter'
import locationIcon from '../../assests/location.png'
import MyCarousel from '../../components/Carousel'
import './style.css'

export default function Olxdetails() {
    const { id } = useParams()

    const [singleAd, setSingleAd] = useState({})
    useEffect(() => {
        getAds()
    }, [])

    const getAds = () => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setSingleAd(data))
    }

    // console.log("images-->", singleAd)
    const { images, title, description, price, brand, thumbnail, category } = singleAd

    function getRandomMonthInfo() {
        const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'December'];
        const randomMonthNumber = Math.floor(Math.random() * 12); // Random number between 0 and 11
        const randomYear = Math.floor(Math.random() * (new Date().getFullYear() - 2000)) + 2000; // Random year between 2000 and current year
        return `Member since ${months[randomMonthNumber]} ${randomYear}`;
    }


    if (!singleAd) {
        return (<></>)
    }

    return (
        <div>
            <Olxnav />
            <Olxnav3 />

            <div class='details-body' >
                <div class='details'>


                    <div class='imageGallery'>
                        <img src={thumbnail} alt="" />
                        {/* <MyCarousel images={images} /> */}
                    </div>
                    <div class='contactInfo'>
                        <div class="contactInfo-details">
                            <div class='contant-Info'>
                                <div className='contant-title'>
                                    <div class="profile-avatar">
                                        <img src={thumbnail} alt="Profile Picture" />
                                    </div>
                                    <div className='contant-text'>
                                        <h1>{title}</h1>
                                        <p>{getRandomMonthInfo()}</p>
                                        <h5>See profile</h5>
                                    </div>
                                </div>
                            </div>
                            <div class='contant-chat'>
                                <div>
                                    <button>Show phone number </button>
                                </div>
                                <div>
                                    <button>Chat</button>
                                </div>
                            </div>
                        </div>
                        <div class="contactInfo-location">
                            <h3>Location</h3>
                            <p><img src={locationIcon} alt="locationIcon" />Allama Iqbal Town,Lahore</p>
                        </div>
                    </div>
                </div>
                <div class='details-2'>
                    <h1>Rs {price}</h1>
                    <h3>{`${title} ${brand} ${category}`}</h3>
                    <p> <img src={locationIcon} alt="locationIcon" />Allama Iqbal Town, Lahore</p>
                </div>
                <div class='details-3'>
                    <h2>Description</h2>
                    <p>{description}</p>
                </div>

            </div>
            <Olxfooter />
        </div>
    )
}
