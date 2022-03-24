
    function zigZag(s, numRows) {
    if (s.length <= numRows || numRows < 2) return s;
    //Obtener el numero de caracteres que hay entre cada columna:
    const num = 2 * (numRows - 1); 

    //Crear e inicializar dinamicamente un array de strings vacios:
    let res = Array(numRows).fill('');
    let tmp = 0;
    for (let i = 0; i < s.length; i++) {
      tmp = i % num;
      if (tmp < numRows) {
        res[tmp] += s[i];
      } else {
        res[num - tmp] += s[i];
      }
    }
    return res.join('');
  };
  