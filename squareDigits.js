/*
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}*/


function squareDigits(num){
    
    const arr = num.toString().split('');
    let answer = [];
    
    for (let key of arr){
      answer.push(key*key);
    }
  
    
    return parseInt(answer.join(''));
  }
  
  console.log(squareDigits(421));