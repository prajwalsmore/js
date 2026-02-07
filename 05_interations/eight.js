const nums = [1,2,3,4,5,6]

// normal function

// const newNums = nums.reduce(function(acc, cur){
//     return acc+cur
// } )


//arrow function

const newNums = nums.reduce((acc, cur) => acc + cur)

console.log(newNums);
