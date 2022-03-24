function solution(number){
    // convert the number to a roman numeral
  
    if (number.toString().length>3){
      console.log('es de a mil');
      return;
    }
    
    else if (number.toString().length>2){
      console.log('es de a sien');
      return;
    }
  
    else if (number.toString().length>1){
      console.log('es de a dies');
      return;
    }
    /*
    
    if(number > 9999) console.log('M');
    if(number > 499) console.log('D');
    if(number > 99) console.log('C');
    if(number > 49) console.log('L');
    if(number > 9) console.log('X');
    if(number > 4) console.log('V');
    //else console.log('I');*/
  }
  
  solution(2000);
  solution(500);
  solution(15);