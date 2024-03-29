import React, { useEffect, useState } from 'react'
import Map, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css'
export default function Mymap(props) {

    /* for detail page usage down*/
    const { latitude: p_latitude, longitude: p_longitude } = props.location //object destructure and re-named
    console.log("props-->", props.location)
    console.log("location props-->", p_latitude, p_longitude)


    const [loading, setLoading] = useState(false)
    const [viewState, setViewState] = useState({
        // longitude: 66.990501, //karachi location as a initial state if not getting props value
        // latitude: 24.860966,

        /* for detail page usage down*/
        longitude: p_longitude, //location from props
        latitude: p_latitude,
        zoom: 16
    });

    /* //off because initial comes their as a props by parent component where it is call(details page)
        useEffect(() => {//location auto get krlyga
            navigator.geolocation.getCurrentPosition((location) => {
                const { latitude, longitude } = location.coords
                setViewState({ ...viewState, latitude, longitude })
                //new location ajaye too old me new location update krdo
                //loading false krdo
                setLoading(!loading)
            })
        }, [])
    
        */
    const locationFinder = () => {//onclick per location findOut krdyga
        navigator.geolocation.getCurrentPosition((location) => {
            const { latitude, longitude } = location?.coords
            console.log("find current-location", latitude, longitude)
            setViewState({ ...viewState, latitude, longitude })
        })
    }

    // console.log("location-->", viewState.latitude, viewState.longitude)

    return (
        <div>
            {/* <h1>Map</h1> */}
            <div className='mapBody'>
                <Map
                    mapboxAccessToken="pk.eyJ1IjoibXVoYW1tYWQtYWJpZDExIiwiYSI6ImNsc2czeWlqdTBpNTMya21yZWkyaGRlZjYifQ.6IWi1gigMCpInoZj1sEf5g"
                    {...viewState}
                    onMove={evt => setViewState(evt?.viewState)}
                    style={{ width: 600, height: 400 }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                    <Marker
                        draggable={true}
                        onDragEnd={e => {
                            // console.log("Marker", e?.lngLat)
                            let { lng, lat } = e?.lngLat
                            setViewState({ ...viewState, longitude: lng, latitude: lat })
                        }
                        }
                        offsetLeft={-20}
                        offsetTop={-10}
                        longitude={viewState?.longitude} latitude={viewState?.latitude} anchor="bottom" >
                        <p
                            role="img"
                            className="cursor-pointer text-13xl animate-bounce"
                            aria-label="pin">
                            📍
                        </p>
                    </Marker>
                </Map >

            </div>

            {/* <button onClick={locationFinder}>Find Current Location</button> */}


        </div>
    )
}
