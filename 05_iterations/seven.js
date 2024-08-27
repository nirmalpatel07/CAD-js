const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((num) => num+10)     //if you opens scope you then you need to return value
// console.log(newNums);

// const newNums = myNums.map((num) => {return num+10})     //if you opens scope you then you need to return value

const newNums = myNums
                    .map((num) =>num * 10)   
                    .map((num) =>num + 10)   
                    .filter((num) => num >=40)

console.log(newNums);


// Note : .map() is for operations  &  .filter() is for condition check