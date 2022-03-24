
// Building the 'Dial Pad'.
const dialPad = new Map();
dialPad.set('2',['a','b','c']);
dialPad.set('3',['d','e','f']);
dialPad.set('4',['g','h','i']);
dialPad.set('5',['j','k','l']);
dialPad.set('6',['m','n','o']);
dialPad.set('7',['p','q','r','s']);
dialPad.set('8',['t','u','v']);
dialPad.set('9',['w','x','y','z']);

/**
 * 
 * @param {String} digits 
 */

function charCombinations(digits){

    // Handling Empty string.
    if (!digits.length){
        return [];
    }
    let stack = [''];
    // Iterating over each digit.
    for(let i = 0; i < digits.length; i++){
        let current = [];
        //Looping throughout the current 'Stack' of combinations.
        for(let j = 0; j < stack.length; j++){
            //Looping throughout the letters of the current digit.
            for(let key of dialPad.get(digits[i])){
                current.push(stack[j].concat(key));
            }
    }

    if (i==digits.length-1){
        return current;
    }
    stack = current;
    }   
};

// Validating user input.
function combination(digits){
    if(typeof(digits)!== 'string'){
        console.log("Don't forget to include quotes for your numbers.");
        return;
    }else if(digits.length>4){
        console.log('Por favor, ingrese solo numeros entre 1 y 4 digitos de longitud.');
        return;
    }else if(digits.length<1){
        console.log('No ingreso ningun valor');
        return;
    }else if(digits.includes('1')||digits.includes('0')){
        console.log("Unicamente estan permitidos los digitos del '2' al '9'");
    }
    console.log(charCombinations(digits));
}

console.log('This is an example of combining the numbers 2 and 9:')
combination('29');
console.log('You can try the "combination()" function by passing some numbers to it.');
