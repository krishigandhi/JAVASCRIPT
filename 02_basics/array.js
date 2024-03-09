// const myArr = [0,1,2,3,4,5]
// console.log(myArr[1])

// const myArr2 = new Array(0,1,2,3,4,5)

// myArr.push(5)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)


// console.log("A",myArr)

// const myn1 = myArr.slice(1,4)
// console.log("Slice",myn1)

// const myn2 = myArr.splice(1,4)
// console.log("c",myArr)
// console.log("Splice",myn2)


//////////////////////////////////////////////

//  const arr1 = ['a','b','c']
//  const arr2 = ['d','e','f']
//  arr1.push(arr2)  //Merge array inside array 
// arr3= arr1.concat(arr2)
//  console.log(arr3)

///Spread Operatoer
//  const arr4 = [...arr1,...arr2]  
//  console.log(arr4)

const arr5 = [1,2[3,4[5,6],7],8];
const arr6 = arr5.flat(Infinity);
console.log(arr6);