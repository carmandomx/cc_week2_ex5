/* *Instructions*
    For this challenge you need to compare and update the inventory stored as a 2D array agaisnt a 2nd array when new inventory comes up.

    The tasks you need to perform are the following:

    Update current existing inventory item quantities in the 1st array
    If an item cannot be found you need to add it to the first array including it's quantity

    The returned array containing the updated inventory needs to be in alphabetically order.



*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const inventory = (currInven, newInven) => {
  let arrtitems = [];
  let arrnewitems = [];
  let arrnewprices = [];

  for(let i=0;i<currInven.length;i++){
    let itemname = currInven[i];
    arrtitems.push(itemname[1]);
  }
  for(let i=0;i<newInven.length;i++){
    let newitemname = newInven[i];
    arrnewitems.push(newitemname[1]);
    arrnewprices.push(newitemname[0]);
  }
  for(let i=0;i<currInven.length;i++){
    for(let j=0;j<newInven.length;j++){
      let item = currInven[i];
      let itemNew = newInven[j];
      if(item[1]==itemNew[1]){
        let itemsuma=item[0]+itemNew[0];
        item[0]=itemsuma;
        currInven[i]=item;
      }
    }
  }
  for(let a=0;a<arrnewitems.length;a++){
    if(arrtitems.includes(arrnewitems[a])){}else{
      let newcreateditem = [arrnewprices[a],arrnewitems[a]]
      currInven.push(newcreateditem);

    }
  }
  for(let a=0;a<currInven.length;a++){
    let item = currInven[a];
    [item[0],item[1]] = [item[1],item[0]];
    currInven.splice(a,1,item)
    }

  currInven.sort();
  for(let a=0;a<currInven.length;a++){
      let item = currInven[a];
      [item[0],item[1]] = [item[1],item[0]];
      currInven.splice(a,1,item)
      }
  

      // All inventory must be accounted for or you're fired!
      return currInven;
}

  



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.inventory = inventory;