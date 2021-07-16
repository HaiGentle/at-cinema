import React from 'react'
import './style.scss'

export default function Logo(props) {
    const { logo } = props;

    return (
        <div
            className="cpn-logo"
            style={{
                backgroundImage: `url(${logo})`
            }}
        />
    )
}
