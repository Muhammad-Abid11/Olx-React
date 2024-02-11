import React from 'react'
import Map, { Marker } from 'react-map-gl';

import './style.css'
export default function Mymap() {
    return (
        <div>
            <h1>Map</h1>
            <div className='mapBody'>
                <Map
                    mapboxAccessToken="pk.eyJ1IjoibXVoYW1tYWQtYWJpZDExIiwiYSI6ImNsc2czeWlqdTBpNTMya21yZWkyaGRlZjYifQ.6IWi1gigMCpInoZj1sEf5g"
                    initialViewState={{
                        longitude: 67.06845370739835,
                        latitude: 24.88367671934456,
                        zoom: 14

                    }}
                    style={{ width: 600, height: 400 }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                    <Marker
                        draggable={true}
                        onDragEnd={e => console.log(e)}
                        offsetLeft={-20}
                        offsetTop={-10}
                        longitude={67.06845370739835} latitude={24.88367671934456} anchor="bottom" >
                        <p
                            role="img"
                            className="cursor-pointer text-2xl animate-bounce"
                            aria-label="pin"
                        >
                            📍
                        </p>
                    </Marker>
                </Map >

            </div>
        </div>
    )
}
