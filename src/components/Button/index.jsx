import React from 'react';
import './index.sass';
import classNames from 'classnames';
import BookIcon from './icons/book.icon.svg';
import BookedIcon from './icons/booked.icon.svg';

const Button = ({
        type = 1,
        cardId,
        handleBook
    }) => {

    const handleBookPlace = e => {
        e.preventDefault();
        handleBook(cardId, type)
    };

    return (
        <a className={classNames({
            'Button': true,
            [`Button--${type}`]: type
        })}
        href="/"
        onClick={e => handleBookPlace(e, cardId, type)}
        >
            <span className="Button__Icon">
                { type === 1 && <img src={BookIcon} alt="забронировать"/> }
                { type === 2 && <img src={BookedIcon} alt="забронировать"/> }
            </span>
            <span className="Button__Text">
                { type === 1 && 'Забронировано'}
                { type === 2 && 'Забронировать'}
            </span>
        </a>
    );
};

export default Button;