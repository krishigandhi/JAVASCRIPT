let letters =  {
    a: 2,
    b: 3

}
let nums = [1,2]
//////////////////For in /////////////////////////////////////////
for(const name in letters){
    console.log( letters[name])
}
///////////////// For Each ///////////////////////////////////
nums.forEach(num => {
    let sum = num*2
    console.log(sum)// This 
});

nums.forEach(function(n){
    console.log(n * 11)
})
/////////JOIN/////////////

let arr = ['a','bb','ccc']
console.log(arr.join(' - '))

//////////Filter//////////
let age = [10,8,12,5,21,18]

console.log(age.filter(function(a){
    if(a>=18) return true;
    else return false;
}))

// console.log(age2)