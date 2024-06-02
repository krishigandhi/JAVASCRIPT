let URL = "https://cat-fact.herokuapp.com/facts" ;
 
 const getFacts = async() => {
    console.log("getting data")
    let response = await fetch(URL);
    response.json();
 };