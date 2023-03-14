/* *Instructions*
    For this challenge you need to compare and update the inventory stored as a 2D array agaisnt a 2nd array when new inventory comes up.

    The tasks you need to perform are the following:

    Update current existing inventory item quantities in the 1st array
    If an item cannot be found you need to add it to the first array including it's quantity

    The returned array containing the updated inventory needs to be in alphabetically order.



*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const inventory = (currInven, newInven) => {
  /* newInven.forEach(function(item) {
        createOrUpdate(currInven, item);
      });
      // All inventory must be accounted for or you're fired!
      return currInven;*/

      //Loop for each value in the newInven
  for (var i = 0; i < newInven.length; i++) {
    //have the name and quantity from newInv
    const name = newInven[i][1];
    const cantidad = newInven[i][0];
    let found = false;
    //Loop for each value in the currInven and check if exists 
    for (var j = 0; j < currInven.length; j++) {
      if (currInven[j][1] === name) {
        currInven[j][0] += cantidad;
        found = true;
        break;
      }
    }

    //if the item doesnt exist, we add to currInv
   if(!found){
    currInven.push([cantidad,name])
   }
  }
  
  //we order to alphabetically by value name
  currInven.sort((a,b)=>{
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  })

  return currInven;
};

/*function createOrUpdate(arr1, item) {
    var index = -1;
    while (++index < arr1.length) {
      if (arr1[index][1] === item[1]) {
        arr1[index][0] += item[0];
        return;
      }
      if (arr1[index][1] > item[1]) {
        break;
      }
    }
    arr1.splice(index, 0, item);
  }
  */

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.inventory = inventory;
