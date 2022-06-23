module.exports = function reverse (n) {
    let i=0;
    let result='';
    let str = String(n);
    if (n < 0) {
        str = str.slice(1)
    }
    for (i = 0; i < str.length; i++){
        result+=str[str.length-i-1];
    }
    return result;
    
}
