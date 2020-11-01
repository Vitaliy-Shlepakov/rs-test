import React from 'react';
import {Range} from "rc-slider";
import 'rc-slider/assets/index.css';
import './index.sass';

const RangeSlider = ({
         handleSetRangePart,
         value
     }) => {
    return (
        <Range
            onChange={e => handleSetRangePart(undefined, e)}
            min={0}
            max={100500}
            value={value}
            pushable={true}
            className={'RangeSlider'}
        />
    );
};

export default RangeSlider;