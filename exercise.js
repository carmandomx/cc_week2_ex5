/* *Instructions*
    For this challenge you need to compare and update the inventory stored as a 2D array agaisnt a 2nd array when new inventory comes up.

    The tasks you need to perform are the following:

    Update current existing inventory item quantities in the 1st array
    If an item cannot be found you need to add it to the first array including it's quantity

    The returned array containing the updated inventory needs to be in alphabetically order.



*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const inventory = (currInven, newInven) => {
  // Possible solution:
  // Create a new inventory array to store the updated inventory
  let updatedInven = [];

  // Combine the current and new inventory arrays into one array
  let combinedInven = currInven.concat(newInven);

  // Loop through the combined inventory array to update quantities and add new items
  combinedInven.forEach((item) => {
    // Check if the item already exists in the updated inventory array
    let existingItem = updatedInven.find(
      (updatedItem) => updatedItem[1] === item[1]
    );
    if (existingItem) {
      // If the item exists, update its quantity
      existingItem[0] += item[0];
    } else {
      // If the item doesn't exist, add it to the updated inventory array
      updatedInven.push(item);
    }
  });

  // Sort the updated inventory array in alphabetical order by item name
  updatedInven.sort((a, b) => a[1].localeCompare(b[1]));

  // Return the updated inventory array
  return updatedInven;
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.inventory = inventory;
