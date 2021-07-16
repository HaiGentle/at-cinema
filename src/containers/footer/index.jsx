import React from 'react'
import './style.scss'
import logo from '../../assets/image/logo.png'
import Logo from '../../components/logo'

export default function Footer() {
    return (
        <footer className="ctn-footer">
            <Logo logo={logo} />
            <div className="author">
                powered by <ins>tmdb</ins>
            </div>
        </footer>
    )
}