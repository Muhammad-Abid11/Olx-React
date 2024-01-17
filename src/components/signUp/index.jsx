import React, { useState } from 'react'
// import { onAuthStateChanged } from 'firebase'
import { signUp } from '../../config/firebase/firebase';
import arrowBack from '../../assests/arrow-back.svg'
import './style.css'
export default function Signup(props) {
    // console.log('---.', props.setSecondModal)

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = async () => {
        // Your signup logic here using state values
        // ...
        try {
            const data = {
                name: fullname,
                password: password,
                email: email
            };

            await signUp(data);
            // Clear the input fields
            setFullname('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');


        } catch (error) {
            console.log("error -->", error)
        };

    }







    return (
        <div>

            <h1 onClick={() => props.setSecondModal(false)}>  <img src={arrowBack} alt="arrowBack" width={30} /> </h1>
            <div class="container">
                <label for="fullname"><b>Full Name</b></label>
                <input type="text" placeholder="Enter Username" id="fullname" name="uname" required value={fullname} onChange={(e) => setFullname(e.target.value)} />

                <label for="uemail"><b>Email</b></label>
                <input type="email" placeholder="Enter Email" id="uemail" name="uemail" required value={email} onChange={(e) => setEmail(e.target.value)} />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" id="psw" name="psw" required value={password} onChange={(e) => setPassword(e.target.value)} />

                <label for="confirmPsw"><b>Confirm Password</b></label>
                <input type="password" placeholder="Enter Password" id="confirmPsw" name="confirmPsw" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                <button className="btnSign" type="submit" onClick={handleSignup}>SignUp</button>

                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
            </div>
        </div>
    )
}
