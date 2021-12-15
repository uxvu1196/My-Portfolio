import React from 'react'
import { Navbar } from '../components/Navbar'
import "../assets/scss/home.scss"
import clouds from "../assets/img/clouds.jpg"


export const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <h1 className="gradient">Hey, welcome to my Portfolio.</h1>

            <img src={clouds} alt="" />
        </div>
    )
}
