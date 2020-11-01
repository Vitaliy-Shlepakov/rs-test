import React from 'react';
import './index.sass'

const CheckBox = ({option, checked, onChange}) => {
    return (
        <label className="CheckBox">
            <input
                type="checkbox"
                className="CheckBox__Input"
                onChange={_ => onChange(option.value)}
                checked={checked}
            />
            <span className="CheckBox__Label">{option.title}</span>
        </label>
    );
};

export default CheckBox;