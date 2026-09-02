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
/////////

let arr = []

