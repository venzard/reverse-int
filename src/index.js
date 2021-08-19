module.exports = function reverse (n) {
    let i=0;
    let result='';
    if (n<0) {
        let str = String(n)
        for (i = 0; i < str.length-1; i++){
            result+=str[str.length-i-1];
            console.log('res',i,'= ',result);
        }
        console.log('str= ',str.length);
        console.log('i=', str[i-1]);
        return result;
    }else {
        let str = String(n)
        for (i = 0; i < str.length; i++){
            result+=str[str.length-i-1];
            console.log('res',i,'= ',result);
        }
        console.log('str= ',str.length);
        console.log('i=', str[i-1]);
        return result;
    }
}
