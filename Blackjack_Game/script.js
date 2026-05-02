let cardArr = []
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = " "
let messageEl = document.getElementById('message');
let sumEl = document.getElementById('sum');
let cardCell = document.querySelector("#card")
let personDetails = document.getElementById('person');

let person = {
    name: "Alex",
    points: 145
}
personDetails.innerHTML = person.name + " : $ " + person.points;
function getRandomCard(){
    let num = Math.floor(Math.random()*13) +1;
    if(num == 1){
        return 11;
    }
    else if (num == 11 ||num ==  12 || num ==  13){
        return 10;
    }
    else return num;
}
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
     cardArr = [firstCard + "  "+ secondCard];
    sum = firstCard+ secondCard ;
    renderGame()
} 

function renderGame(){
    sumEl.textContent = "Sum: " + sum ;
cardCell.textContent = "Cards : ";
for(let i=0; i<cardArr.length ;i++){
        cardCell.textContent += cardArr[i] + " "
}
if(sum <= 20) {
   message =  "Do you want to draw a new card ?" ;
}
else if(sum == 21){
    message = "You are Black jack !!!";
    hasBlackjack = true; }
else {
    message = "You're out of the game";
    isAlive = false; }


messageEl.innerHTML = message;

}

function newCard(){
    if(isAlive == true && hasBlackjack == false ){
    let card = getRandomCard()
    sum+=card;  
    cardArr.push(card)
    // cardCell.textContent =  "Cards : " + cardArr[0] + " " + cardArr[1] + " " + cardArr[2]
    // for (let i=1; )
    sumEl.textContent = "Sum: " + sum ;
    renderGame();
    }
}

