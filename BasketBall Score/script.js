let home = document.getElementById('h');
let guest = document.getElementById('g');

let homeScore = 0;
let guestScore = 0;
function oneH(){
 let total =   homeScore +=1;
   document.getElementById('h').innerHTML = total;
}
function twoH(){
 let total =   homeScore +=2;
   document.getElementById('h').innerHTML = total;
}
function threeH(){
 let total =   homeScore +=3;
   document.getElementById('h').innerHTML = total;
}
function oneG(){
 let total =   guestScore +=1;
   document.getElementById('g').innerHTML = total;
}
function twoG(){
 let total =   guestScore +=2;
   document.getElementById('g').innerHTML = total;
}
function threeG(){
 let total =   guestScore +=3;
   document.getElementById('g').innerHTML = total;
}

let reset = document.getElementById('reset');
 function Reset(){
        homeScore = 0;
        guestScore = 0;
    document.getElementById('h').innerHTML = 0;
    document.getElementById('g').innerHTML = 0;
    
 }