'use strict'

const add = (a,b) => {
    return a + b;
}

const minus = (a,b) => {
    return a-b;
}

const multiply = (a,b) => {
    return a*b;
} 

const divide = (a,b) => {
    if(b == 0){
        return new Error('No se puede dividir por cero');
    }else{
        return a/b
    }
} 

module.exports = {
    add,
    minus,
    multiply,
    divide
};