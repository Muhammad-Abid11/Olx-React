import React, { useState } from 'react'
import Olxnav from '../../components/olxNav'
import { useNavigate } from 'react-router-dom'
import carIcon from '../../assests/header-car.png'
import LogoBlack from "../../assests/olx-black.png"
import property from "../../assests/header-property.png"
import AdForm from '../../components/sellForm'
import userAvatar from '../../assests/user-avatar.png'
import BackArrow from '../../assests/arrow-back.svg'
import { postAdToDb, auth } from '../../config/firebase/firebase'
import './style.css'
export default function SellPage() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState();
    const [image, setImage] = useState(null);
    // const uid = auth.currentUser.uid //Authentication


    const [selectedImage, setSelectedImage] = useState(userAvatar);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const ad = {
            title,
            description,
            price,
            image,
            // uid
        }

        // 
        const getEmptyFields = (obj) => {
            const emptyFields = [];
            for (const key in obj) {
                if (obj.hasOwnProperty(key) && (obj[key] === '' || obj[key] === undefined)) {
                    emptyFields.push(key);
                }
            }
            return emptyFields;
        };
        const emptyFields = getEmptyFields(ad);
        if (emptyFields.length > 0) {
            console.log(`The object has empty fields: ${emptyFields.join(', ')}`);
        } else {
            console.log("The object does not have empty fields.");
        }
        // 


        let res
        emptyFields.length ? alert(`${emptyFields[0].toLocaleUpperCase()} missing`) : res = await postAdToDb(ad)
        if (res) {
            setTitle("")
            setBrand("")
            setPrice("")
            setImage("")
            setDescription("")
            setSelectedImage(userAvatar)
        }

    };

    // image show krne k input sy get k liye down
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div>

            <div className="nav-bar " style={{ backgroundColor: "#F7F8F8" }}>
                <div className="nav-box-1" onClick={() => navigate('/')}>
                    <img src={BackArrow} alt="BackArrow" />
                    <img src={LogoBlack} alt="blue-logo" />
                </div>
                <div className="nav-box-2 ">
                    <div className="nav-img-2">
                        <img src={carIcon} alt="car-icon" />
                    </div>
                    <div><b>Motors</b></div>
                </div>
                <div className="nav-box-2 ">
                    <div className="nav-img-2">
                        <img src={property} alt="prop-icon" />
                    </div>
                    <div><b>Property</b></div>
                </div>
            </div>

            <div className='sellForm'>
                <div className='form-title'>
                    <h1 >POST YOUR AD</h1>
                </div>
                <div className='adForm'>
                    <div className='adForm-user'>
                        <form onSubmit={handleSubmit} className='container'>
                            <label htmlFor="name">Product Title:</label>
                            <input type="text" id="name" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Product Title" />
                            <label htmlFor="Description">Product Description</label>
                            <input type="text" id="Description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Product Description" />
                            <label htmlFor="Brand">Brand</label>
                            <input type="text" id="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Enter Product brand" />
                            <label htmlFor="price">Price of Product</label>
                            <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" />
                            <div className='btnSignDiv'>
                                <button type="submit" className='btnSign' >Post Now</button>
                            </div>
                        </form>
                    </div>
                    <div className='adForm-Pictures'>
                        <h2 style={{ textAlign: "center" }}>
                            {/* User Profile Card */}
                        </h2>
                        <div class="card">
                            <img src={selectedImage} alt="John" style={{ width: "100%" }} />
                            <h1>
                                {/* John Doe */}
                            </h1>
                            <p class="title">Product Image</p>
                            <p>
                                <input type="file" name="uploadfile" onChange={handleImageChange} accept="image/*" id="img" style={{ display: "none" }} />
                                <label for="img" className='edtBtn'>Click me to upload image</label>
                                {/* <button className='edtBtn'>Upload</button> */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}