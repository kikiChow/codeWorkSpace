

//判断NAN
function isnan(value) {
    return isNumber(value) &&isnan(value);
}

//判断dom
function isElment(obj) {
    return !!(obj &&obj.nodeType===1);
}