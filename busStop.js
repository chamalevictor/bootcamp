const number = function(busStops){
    // Good Luck!
    let passengers = 0;
    busStops.map(passenger => {
        passengers +=passenger[0];
        passengers -=passenger[1];
    });
    return passengers;
}

console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));