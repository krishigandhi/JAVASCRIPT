let names = [
    "images/images1.jpg",
    "images/download.jpg",
    "images/1707746429259.jpg",
]

let container = document.getElementById('container');

function add(){
    let con = ''
    for(let i = 0;i<names.length;i++){
        con += `<img src="${names[i]}">`;
    }
      container.innerHTML = con;
}

add()