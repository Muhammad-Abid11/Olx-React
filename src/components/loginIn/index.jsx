import React, { useState } from 'react'
import { auth, onAuthStateChanged } from '../../config/firebase/firebase';

import { login } from '../../config/firebase/firebase';
import './style.css'
export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const data = {
                email,
                password
            }
            await login(data)
            setEmail('');
            setPassword('');
            props.setSecondModal() //it closes all model when user signUp
        } catch (error) {
            console.log("error -->", error.message)
            // alert("user not found")
        };
    }
    return (
        <div>

            {/* <h1 onClick={() => props.setSecondModal(false)}>  <img src={arrowBack} alt="arrowBack" width={30} /> </h1> */}
            <div class="container">
                <label for="uemail"><b>Email</b></label>
                <input type="email" placeholder="Enter Email" id="uemail" name="uemail" required value={email} onChange={(e) => setEmail(e.target.value)} />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" id="psw" name="psw" required value={password} onChange={(e) => setPassword(e.target.value)} />

                <button className="btnLogin" type="submit" onClick={handleLogin}>Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
            </div>
        </div>
    )
}
