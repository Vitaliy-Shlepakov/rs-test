import {
    SET_COUNTRIES,
    CHECK_COUNTRY,
    SET_SEARCH_COUNTRY,
    RESET_SEARCH_COUNTRY,
    SET_TYPES,
    CHECK_TYPE,
    SET_RATING,
    CHECK_RATING,
    SET_REVIEWS,
    RESET_FILTER,
} from './tasks';


// --- COUNTRIES ---
const setAvaliableCountries = () => {
    return {
        type: SET_COUNTRIES
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
const setTypes = () => ({
    type: SET_TYPES,
});

const checkType = (value) => ({
    type: CHECK_TYPE,
    payload: value
});

// --- RATING ---
const setRating = () => ({
    type: SET_RATING,
});

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



export {
    setAvaliableCountries,
    checkCountry,
    setSearchCountry,
    resetSearchCountry,
    setTypes,
    checkType,
    setRating,
    checkRating,
    setReviews,
    resetFilters
};