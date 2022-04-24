// write the function isAnagram
var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };
  
/*
var isAnagram = function(test, original) {
    const len = original.length;
    test = test.toLowerCase();
    original = original.toLowerCase();

    if(test.length !== len){
        return false;
    }
    
    for (let i = 0; i < len; i++){
        if(!original.includes(test[i])){
            return false;
        }

        else{return true;}
    }
};*/

console.log(isAnagram("Buckethead", "DeathCubeK"));
