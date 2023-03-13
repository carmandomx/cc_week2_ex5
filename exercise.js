/* *Instructions*
    For this challenge you need to compare and update the inventory stored as a 2D array agaisnt a 2nd array when new inventory comes up.

    The tasks you need to perform are the following:

    Update current existing inventory item quantities in the 1st array
    If an item cannot be found you need to add it to the first array including it's quantity

    The returned array containing the updated inventory needs to be in alphabetically order.



*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const inventory = (currInven, newInven) => {
  // forEach to iterate each item on "newInven"
    newInven.forEach(function(item) {
        createOrUpdate(currInven, item);
      });
      // All inventory must be accounted for or you're fired! (I experienced a similar situation at my old job and keeping the inventory up to date was not my responsibility.)
      return currInven;
}

// The solution on the repo was using a While loop but I feel more confortable with a For loop

function createOrUpdate(arr1, item) {
// Go thru currInven and compare it with the one "item"
  for (let i = 0; i < arr1.length; i++) {

    // arr1[x][y] to get the "coordinates"
      if (arr1[i][1] === item[1]) {

          arr1[i][0] += item[0];
          return;
      } 
      else if (arr1[i][1] > item[1]) {

          for (let j = arr1.length - 1; j >= i; j--) {
              arr1[j + 1] = arr1[j];
          }

          arr1[i] = item;
          return;
      }
  }
  // Update the array
  arr1.push(item);

}
  



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.inventory = inventory;