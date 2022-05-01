/**
 * 
 * @param {String} str 
 * @returns 
 */

function findVowels(str){
    return str.split('').map(n => n.match(/[aeiou\s0-9]/i)).join('');
}

console.log(findVowels("Hola QUE tal SOY victor 123456"));