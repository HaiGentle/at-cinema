import React from 'react'
import './style.scss'
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default function Button(props) {
    const { mode, children, link, ...buttonProps } = props;

    const className = classNames(
        "cpn-btn",
        mode && `cpn-btn--${mode}`
    );

    return (
        <Link to={{ pathname: `${link}` }} target="_blank" rel="noopener noreferrer">
            <button
                className={className}
                {...buttonProps}
            >
                {children}
            </button>
        </Link>
    )
}
