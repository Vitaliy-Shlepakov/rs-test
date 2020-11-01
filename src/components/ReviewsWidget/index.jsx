import React from 'react';
import './index.sass';

const ReviewsWidget = ({reviewsCount, handleSetReviewsCount}) => {
    return (
        <div className="ReviewsWidget">
            <div className="ReviewsWidget__Title">
                Количество отзывов (от)
            </div>
            <input
                className="ReviewsWidget__Input"
                type="number"
                placeholder="Например, от 10"
                value={reviewsCount || 0}
                onChange={e => handleSetReviewsCount(+e.target.value)}
                min="1"
            />
        </div>
    );
};

export default ReviewsWidget;