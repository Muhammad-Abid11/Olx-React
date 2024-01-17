
import React from 'react'
// import './style.css'


import Olxnav from './components/olxNav'
import Olxfooter from './components/Olxfooter'
import OLXdashboard from './views/olxdashbaoard'
import Olxnav3 from './components/OlxNav3'
export default function olx() {
    return (
        <div>
            <Olxnav />
            <Olxnav3 />
            <OLXdashboard />


            <Olxfooter />
        </div >


    )
}
