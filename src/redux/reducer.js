import {cardsData} from '../data/mock';
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

} from './tasks'


const initialState = {
    cards: cardsData,
    countries: {
        availableCountries: [],
        selectedCountries: [],
        filteredCountries: [],
        searchBy: ''
    },
    selectedTypes: [],
    selectedRating: [],
    reviews: 0

};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_COUNTRIES:
            return {
                ...state,
                countries: {
                    ...state.countries,
                    availableCountries: getAvailableProps('location'),
                    selectedCountries: getAvailableProps('location'),
                    filteredCountries: getAvailableProps('location'),
                }

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
                    filteredCountries: filteCountries(state.countries.availableCountries, payload)
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


        case SET_TYPES:
            return {
                ...state,
                selectedTypes: getAvailableProps('type')

            };
        case CHECK_TYPE:
            return {
                ...state,
                selectedTypes: checkOther(payload, state.selectedTypes)

            };


        case SET_RATING:
            return {
                ...state,
                selectedRating: getAvailableProps('rating')

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

        case RESET_FILTER:
            return {
                ...initialState,
            };

        default:
            return {...state}
    }
};

export default reducer;

const filteCountries = (country, filterBy) => {
    if(!filterBy || !filterBy.length) return country;
    return country.filter(item => {
        return item.title.toLowerCase().includes(filterBy.toLowerCase())
    })
};


const checkCountry = (val, selectedCountries) => {
    const index = selectedCountries.indexOf(val);
    if(index !== -1){
        return selectedCountries.filter(item => {
            return item !== val
        })
    }else{
        return [...selectedCountries, val]
    }
};

const checkOther = (val, selectedCountries) => {
    const index = selectedCountries.findIndex(item => {
        return item === val.value
    });
    if(index !== -1){
        return selectedCountries.filter(item => {
            return item !== val.value
        })
    }else{
        return [...selectedCountries, val.value]
    }
};


const getAvailableProps = (field) => {
    const res = cardsData.map(item => {
        return item[field]
    });
    if(field === 'location'){
        return getUniqueListBy(res, 'value')
    }else if(field === 'type' || field === 'rating'){
        return [...new Set(res)]
    }

    return res
};

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
};