function romans(number){
    
    const len = number.length;

    //Define Romanian Numbers
    const map = new Map();
    map.set('M',1000);
    map.set('D', 500);
    map.set('C', 100);
    map.set('L', 50);
    map.set('X', 10);
    map.set('V', 5);
    map.set('I', 1);  

    let sum = 0;
    
    for(let i = 0; i<len; i++){
        //If next char is greater than current, then substract current from next.
        if(map.get(number[i])<map.get(number[i+1])){
            sum += (map.get(number[i+1])-map.get(number[i]));
        //Moving pointer to next char.    
            i++;
            }
        else{
            sum += map.get(number[i]);
        }
        
    }
    return sum;
}
  console.log(romans('MCIV'));
  
  
  