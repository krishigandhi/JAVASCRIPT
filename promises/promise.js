// const p = new Promise(function(resolve,reject){
//     setTimeout()
// })


// promise.then(() => {}) => used when promise is fullfilled or resolved 
// promise.catch() => used when primise is rejected 

async function heyy(){
    console.log('hello');
}


//Async - Await

let pro = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task");
        resolve();
    },1000)
})

pro.then(function(){
    console.log('resolved 1 ')
})

// Same but it can also be done ww=ithout variable name 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task");
        resolve()
    },1000)
}).then(function(){
    console.log('resolved 2')
})