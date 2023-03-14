/* *Instructions*
    For this challenge you need to compare and update the inventory stored as a 2D array agaisnt a 2nd array when new inventory comes up.

    The tasks you need to perform are the following:

    Update current existing inventory item quantities in the 1st array
    If an item cannot be found you need to add it to the first array including it's quantity

    The returned array containing the updated inventory needs to be in alphabetically order.



*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const inventory = (currInven, newInven) => {

  let tempArr = [];

  // forEach 1 used to add all elements[1] of currInven to a new arrar
  currInven.forEach(element => {
    tempArr.push(element[1]);
  });

  // forEach 2 used to add all elements[1] of newInven to a tampArr only if element[1]
  // is not in tempArr
  newInven.forEach(element => {
    tempArr.includes(element[1]) ? null : tempArr.push(element[1]);
  });
  
  // sort tempArr and add 0 as value in element[0] for each element in tempArr and add it
  // on a new array called answer
  let answer = tempArr.sort().map( element => ([0, element]));

  // forEach 3 used to compare all elements of answer with elements on currInven and newInven
  answer.forEach( element => {

    // forEach 4 and 5 used to change the value of each element[0] of answer and add their 
    // quantity amount
    currInven.forEach( current => {
      current[1] === element[1] ? element[0]+=current[0] : null
    })
    newInven.forEach( newInv => {
      newInv[1] === element[1] ? element[0]+=newInv[0] : null
    })
  })
  return answer
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.inventory = inventory;