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


let num1= document.getElementById('num1').innerHTML = 8;
let num2 = document.getElementById('num2').innerHTML = 2;
let result = document.getElementById('result');
function add(){
    // document.getElementById('add');
    let total = num1 + num2;
 result.innerHTML = "Sum: " + total;
}

function sub(){
    let total = num1 - num2;
    result.innerHTML=total;
    
}

function mul(){
    let total = num1 * num2;
    result.innerHTML=total;
}

function div(){
    let total = num1/num2;
    result.innerHTML=total;

}






