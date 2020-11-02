const isChecked = (item, array) => {
    if(!array && !array.length) return;
    return !!array.filter(el => el === item).length
};

export {
    isChecked
}