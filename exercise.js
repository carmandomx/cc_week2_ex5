/* *Instructions*
    For this challenge you need to compare and update the inventory stored as a 2D array agaisnt a 2nd array when new inventory comes up.

    The tasks you need to perform are the following:

    Update current existing inventory item quantities in the 1st array
    If an item cannot be found you need to add it to the first array including it's quantity

    The returned array containing the updated inventory needs to be in alphabetically order.



*/

/** DO NOT CHANGE THE FUNCTION NAME **/
/*inventory loops through each item in the newInven array and calls the createOrUpdate function to add it to the currInven array.*/
const inventory = (currInven, newInven) => {
  newInven.forEach(function (item) {
    createOrUpdate(currInven, item);
  });
  // All inventory must be accounted for or you're fired!
  return currInven; //The inventory function returns the updated currInven array after all the new items have been added.
};

function createOrUpdate(arr1, item) {
  //createOrUpdate takes two arguments, arr1 and item. arr1 represents the current inventory array, while item represents the new item to add to the inventory.
  var index = -1;
  while (++index < arr1.length) {
    //it loops through each item in the arr1 array to see if it already contains an item with the same name as the item being added.
    if (arr1[index][1] === item[1]) {
      //If it finds a matching item, it updates the quantity of that item in the arr1 array by adding the quantity of the new item.
      arr1[index][0] += item[0];
      return;
    }
    if (arr1[index][1] > item[1]) {
      //If it does not find a matching item, it inserts the new item into the arr1 array at the appropriate index based on its name, so that the array remains sorted by name.
      break;
    }
  }
  arr1.splice(index, 0, item);
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.inventory = inventory;
