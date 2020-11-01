import React from 'react';
import './index.sass';
import CheckBox from "../Checkbox";
import {isChecked} from '../../utils';

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

const TypeWidget = ({selected, handleChangeType}) => {


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
                                    checked={isChecked(item.value, selected)}
                                    onChange={handleChangeType}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TypeWidget;