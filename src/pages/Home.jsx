import React from 'react'
import { Navbar } from '../components/Navbar'
import "../assets/scss/home.scss"


export const Home = () => {
    return (
        <div>
            <Navbar />
            <h1 className="gradient">Hey, welcome to my Portfolio.</h1>
        </div>
    )
}
