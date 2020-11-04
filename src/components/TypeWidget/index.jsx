import React from 'react';
import './index.sass';
import CheckBox from "../Checkbox";
import {isChecked} from '../../utils';
import { connect } from 'react-redux';
import {
    checkType,
} from '../../redux/actions'

const mapStateToProps = ({selectedTypes}) => ({
    selectedTypes
});

const mapDispatchToProps = {
    checkType
};

const avaliableTypes = [
    {
        title: 'Апартаменты',
        value: 'apartments'
    },
    {
        title: 'Отель',
        value: 'hotel'
    },
]

const TypeWidget = ({selectedTypes, checkType}) => {


    return (
        <div className="TypeWidget">
            <h4 className="TypeWidget__Title">
                Тип
            </h4>
            <div className="TypeWidget__Body">
                {
                    avaliableTypes.map((item, index) => {
                        return (
                            <div className="TypeWidget__Checkbox" key={index.toString()}>
                                <CheckBox
                                    option={item}
                                    checked={isChecked(item.value, selectedTypes)}
                                    onChange={_=> checkType(item)}
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
)(TypeWidget);