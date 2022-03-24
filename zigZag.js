

for(let i = 0.99; i<=16; i++){
    let curr = (i%8);
    console.log(curr);
  }
  /*
  var convert = function(s, numRows) {
    if (s.length <= numRows || numRows < 2) return s;
    var len = s.length;
    var num = 2 * (numRows - 1);
    var res = Array(numRows).fill('');
    var tmp = 0;
    for (var i = 0; i < len; i++) {
      tmp = i % num;
      if (tmp < numRows) {
        res[tmp] += s[i];
      } else {
        res[num - tmp] += s[i];
      }
    }
    return res.join('');
  };
  
  console.log(convert('armagedon', 3));*/