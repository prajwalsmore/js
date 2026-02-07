const orgArr = [0,1,2,3,4,5]
console.log('A', orgArr);

console.log();

// const arr1 = orgArr.slice(1,3)
// console.log(arr1);
// const arr2 = orgArr.splice(1,3)
// console.log(arr2);

//thats not it, the main thing is following

const arr4 = orgArr.slice(1,3)
console.log("B", orgArr);
console.log(arr4);

const arr5 = orgArr.splice(1,3) //it removes as well
console.log("C", orgArr); // [0,4,5] cuz it has removed elements in the range 1-3(included)

console.log(arr5); //output is splice i.e [1,2,3]