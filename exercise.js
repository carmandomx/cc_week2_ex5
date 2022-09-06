/* *Instructions*
    For this challenge you need to compare and update the inventory stored as a 2D array agaisnt a 2nd array when new inventory comes up.

    The tasks you need to perform are the following:

    Update current existing inventory item quantities in the 1st array
    If an item cannot be found you need to add it to the first array including it's quantity

    The returned array containing the updated inventory needs to be in alphabetically order.



*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const inventory = (currInven, newInven) => {
    newInven.forEach(function(item) {
        createOrUpdate(currInven, item);
      });
      // All inventory must be accounted for or you're fired!
      return currInven;
}

function createOrUpdate(arr1, item) {
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
  



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.inventory = inventory;