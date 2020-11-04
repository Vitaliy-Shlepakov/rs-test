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
import Button from "../components/Button";

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

    //mock method
    const handleBook = (title) => {
            alert(`Нужен бекендщик, чтобы забронировать ${title}`)
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
                        <div className="App__Action">
                            <Button
                                them="violet"
                                size="large"
                                onClick={setFilteredCards}
                            >
                                Применить фильтр
                            </Button>
                        </div>
                       <div className="App__Action">
                           <Button
                               them="transparent"
                               size="large"
                               onClick={resetFilters}
                           >
                               <img src={ClearIcon} style={{marginRight: '7px'}} alt="очистить фильтр"/>
                               <span>Очистить фильтр</span>
                           </Button>
                       </div>
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
                            filteredCards && filteredCards.length > PAGE_COUNT
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




