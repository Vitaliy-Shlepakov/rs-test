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
} from './tasks';


// --- COUNTRIES ---
const setState = () => {
    return {
        type: SET_STATE
    }
};

const checkCountry = (value) => ({
    type: CHECK_COUNTRY,
    payload: value
});

const setSearchCountry = (value) => ({
    type: SET_SEARCH_COUNTRY,
    payload: value
});

const resetSearchCountry = () => ({
    type: RESET_SEARCH_COUNTRY,
});

// --- TYPES ---
const checkType = (value) => ({
    type: CHECK_TYPE,
    payload: value
});

// --- RATING ---
const checkRating = (value) => ({
    type: CHECK_RATING,
    payload: value
});

// --- REVIEWS ---
const setReviews = (value) => ({
    type: SET_REVIEWS,
    payload: value
});

const resetFilters = () => ({
    type: RESET_FILTER
});

// --- PRICE ---
const setPriceRange = (index, val) => ({
    type: SET_PRICE_RANGE,
    payload: {index, val}
});

// --- CARDS ---
const setFilteredCards = () => ({
    type: SET_FILTERED_CARDS,
});

// --- PAGINATION ---
const setCurrentPage = (value) => ({
    type: SET_CURRENT_PAGE,
    payload: value
});



export {
    setState,
    checkCountry,
    setSearchCountry,
    resetSearchCountry,
    checkType,
    checkRating,
    setReviews,
    resetFilters,
    setPriceRange,
    setFilteredCards,
    setCurrentPage,
};