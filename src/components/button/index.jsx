import React from 'react'
import './style.scss'
import classNames from 'classnames';

export default function Button(props) {
    const { mode, children, ...buttonProps } = props;

    const className = classNames(
        "cpn-btn",
        mode && `cpn-btn--${mode}`
    );

    return (
        <button
            className={className}
            {...buttonProps}
        >
            {children}
        </button>
    )
}
