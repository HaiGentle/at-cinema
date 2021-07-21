import React from 'react'
import './style.scss'
import classNames from 'classnames';

export default function Input(props) {
    const { size, suffix, searchRef, ...inputProps } = props;

    return (
        <div className="cpn-input">
            <input
                className="cpn-input__string"
                {...inputProps}
                ref={searchRef}
            />
            <div className="cpn-input__suffix">
                {suffix}
            </div>
        </div>
    )
}
