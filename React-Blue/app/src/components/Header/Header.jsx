import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header>
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link className="logo" to="/">Magic Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='favorites' to="/saves">
                            Saves
                        </Link>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}
