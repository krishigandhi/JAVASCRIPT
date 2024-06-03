let URL = "https://cat-fact.herokuapp.com/facts" ;
 const display = document.querySelector('#facts');
 const btn = document.querySelector('#btn');
 const getFacts = async() => {
    console.log("getting data")
    let response = await fetch(URL);
   let data = await response.json();
   console.log(data[1].text)
   display.innerText = (data[2].text);
 };
 btn.addEventListener('click',getFacts);
