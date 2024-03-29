import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUser, renderSingleAd } from '../../config/firebase/firebase'
import Olxnav from '../../components/olxNav'
import Olxnav3 from '../../components/OlxNav3'
import Olxfooter from '../../components/Olxfooter'
import locationIcon from '../../assests/location.png'
import './style.css'
import Carousel from '../../components/Carousel'
import Mymap from '../../components/mapBox'
export default function Olxdetails() {
    const { id } = useParams()

    const [singleAd, setSingleAd] = useState({})
    const [firebaseSingleAds, setFirebaseSingleAds] = useState({})
    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        // getAds()
        firebaseSingleData()
    }, [])

    const getAds = () => {
        fetch(`https://dummyjson.com/products/14`)
            .then((response) => response.json())
            .then((data) => setSingleAd(data))
    }

    // console.log("OLXDetail ad-id", id)
    const firebaseSingleData = async () => {
        const data = await renderSingleAd(id)
        const userinfo = await getUser(data.uid)
        setUserInfo(userinfo)
        setFirebaseSingleAds(data)

        // console.log("firebase sy daata aya", data)
        // console.log("firebase sy daata aya", data.uid)
    }
    // console.log("user's details", userInfo)

    // console.log("images-->", singleAd)
    // const { images, price, brand, thumbnail, category } = singleAd

    let { title, amount, image, description } = firebaseSingleAds //for firebaseData
    // console.log(firebaseSingleAds)

    function getRandomMonthInfo() {
        const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'December'];
        const randomMonthNumber = Math.floor(Math.random() * 12); // Random number between 0 and 11
        const randomYear = Math.floor(Math.random() * (new Date().getFullYear() - 2000)) + 2000; // Random year between 2000 and current year
        return `Member since ${months[randomMonthNumber]} ${randomYear}`;
    }



    return (
        <div>
            <Olxnav />
            <Olxnav3 />

            <div class='details-body' >
                <div class='details'>
                    <div class='imageGallery'>
                        {/* <img src={image} alt="" width={"100%"} height={"90%"} /> */}

                        <Carousel images={typeof image === "string" ? image = [image] : image} />

                    </div>
                    <div class='contactInfo'>
                        <div class="contactInfo-details">
                            <div class='contant-Info'>
                                <div className='contant-title'>
                                    <div class="profile-avatar">
                                        <img src={image} alt="Profile Picture" />
                                    </div>
                                    <div className='contant-text'>
                                        <h1>{userInfo?.name}</h1>
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
                            <p><img src={locationIcon} alt="locationIcon" />
                                Allama Iqbal Town,Lahore
                            </p>
                        </div>
                        {firebaseSingleAds?.viewState &&
                            <div class="contactInfo-location-map">
                                <div className='mapDiv'>

                                    <Mymap location={firebaseSingleAds?.viewState} />

                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div class='details-2'>
                    <h1>Rs {amount}</h1>
                    <h3>{`${title} `}</h3>
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
