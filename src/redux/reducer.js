import {cardsData} from '../data/mock';
import {
    SET_STATE,
    CHECK_COUNTRY,
    SET_SEARCH_COUNTRY,
    RESET_SEARCH_COUNTRY,
    CHECK_TYPE,
    CHECK_RATING,
    SET_REVIEWS,
    RESET_FILTER,
    SET_PRICE_RANGE,
    SET_FILTERED_CARDS,
    SET_CURRENT_PAGE,

} from './tasks'
import { filterByCountry,
    filterByType,
    filterByRating,
    filterByReviews,
    filterByPrice,
    filterCountries,
    checkCountry,
    checkOther,
    getAvailableProps,
    handleSetRangePart
} from '../utils';

const INIT_RANGE = [0, 100500];

const initialState = {
    cards: cardsData,
    filteredCards: cardsData,
    countries: {
        availableCountries: [],
        selectedCountries: [],
        filteredCountries: [],
        searchBy: ''
    },
    selectedTypes: [],
    selectedRating: [],
    reviews: 0,
    priceRange: INIT_RANGE,
    currentPage: 1

};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_STATE:
        case RESET_FILTER:
            return {
                ...state,
                cards: cardsData,
                filteredCards: cardsData,
                countries: {
                    ...state.countries,
                    availableCountries: getAvailableProps('location'),
                    selectedCountries: getAvailableProps('location'),
                    filteredCountries: getAvailableProps('location'),
                },
                selectedTypes: getAvailableProps('type'),
                selectedRating: getAvailableProps('rating'),
                reviews: 0,
                priceRange: INIT_RANGE,
                currentPage: 1
            };
        case CHECK_COUNTRY:
            return {
                ...state,
                countries: {
                    ...state.countries,
                    selectedCountries: checkCountry(payload, state.countries.selectedCountries)
                }
            };
        case SET_SEARCH_COUNTRY:
            return {
                ...state,
                countries: {
                    ...state.countries,
                    searchBy: payload,
                    filteredCountries: filterCountries(state.countries.availableCountries, payload)
                }
            };
        case RESET_SEARCH_COUNTRY:
            return {
                ...state,
                countries: {
                    ...state.countries,
                    searchBy: '',
                    filteredCountries: getAvailableProps('location'),
                }
            };
        case CHECK_TYPE:
            return {
                ...state,
                selectedTypes: checkOther(payload, state.selectedTypes)

            };
        case CHECK_RATING:
            return {
                ...state,
                selectedRating: checkOther(payload, state.selectedRating)

            };
        case SET_REVIEWS:
            return {
                ...state,
                reviews: payload

            };
        case SET_PRICE_RANGE:
            return {
                ...state,
                priceRange: handleSetRangePart(payload, state.priceRange)
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload.selected + 1
            };
        case SET_FILTERED_CARDS:
            return {
                ...state,
                filteredCards: filterByPrice(filterByReviews(
                    filterByRating(filterByType(filterByCountry(state.cards, state.countries.selectedCountries),
                        state.selectedTypes),
                        state.selectedRating),
                    state.reviews),
                    state.priceRange
                )
            };

        default:
            return {...state}
    }
};

export default reducer;







