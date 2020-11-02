import React from 'react';
import './index.sass';
import { connect } from "react-redux";
import {setReviews} from '../../redux/actions';

const mapStateToProps = ({reviews}) => ({
    reviews
});

const mapDispatchToProps = {
    setReviews
}

const ReviewsWidget = ({reviews, setReviews}) => {
    return (
        <div className="ReviewsWidget">
            <div className="ReviewsWidget__Title">
                Количество отзывов (от)
            </div>
            <input
                className="ReviewsWidget__Input"
                type="number"
                placeholder="Например, от 10"
                value={reviews}
                onChange={e => setReviews(+e.target.value)}
                min="1"
            />
        </div>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewsWidget);