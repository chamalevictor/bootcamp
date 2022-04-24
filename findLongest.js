/* Top solution 1:
const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);


  Top solution 2:
  function findLongest(array){
  return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
}
  */

function findLongest(array){
    // code here
    const max = Math.max(...array).toString().length;
    return array.find(n=>n.toString().length==max);
  }

  console.log(findLongest([1, 10, 100,9999]));