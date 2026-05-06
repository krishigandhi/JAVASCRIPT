let fruits = ["🍎","🍊","🍎","🍊","🍎"];

let orange = document.getElementById('orange');
let apple = document.getElementById('apple');

for(i=0;i<fruits.length;i++){
    if(fruits[i] == "🍎" ){
        apple.textContent += "🍎";
    }
    else if (fruits[i] == "🍊" ){
        orange.textContent += "🍊"
    }
}