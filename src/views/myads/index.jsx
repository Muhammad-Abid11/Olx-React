import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMyAdsFromDb, onAuthStateChanged, auth } from '../../config/firebase/firebase'
import carIcon from '../../assests/header-car.png'
import LogoBlack from "../../assests/olx-black.png"
import property from "../../assests/header-property.png"
import BackArrow from '../../assests/arrow-back.svg'
import Olxnav from '../../components/olxNav'
import Olxnav3 from '../../components/OlxNav3'

import './style.css'

export default function Myads(props) {
    const navigate = useNavigate()
    const [firebaseMyAds, setFirebaseMyAds] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getFirebaseMyads(user.uid)
            }
        });
    }, [])

    const getFirebaseMyads = async (id) => {
        // console.log("user ki ID", id)
        const data = await getMyAdsFromDb(id)
        setFirebaseMyAds(data)
        // console.log("my ads", data)
    }


    // console.log("firebase my data", firebaseMyAds[0])
    return (
        <div>
            <Olxnav />
            {/* <Olxnav3 /> */}

            <div className='myads_body'>
                <h2>Manage and view your Ads</h2>

                <div className='myads-postBody'>

                    {firebaseMyAds?.map((data, index) => {
                        return (
                            <div>
                                <div className='myad-one'>
                                    <div className='ads-thumbnail'>
                                        <img src={data.image} alt="thumbnail" />
                                    </div>
                                    <div className='myad-one-details'>
                                        <div className='ads-details'>
                                            <h1>
                                                {data.title}
                                            </h1>
                                        </div>
                                        <div className='ads-buttonIcon'>
                                            <h5>

                                                Rs {data.amount}
                                            </h5>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    )
}
