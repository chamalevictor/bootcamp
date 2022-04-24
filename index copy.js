/* Best Solution:
function friend(friends){
  return friends.filter(n => n.length === 4)
}
*/

function friend(friends){
    //your code here
    let output = [];
    const len = friends.length;

    for(let i = 0; i < len; i++){
        if (friends[i].length===4){
            output.push(friends[i]);
        }
    }
    return output;
  }