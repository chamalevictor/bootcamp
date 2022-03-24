
// Best time to buy and sell Stock.
function buyAndSell(prices){
    const min = Math.min(...prices);
    const max = Math.max(...prices.slice(prices.indexOf(min)));
    return max-min;
  }