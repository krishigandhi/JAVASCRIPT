console.log("-------------------------------------------------New");
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];

let stage = document.getElementById('stage') 
let fightButton = document.getElementById('fight')

fightButton.addEventListener("click", function(){
    let emoji1 = Math.floor(Math.random()*fighters.length);
    let emoji2 = Math.floor(Math.random()*fighters.length);
    stage.textContent = (fighters[emoji1]) + "   " +  "    "   +  (fighters[emoji2]);

})
