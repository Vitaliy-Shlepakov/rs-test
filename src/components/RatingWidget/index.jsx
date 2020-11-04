import React from 'react';
import './index.sass';
import CheckBox from "../Checkbox";
import {isChecked} from '../../utils';
import { connect } from 'react-redux';
import {checkRating} from '../../redux/actions'

const mapStateToProps = ({selectedRating}) => ({
    selectedRating
});

const mapDispatchToProps = {
    checkRating
};

const ratingStructure = [
    {
        title: '1 звезда',
        value: 1
    },
    {
        title: '2 звезды',
        value: 2
    },
    {
        title: '3 звезды',
        value: 3
    },
    {
        title: '4 звезды',
        value: 4
    },
    {
        title: '5 звезды',
        value: 5
    },
];


const RatingWidget = ({selectedRating, checkRating}) => {

    return (
        <div className="RatingWidget">
            <h4 className="RatingWidget__Title">
                Количество звезд
            </h4>
            <div className="RatingWidget__Body">
                {
                    ratingStructure.map((item, index) => {
                        return (
                            <div className="RatingWidget__Checkbox" key={index.toString()}>
                                <CheckBox
                                    option={item}
                                    checked={isChecked(item.value, selectedRating)}
                                    onChange={_ => checkRating(item)}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RatingWidget);