import React from 'react'
import './style.scss'
import classNames from 'classnames';

export default function Input(props) {
    const { size, suffix, handleOnChange, value } = props;
    const className = classNames(
        "cpn-input",
        size && `cpn-input--${size}`,
    )
    return (
        <span className="wrapper-search">
            <input
                className={className}
                onChange={handleOnChange}
                value={value}
            />
            {suffix}
        </span>
    )
}
