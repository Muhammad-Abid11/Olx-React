import React from 'react'
import { useNavigate } from "react-router-dom";
import './style.css'


export default function Olxads(props) {
    // const { brand, price, thumbnail, description } = props.ads //for api-data
    // console.log("propsOLXads", props.ads)
    const { title, amount, image, description, id, uid } = props.ads //for firebase Data
    // console.log("user-->", uid)



    const navigate = useNavigate();

    return (
        // <div>Hello</div>
        <div class="card" style={{ width: "18rem", height: "450px" }} onClick={() => navigate(`/detail/${id}`)} >
            <div class="card-img-top">
                <img src={image} class="card-img-top" alt="ad1" />
            </div>
            <div class="card-body">
                <h5 class="card-title">Rs {amount}</h5>
                <p class="card-text">{title} <br /> {description}</p>
                <p class="add">Allama Iqbal Town,Lahore <br />3 days ago</p>
            </div>

        </div >
    )
}
