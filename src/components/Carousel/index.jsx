import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = ({ images }) => {
    console.log("images--->", images)
    return (
        <Carousel>

            {images.map((data) => {
                return (

                    <Carousel.Item>
                        <img
                            style={{ width: "100%" }}
                            // className="d-block w-20 h-20"
                            // src="https://placekitten.com/800/400"
                            src={data}
                            alt="First slide"
                        />
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
};

export default MyCarousel;
