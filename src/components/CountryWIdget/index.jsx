import React, {useEffect, useState} from 'react';
import './index.sass';
import SearchIcon from './icons/search.svg';
import ClearIcon from './icons/clear.svg';
import {isChecked} from '../../utils';
import CheckBox from "../Checkbox";
import {connect} from 'react-redux';
import {
    checkCountry,
    setSearchCountry,
    resetSearchCountry
} from '../../redux/actions';

const mapStateToProps = ({countries}) => ({
    availableCountries: countries.availableCountries,
    selectedCountries: countries.selectedCountries,
    searchBy: countries.searchBy,
    filteredCountries: countries.filteredCountries,
});

const mapDispatchToProps = {
    checkCountry,
    setSearchCountry,
    resetSearchCountry
};

const CountryWidget = ({
       selectedCountries,
       checkCountry,
       setSearchCountry,
       searchBy,
       filteredCountries,
       resetSearchCountry
   }) => {


    const handleResetFilter = (e) => {
        e.preventDefault();
        resetSearchCountry();
    };


    return (
        <div className="CountryWidget">
            <div className="CountryWidget__Title">
                Страна
            </div>

            <div className="CountryWidget__Field">
                <img src={SearchIcon} className="CountryWidget__Icon" alt="поиск"/>
                {
                    searchBy && searchBy.length && (
                    <a
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
                    value={searchBy}
                    onInput={e => setSearchCountry(e.target.value)}
                />
            </div>

            <div className="CountryWidget__List">
                {
                    filteredCountries.length
                        ? filteredCountries.map((item, index) => {
                            return (
                                <div
                                    className="CountryWidget__Item"
                                    key={index.toString()}
                                >
                                    <CheckBox
                                        option={item}
                                        checked={isChecked(item.value, normalizeArr(selectedCountries))}
                                        onChange={() => checkCountry(item)}
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

const normalizeArr = arr => {
    return arr.map(item => item.value)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountryWidget);