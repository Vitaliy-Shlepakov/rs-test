import React from 'react';
import './index.sass';
import classNames from 'classnames';

const Button = ({
        children,
        onClick,
        them,
        size= 'small'
    }) => {


    const handleClick = e => {
        e.preventDefault();
        onClick()
    };

    return (
        <a className={classNames({
            'Button': true,
            [`Button--${them}`]: them,
            [`Button--${size}`]: size
        })}
        href="/"
        onClick={handleClick}
        >
            {children}
        </a>
    );
};

export default Button;