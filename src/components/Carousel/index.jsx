import React, { useEffect, useState } from 'react'
import './Carousel.css'
export default function Carousel(props) {
    // console.log("props images for carusal", props.images)
    const [activeImage, setActiveImage] = useState(0)
    // console.log("lenght of images", props?.images?.length)

    const moveBack = () => {
        if (!activeImage) {//ye 0 ye pichy jaye too data ki length k final pe jao
            setActiveImage(props?.images?.length - 1)

        } else {
            setActiveImage(activeImage - 1)
        }
    }
    const moveNext = () => {
        // console.log("move next", activeImage)
        setActiveImage((activeImage >= props?.images?.length - 1 ? 0 : activeImage + 1))
    }

    useEffect(() => { //jb page banega iska timer start 
        const clearInterval = setTimeout(() => {
            moveNext() //state update hoye timer phir sy start sy start hoga
        }, 5000)
        return () => {
            clearTimeout(clearInterval); //ta k count taiz nhi chaly agar usper click kiya jaye 
        }
    }, [activeImage]);

    return (
        <div >
            <div style={{ display: "flex", justifyContent: "center" }} >
                <button className='btnBack' onClick={() => { moveBack() }}>
                    Previous
                </button>
                {props?.images?.map((url, index) => {
                    return <img
                        src={url} alt="slide-images"
                        key={index}
                        className='caru'
                        style={{ display: (activeImage === index ? "block" : "none") }}
                    />
                })}
                <button className='btnNext' onClick={() => { moveNext() }}>
                    Next
                </button>
            </div>
        </div>
    )
}
