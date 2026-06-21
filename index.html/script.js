// let inc = 0;
// // let count = 0;

// function incre(){
//     console.log(inc);
//   document.getElementById('num').innerHTML = inc; 
//     inc++;

// }

// //   

// function save(){
//     let s = document.getElementById('saves');
//     let prev = document.getElementById('pre');
//     prev.innerHTML += inc + " - ";
//     document.getElementById('num').innerHTML = 0; 
//     inc = 0
// }
// save();


// let num1= document.getElementById('num1').innerHTML = 8;
// let num2 = document.getElementById('num2').innerHTML = 2;
// let result = document.getElementById('result');
// function add(){
//     // document.getElementById('add');
//     let total = num1 + num2;
//  result.innerHTML = "Sum: " + total;
// }

// function sub(){
//     let total = num1 - num2;
//     result.innerHTML=total;
    
// }

// function mul(){
//     let total = num1 * num2;
//     result.innerHTML=total;
// }

// function div(){
//     let total = num1/num2;
//     result.innerHTML=total;

// }


// let get = localStorage.getItem("key");
// console.log(get);

// let data = [
//     {
//         player: "J",
//         score: 52
//     },
//     {
//         player: "M",
//         score: 42
//     }
// ]

// let btn = document.getElementById('btnn');
// btn.addEventListener("click", () => {
//     console.log(data[0].score)
// } )
let desc = "starting letters";
let arr1 = ["a","b","c","d"];

function generate(){
    let sen = " "
    let last =  arr1.length-1;
    for(let i=0;i<arr1.length;i++){
        if(i==last){
            sen+= `${arr1[i]}`
        }
        else{
            sen+= arr1[i] + ", "; 
        }
    }
    return sen;
}

 console.log (`The ${arr1.length} ${desc} are ${generate(arr1)}`);
            





