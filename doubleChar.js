/* Double Char Challenge:
Given a string, you have to return a string 
in which each character (case-sensitive) is repeated once.
*/


function doubleChar(str) {
    // Your code here
    return str.split('').map(n => n.concat(n)).join('');
  }

  console.log(doubleChar('prueba'));
  