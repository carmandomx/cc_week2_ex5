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
   for (let i = 0; i < arr1.length; i++) {//let's find all elements of the array
    if (arr1[i][1] == item[1]) {//compare if the new inventory has elements that alredy exist
      arr1[i][0] += item[0];//if its exist then sum the new quantity of elements
      return;
    }
    else if (arr1[i][1] > item[1]) {// this will sort the elements by alphabetical order
      for (let j = arr1.length - 1; j >= i; j--){
        arr1[j + 1] = arr1[j];
      }
      arr1[i] = item
      return;
    }
   }
   arr1.push(item)//add the item to the updated inventory
}
/*+O NOT CHANGE THE LINE BELOW **/
module.exports.inventory = inventory;