import React from 'react';
import './index.sass';
import RangeSlider from "../RangeSlider";

const PriceWidget = ({priceRange, handleSetRangePart}) => {
    return (
        <div className="PriceWidget">
            <div className="PriceWidget__Title">
                Цена
            </div>
            <div className="PriceWidget__Body">
                <div className="PriceWidget__Inputs">
                    <input
                        type="number"
                        className="PriceWidget__Input"
                        placeholder="от 0 ₽"
                        value={priceRange[0]}
                        onChange={e => handleSetRangePart(0, +e.target.value)}
                    />
                    <span className="PriceWidget__Divider">&mdash;</span>
                    <input
                        type="number"
                        className="PriceWidget__Input"
                        placeholder="до 100 500 ₽"
                        value={priceRange[1]}
                        onChange={e => handleSetRangePart(1, +e.target.value)}
                    />
                </div>
                <RangeSlider
                    handleSetRangePart={handleSetRangePart}
                    value={priceRange}
                />
            </div>
        </div>
    );
};

export default PriceWidget;

