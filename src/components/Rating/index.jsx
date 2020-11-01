import React from 'react';
import './index.sass';
import Star from './icons/star.svg';
import StarActive from './icons/star-active.svg';

const Rating = ({rating}) => {
    return (
        <div className="Rating">
            {
                Array(rating).fill('').map((_, index) => (
                    <img

                        key={index.toString()}
                        className="Rating__Icon"
                        src={StarActive} alt="рейтинг"
                    />
                ))
            }
            {
                Array(5- rating).fill('').map((_, index) => (
                    <img
                        key={index.toString()}
                        className="Rating__Icon"
                        src={Star} alt="рейтинг"
                    />
                ))
            }
        </div>
    );
};

export default Rating;