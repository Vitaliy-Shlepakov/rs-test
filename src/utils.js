const isChecked = (item, array) => {
    if(!array && !array.length) return;
    return array.includes(item)
};

export {
    isChecked
}