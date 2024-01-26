function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers ={};
  for (const number of array){
    const complement  = target -number;
    if (complement in seenNumbers)return true;
    seenNumbers[number] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Runtime : 0(n^2)
  space :0(n)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  create an object to keep track of numbers we've arleady seen 
  iterate through each numberin the array for the current num ,identify a  complment
  that adds to the target (comp =target - num)
  if so ,return true 
  otherwise ,add that number to the object
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
