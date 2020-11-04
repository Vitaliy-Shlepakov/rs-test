import {cardsData} from "./data/mock";

const isChecked = (item, array) => {
    if(!array && !array.length) return;
    return !!array.filter(el => el === item).length
};

const filterByCountry = (cards, selectedCountries) => {
    const possibleCountries = selectedCountries.map(item => item.value);
    const res = cards.filter(item => {
        return possibleCountries.includes(item.location.value)
    });
    return res
};

const filterByType = (cards, selectedTypes) => {
    if(!selectedTypes.length) return cards;
    const res = cards.filter(item => {
        return selectedTypes.includes(item.type)
    });
    return res
};

const filterByRating = (cards, selectedRating) => {
    if(!selectedRating.length) return cards;
    return cards.filter(item => {
        return selectedRating.includes(item.rating)
    });
};

const filterByReviews = (cards, reviewsCount) => {

    if(!reviewsCount) return cards;
    return cards.filter(item => {
        return item.reviews >= reviewsCount
    });
};

const filterByPrice = (cards, priceRange) => {
    return cards.filter(item => {
        return (item.price >= priceRange[0] && item.price <= priceRange[1])
    });
};

const filterCountries = (country, filterBy) => {
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

const handleSetRangePart = ({index, val}, state) => {
    if(Array.isArray(val)){
        return val
    }
    if(index === 0) {
        return [val, state[index + 1]]
    }else if(index === 1) {
        return [state[0], val]
    }
};

export {
    isChecked,
    filterByCountry,
    filterByType,
    filterByRating,
    filterByReviews,
    filterByPrice,
    filterCountries,
    checkCountry,
    checkOther,
    getAvailableProps,
    handleSetRangePart
}