import React from 'react'
import { Navbar } from '../components/Navbar'
import "../assets/scss/home.scss"


export const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <h1 className="gradient">Hey, welcome to my Portfolio.</h1>

            <div>
                <img src="/img/cloud.jpg" alt="logo" />
            </div>

        </div>
    )
}
