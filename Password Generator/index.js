let characters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "0","1","2","3","4","5","6","7","8","9",
  "!","@","#","$","%","^","&","*","(",")","-","_",
  "=","+","[","]","{","}","|",";:",".","/","<",">","?"
];

let pass1 = document.getElementById('pass1');
let pass2 = document.getElementById('pass2');
let range = document.getElementById("length");
let inp = document.getElementById("inp");
// range.textContent = inp;

function generate(){
        let r1 = " ";
let r2 = " ";
        for(let i=0;i<15;i++){
            let password1 = Math.floor(Math.random()*characters.length)
        let finalp1 = characters[password1];
        r1 += finalp1;
    }
     for(let i=0;i<15;i++){
            let password1 = Math.floor(Math.random()*characters.length)
        let finalp2 = characters[password1];
        r2 += finalp2;
    }
      pass1.textContent = r1;
      pass2.textContent = r2;
  }