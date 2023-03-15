/* *Instructions*
    For this challenge you need to compare and update the inventory stored as a 2D array agaisnt a 2nd array when new inventory comes up.

    The tasks you need to perform are the following:

    Update current existing inventory item quantities in the 1st array
    If an item cannot be found you need to add it to the first array including it's quantity

    The returned array containing the updated inventory needs to be in alphabetically order.



*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const inventory = (currInven, newInven) => {
  const len_currinv=currInven.length
  if (len_currinv===0){ //line for the case with empty current inventory
      return newInven.sort((a,b) => a[1].localeCompare(b[1]))
  } else{
  newInven.forEach(new_inven => {

      for (let i=0;i<len_currinv;i++){
          if (currInven[i][1]===new_inven[1]) {
              currInven[i][0]=currInven[i][0]+new_inven[0]
              break
          }
          if (i===len_currinv-1){
              currInven.push(new_inven)
          }
      }
  })}


    // All inventory must be accounted for or you're fired!
  return currInven.sort((a,b) => a[1].localeCompare(b[1]))}
  



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.inventory = inventory;