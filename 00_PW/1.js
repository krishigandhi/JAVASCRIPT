// (function(){
//     console.log("Hey")
//  })()

// sayHello(); // This works because of hoisting.

// function sayHello() {
//     console.log("Hello!");
// }

// let a = "ab";
// let b= 2
// console.log(typeof(b),typeof(a))

// let a = "Krishi Sonu"
// console.log(a.split(" "))

// let a = [1,3,4]
// let b = [5,4,6]
// console.log(a.concat(b))

// let arr = [5,4,7,23,1] 
// arr.sort((a,b) => a-b)
// console.log(arr)


const user = {
    name:'abcd',
    age: 12,
    add: {
        city: 'aa',
        state: "aab"
    }
}

// console.log(user);
// for(let key in user){
//     console.log(`${key}` )
// }

// for(let keys in user){
//     console.log(keys ,"=> ", user[keys] )
// }

// console.log(Object.keys(user))


// HOF

// function operator(operands,a,b){
//      return operands(a,b)
// }
// function sum(a,b){
//     return a+b
// } 
// let add = operator(sum,5,7)
// console.log(add);

// function greet(){
//     console.log("HEllo")
// }


// Promise


// const work = new Promise((resolve,reject) =>{
//     let workdone = true
//     if(workdone){
//         resolve(["Done","Done dona done done"])
//     }
//     else {
//         reject({msg: "Not Done", b: "eu not done"})
// }
// })

// work.then(([a,b]) => {
//     console.log("Message :",a)
//     console.log("Message2 :",b)
//     console.log("workd")
// })
// .catch(({msg,b}) => {
//     console.log("Message :",msg)
//     console.log("Message2 :",b)

//     console.log("Nt workd")
// })


// const F1 = new Promise((resolve,reject) =>{
// //    setTimeout( () => {
//         if(Math.random() > 0.5){
//             resolve("F1: Ya")
//         }
//         else reject("F1: Na")
// //    },3000)
// });
// const F2 = new Promise((resolve,reject) =>{
//     // setTimeout( () => {
//          if(Math.random() > 0.5){
//              resolve("F2: Ya")
//          }
//          else reject("F2: Na")
//     // },2500)
//  });
//  const F3 = new Promise((resolve,reject) =>{
//     // setTimeout( () => {
//          if(Math.random() > 0.5){
//              resolve("F3: Ya")
//          }
//          else reject("F3: Na")
//     // },2000)
//  });

//  Promise.all([F1,F2 , F3]) .then((msg) => {
//     console.log(msg);
//     console.log("Yessss")
//  }) 
// .catch((msg) => {
//     console.log(msg)
//     console.log("Noooo")
// })

// async function one(){
//     return "Hello"
// }
// console.log(one)
// let doSomething = new Promise((resolve, reject) => {
//     if(doSomething){
//         resolve("Done")
//     }
//     else reject("No")
// })
// doSomething()
//   .then(result1 => {
//     return doSomethingElse(result1);
//   })
//   .then(result2 => {
//     return doAnotherThing(result2);
//   })
//   .catch(error => {
//     console.log(error);
//   });


// console.log("1");

// async function print(){
//   console.log("First")

//   let data = new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve("Hello data")
//     },2000)
//   })

//   let result = await data
//   console.log(result)
//   console.log("Hello result")
// }

// print()
// console.log("last")

let obj = {
name:"sonu"
} ;
// obj.name = "name"
console.log(obj.name)