import './App.sass';
import React, {useState, useEffect} from "react";
import Card from "../components/Card";
import Empty from "../components/Empty";
import CountryWidget from "../components/CountryWIdget";
import TypeWidget from "../components/TypeWidget";
import RatingWidget from "../components/RatingWidget";
import ReviewsWidget from "../components/ReviewsWidget";
import PriceWidget from "../components/PriceWidget";
import ClearIcon from './icons/clear.icon.svg';
import Pagination from "../components/Pagination";
import {cardsData} from '../data/mock';


function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
};

const PAGE_COUNT = 10;
const INIT_RANGE = [0, 100500];

function App() {

    const [availableCountries, setAvailableCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);

    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedRating, setSelectedRating] = useState([]);
    const [reviewsCount, setReviewsCount] = useState(null);
    const [priceRange, setPriceRange] = useState(INIT_RANGE);

    const [filteredCard, setFilteredCard] = useState([]);
    const [allCards, setAllCards] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setAvailableCountries(getAvailableProps('location'));
        setSelectedCountries(getAvailableProps('location').map(item => item.value));
        setSelectedTypes(getAvailableProps('type'));
        setSelectedRating(getAvailableProps('rating'));
        setAllCards(cardsData);
        setFilteredCard(cardsData);
    }, []);

    const handleSetRangePart = (index, val) => {
        if(Array.isArray(val)){
            setPriceRange(val);
            return
        }
        setPriceRange(state => {
            if(index === 0) {
                return [val, state[index + 1]]
            }else if(index === 1) {
                return [state[0], val]
            }
        })
    };

    const handleFilter = e => {
        e.preventDefault();
        // callback hell
        const res = filterByPrice(filterByReviews(filterByRating(filterByType(filterByCountry(allCards)))));
        setFilteredCard(res)
    };


    const filterByCountry = arr => {
        return arr.filter(item => {
            return selectedCountries.includes(item.location.value)
        });
    };

    const filterByType = arr => {
        if(!selectedTypes.length) return arr;
        return arr.filter(item => {
            return selectedTypes.includes(item.type)
        });
    };

    const filterByRating = arr => {
        if(!selectedRating.length) return arr;
        return arr.filter(item => {
            return selectedRating.includes(item.rating)
        });
    };

    const filterByReviews = arr => {
        if(!reviewsCount) return arr;
        return arr.filter(item => {
            return item.reviews >= reviewsCount
        });
    };

    const filterByPrice = arr => {
        return arr.filter(item => {
            return (item.price >= priceRange[0] && item.price <= priceRange[1])
        });
    };

    const handleBook = (title, status) => {
        status === 2
            ? alert(`Если бы был бэк, вы могли бы забронировать ${title}`)
            : alert(`Уже забронирован ${title}`)
    };

    const handleResetFilter = () => {
        setSelectedCountries(getAvailableProps('location').map(item => item.value));
        setSelectedTypes(getAvailableProps('type'));
        setSelectedRating(getAvailableProps('rating'));
        setReviewsCount([]);
        setPriceRange(INIT_RANGE);
        setFilteredCard(cardsData);
    };

    const handleChangeType = val => {
        const index = selectedTypes.indexOf(val);
        if(index !== -1){
            setSelectedTypes(state => {
                return state.filter(item => {
                    return item !== val
                })
            })
        }else{
            setSelectedTypes(state => {
                return [...state, val]
            })
        }
    };

    const handleChangeRating = val => {
        const index = selectedRating.indexOf(val);
        if(index !== -1){
            setSelectedRating(state => {
                return state.filter(item => {
                    return item !== val
                })
            })
        }else{
            setSelectedRating(state => {
                return [...state, val]
            })
        }
    };

    const handleChangeCountry = val => {
        const index = selectedCountries.indexOf(val);
        if(index !== -1){
            setSelectedCountries(state => {
                return state.filter(item => {
                    return item !== val
                })
            })
        }else{
            setSelectedCountries(state => {
                return [...state, val]
            })
        }
    };

    const getAvailableProps = (field) => {
        const res = cardsData.map(item => {
            return item[field]
        });
        if(field === 'location'){
            return getUniqueListBy(res, 'value')
        };
        return res
    };

    const handlePageChange = ({selected}) => {
        setCurrentPage(selected + 1)
    };


    return (
        <div className="App">
            <div className="App__Container">
                <div className="App__Sidebar">
                    <div className="App__Widget">
                        <CountryWidget
                            availableCountries={availableCountries}
                            handleChangeCountry={handleChangeCountry}
                            selected={selectedCountries}
                        />
                    </div>
                    <div className="App__Widget">
                        <TypeWidget
                            selected={selectedTypes}
                            handleChangeType={handleChangeType}
                        />
                    </div>
                    <div className="App__Widget">
                        <RatingWidget
                            selected={selectedRating}
                            handleChangeRating={handleChangeRating}
                        />
                    </div>
                    <div className="App__Widget">
                        <ReviewsWidget
                            reviewsCount={reviewsCount}
                            handleSetReviewsCount={setReviewsCount}
                        />
                    </div>
                    <div className="App__Widget">
                        <PriceWidget
                            priceRange={priceRange}
                            handleSetRangePart={handleSetRangePart}
                        />
                    </div>
                    <div className="App__Actions">
                        <button
                            type="button"
                            className="App__Btn App__Btn--Apply"
                            onClick={handleFilter}
                        >
                            Применить фильтр
                        </button>
                        <button
                            type="button"
                            className="App__Btn App__Btn--Reset"
                            onClick={handleResetFilter}
                        >
                            <img src={ClearIcon} alt="очистить фильтр"/>
                            <span>Очистить фильтр</span>
                        </button>
                    </div>
                </div>
                <div className="App__Content">
                    {
                        filteredCard && filteredCard.length ?
                            filteredCard.slice((currentPage - 1) * PAGE_COUNT , currentPage * PAGE_COUNT).map((card, index) => {
                                return (
                                    <div className="App__Card" key={index.toString()}>
                                        <Card
                                            card={card}
                                            handleBook={handleBook}
                                        />
                                    </div>
                                )
                            }) :
                            <Empty handleResetFilter={handleResetFilter}/>
                    }
                    <div className="App__Pagination">
                        <Pagination
                            pageCount={filteredCard.length / PAGE_COUNT}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
