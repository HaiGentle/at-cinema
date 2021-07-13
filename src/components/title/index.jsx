import React from 'react'
import './style.scss'

/**
 TODO: sửa lại thành component Heading, có modifiers: size, uppercase
 */
export default function Title(props) {
    const { title } = props;
    return (
        <div className="cpn-title">
            {title}
        </div>
    )
}
