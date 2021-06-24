import React from 'react'
import './style.scss'
import logo from '../../assets/image/logo.png'
import Logo from '../../components/logo'

export default function Footer(props) {
    return (
        <footer className="ctn-footer">
            <Logo logo={logo} />
            <div className="author">
                powered by tmdb
            </div>
        </footer>
    )
}