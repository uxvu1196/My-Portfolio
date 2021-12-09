import { Link } from 'react-router-dom';
import React from 'react'
import "./navbar.scss"

export const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="link">HOME</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/work" className="link">Work</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
