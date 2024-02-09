import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import LogoBlack from '../../assests/olx-black.png'
import arrowBack from '../../assests/arrow-back.svg'
import './style.css'
import googleIcon from '../../assests/googleIcon.png'
import fbIcon from '../../assests/Facebook_Logo.svg'
import mailIcon from '../../assests/iconMail.svg'
import phoneIcon from '../../assests/telIcon.svg'
import Signup from '../signUp';
import Login from '../loginIn';
const MyModal = ({ show, handleClose }) => {
    const [secondModal, setSecondModal] = useState(false);
    // 

    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleShowLogin = () => {
        setShowLogin(true);
        setShowSignup(false);
    };

    const handleShowSignup = () => {
        setShowLogin(false);
        setShowSignup(true);
    };

    // down function closes all model
    const handleCloseModal = () => {
        setShowLogin(false);
        setShowSignup(false);
        setSecondModal(false)
        handleClose();
    };
    // 
    return (
        <Modal show={show} onHide={handleClose} centered>
            {!secondModal ? (
                <Modal.Body>
                    <div className="logo">
                        <img src={LogoBlack} alt="blue-logo" width={100} />
                    </div>
                    <div className='Sologan'>
                        <h1>Welcome to OLX</h1>
                        <p>The trusted community of buyers and sellers.</p>
                    </div>
                    <div className='btnGoogle'>
                        <img src={googleIcon} alt="" width={30} />
                        Continue with Google
                    </div>
                    <div className='btnGoogle'>
                        <img src={fbIcon} alt="" width={30} />
                        Continue with Facebook
                    </div>
                    <div className='btnGoogle' onClick={() => setSecondModal(!secondModal)}>
                        <img src={mailIcon} alt="" width={30} />
                        Continue with Email
                    </div>
                    <div className='btnGoogle'>
                        <img src={phoneIcon} alt="" width={30} />
                        Continue with Phone
                    </div>
                </Modal.Body>
            ) : (
                <Modal.Body>
                    {/*  */}
                    {!showLogin && !showSignup && (
                        <div>
                            <h1 onClick={() => setSecondModal(false)}>  <img src={arrowBack} alt="arrowBack" width={30} /> </h1>
                            <div className="logo">
                                <img src={LogoBlack} alt="blue-logo" width={100} />
                            </div>
                            <div className='Sologan'>
                                <h1>Welcome to OLX</h1>
                                <p>The trusted community of buyers and sellers.</p>
                            </div>
                            <div className='btnGoogle' onClick={handleShowLogin}>
                                <img src={phoneIcon} alt="" width={30} />
                                Continue with Login
                            </div>
                            <div className='btnGoogle' onClick={handleShowSignup}>
                                <img src={phoneIcon} alt="" width={30} />
                                Continue with Signup
                            </div>
                        </div>
                    )}
                    {showLogin && (
                        <div>
                            <h1 onClick={() => setShowLogin(false)}>  <img src={arrowBack} alt="arrowBack" width={30} /> </h1>
                            <div className="logo">
                                <img src={LogoBlack} alt="blue-logo" width={100} />
                            </div>
                            <div className='Sologan'>
                                <h1>Welcome to OLX</h1>
                                <p>The trusted community of buyers and sellers.</p>
                            </div>
                            <Login setSecondModal={handleCloseModal} />
                        </div>
                    )}
                    {showSignup && (
                        <div>
                            <h1 onClick={() => setShowSignup(false)}>  <img src={arrowBack} alt="arrowBack" width={30} /> </h1>
                            <div className="logo">
                                <img src={LogoBlack} alt="blue-logo" width={100} />
                            </div>
                            <div className='Sologan'>
                                <h1>Welcome to OLX</h1>
                                <p>The trusted community of buyers and sellers.</p>
                            </div>
                            <Signup setSecondModal={handleCloseModal} />
                        </div>
                    )}

                </Modal.Body>
            )}

            <Modal.Body>

            </Modal.Body>
        </Modal>
    );
};

export default MyModal;
