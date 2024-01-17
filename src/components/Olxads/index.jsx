import React from 'react'
import { useNavigate } from "react-router-dom";
import './style.css'


export default function Olxads(props) {
    console.log("props-->", props.index)
    const { brand, price, thumbnail, description } = props.ads

    const navigate = useNavigate();

    return (

        <div class="card" style={{ width: "18rem" }} onClick={() => navigate(`/detail/${props.index}`)} >
            <div class="card-img-top">
                <img src={thumbnail} class="card-img-top" alt="ad1" />
            </div>
            <div class="card-body">
                <h5 class="card-title">Rs {price}</h5>
                <p class="card-text">{brand} <br /> {description}</p>
                <p class="add">Allama Iqbal Town,Lahore <br />3 days ago</p>
            </div>

        </div >
    )
}
