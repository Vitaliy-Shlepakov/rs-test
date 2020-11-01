import React, {useEffect, useState} from 'react';
import './index.sass';
import SearchIcon from './icons/search.svg';
import ClearIcon from './icons/clear.svg';
import {isChecked} from '../../utils';
import CheckBox from "../Checkbox";

const CountryWidget = ({availableCountries, selected, handleChangeCountry}) => {

    const [filterBy, setFilterBy] = useState('');

    useEffect(() => {
        // console.log(filterBy, 'filterBy')
    }, [filterBy])

    const filterCountries = (country) => {
        if(!filterBy || !filterBy.length) return country;
        return country.filter(item => {
            return item.title.toLowerCase().includes(filterBy.toLowerCase())
        })
    };

    const handleResetFilter = (e) => {
        e.preventDefault();
        setFilterBy('');
    };

    return (
        <div className="CountryWidget">
            <div className="CountryWidget__Title">
                Страна
            </div>

            <div className="CountryWidget__Field">
                <img src={SearchIcon} className="CountryWidget__Icon" alt="поиск"/>
                {
                    filterBy && filterBy.length && (<a
                        href="/"
                        className="CountryWidget__Btn-Clear"
                        onClick={handleResetFilter}
                    >
                        <img src={ClearIcon} alt="удалить"/>
                    </a>)
                }
                <input
                    type="text"
                    placeholder="Поиск стран"
                    className="CountryWidget__Input"
                    value={filterBy}
                    onInput={e => setFilterBy(e.target.value)}
                />
            </div>

            <div className="CountryWidget__List">
                {
                    filterCountries(availableCountries).length
                        ? filterCountries(availableCountries).map((item, index) => {
                            return (
                                <div
                                    className="CountryWidget__Item"
                                    key={index.toString()}
                                >
                                    <CheckBox
                                        option={item}
                                        checked={isChecked(item.value, selected)}
                                        onChange={handleChangeCountry}
                                    />
                                </div>
                            )
                        })
                        : (
                            <div className="CountryWidget__Empty">
                                <span>К сожалению, по вашему запросу ничего не найдено :(</span>
                            </div>
                        )
                }
            </div>

        </div>
    );
};

export default CountryWidget;