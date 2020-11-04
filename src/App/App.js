import './App.sass';
import React, {useEffect} from "react";
import Card from "../components/Card";
import Empty from "../components/Empty";
import CountryWidget from "../components/CountryWIdget";
import TypeWidget from "../components/TypeWidget";
import RatingWidget from "../components/RatingWidget";
import ReviewsWidget from "../components/ReviewsWidget";
import PriceWidget from "../components/PriceWidget";
import ClearIcon from './icons/clear.icon.svg';
import Pagination from "../components/Pagination";
import { connect } from "react-redux";

import {resetFilters, setFilteredCards, setCurrentPage, setState} from '../redux/actions'

const mapDispatchToProps = {
    resetFilters,
    setFilteredCards,
    setCurrentPage,
    setState
};

const mapStateToProps = ({cards, filteredCards, currentPage}) => ({
    cards,
    filteredCards,
    currentPage
});

const PAGE_COUNT = 10;

function App({
     resetFilters,
     setFilteredCards,
     filteredCards,
     setCurrentPage,
     currentPage,
     setState
    }) {

    useEffect(() => {
        setState()
    }, []);


    const handleFilter = e => {
        e.preventDefault();
        setFilteredCards()
    };

    //mock method
    const handleBook = (title, status) => {
        status === 2
            ? alert(`Если бы был бэк, вы могли бы забронировать ${title}`)
            : alert(`Уже забронирован ${title}`)
    };

    const handleResetFilter = e => {
        e.preventDefault();
        resetFilters()
    };


    return (
        <div className="App">
            <div className="App__Container">
                <div className="App__Sidebar">
                    <div className="App__Widget">
                        <CountryWidget/>
                    </div>
                    <div className="App__Widget">
                        <TypeWidget/>
                    </div>
                    <div className="App__Widget">
                        <RatingWidget/>
                    </div>
                    <div className="App__Widget">
                        <ReviewsWidget/>
                    </div>
                    <div className="App__Widget">
                        <PriceWidget/>
                    </div>
                    <div className="App__Actions">
                        <a
                            href="/"
                            className="App__Btn App__Btn--Apply"
                            onClick={handleFilter}
                        >
                            Применить фильтр
                        </a>
                        <a
                            href="/"
                            className="App__Btn App__Btn--Reset"
                            onClick={handleResetFilter}
                        >
                            <img src={ClearIcon} alt="очистить фильтр"/>
                            <span>Очистить фильтр</span>
                        </a>
                    </div>
                </div>
                <div className="App__Content">
                    {
                        filteredCards &&  filteredCards.length ?
                            filteredCards.slice((currentPage - 1) * PAGE_COUNT , currentPage * PAGE_COUNT).map((card, index) => {
                                return (
                                    <div className="App__Card" key={index.toString()}>
                                        <Card
                                            card={card}
                                            handleBook={handleBook}
                                        />
                                    </div>
                                )
                            }) :
                            <Empty
                                handleResetFilter={resetFilters}
                            />
                    }
                    <div className="App__Pagination">
                        {
                            filteredCards && filteredCards.length
                                ? <Pagination
                                    pageCount={filteredCards.length / PAGE_COUNT}
                                    onPageChange={setCurrentPage}
                                />
                                : null
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);




