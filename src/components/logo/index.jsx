import React from 'react'
import './style.scss'

export default function Logo(props) {
    const { logo } = props;

    /**
     TODO: Xem lại cách viết tối giãn khi không truyền children vào 1 element (hoặc component) 
     */
    return (
        <div
            className="cpn-logo"
            style={{
                backgroundImage: `url(${logo})`
            }}
        ></div>
    )
}
