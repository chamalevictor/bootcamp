/*
Sum all the numbers of a given array ( cq. list ), 
except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element 
at each edge, even if there are more than one with the same value.

Mind the input validation.
*/

function sumArray(array) {
  
    if(array === null || array === [] || array === '' || array.length==1 || array.length == 2) {
    return 0;
    }
  
    let sum = 0;
  
    let max = Math.max(...array);
    let min = Math.min(...array);
  
    
    for (let key of array){
        sum += key;
    }
  
    return sum - min - max;
  }
  
  console.log(sumArray([3]));
  
  /*
  sumArray(null);
    assert.strictEqual( sumArray([ ])                      , 0 );
    assert.strictEqual( sumArray([ 3 ])                    , 0 );
    assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
    assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
    assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
    assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
    assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
  });*/