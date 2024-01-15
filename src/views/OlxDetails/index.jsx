import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Olxnav from '../../components/olxNav'
import Olxnav3 from '../../components/OlxNav3'
import Olxfooter from '../../components/Olxfooter'
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
    console.log("data", singleAd)
    return (
        <div>
            <Olxnav />
            <Olxnav3 />

            <div >
                <div class='details'>
                    <div class='imageGallery'>

                    </div>
                    <div class='contactInfo'></div>
                </div>
                <div class='details-2'>

                </div>
                <div class='details-3'>

                </div>
                <div class='details-4'>

                </div>
            </div>
            <Olxfooter />
        </div>
    )
}
