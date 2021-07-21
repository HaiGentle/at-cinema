import React from 'react'
import './style.scss'
import classNames from 'classnames';
import { BrowserRouter, Link } from 'react-router-dom';

export default function Button(props) {
    const { mode, children, link, ...buttonProps } = props;

    const className = classNames(
        "cpn-btn",
        mode && `cpn-btn--${mode}`
    );

    return (
        <BrowserRouter>
            <Link to={{pathname: `${link}`}}  target="_blank" rel="noopener noreferrer">
                <button
                    className={className}
                    {...buttonProps}
                >
                    {children}
                </button>
            </Link>
        </BrowserRouter>
    )
}
