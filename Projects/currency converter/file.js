const base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const dropDowns = document.querySelectorAll('.dropdown select');



for(let select of dropDowns){
    for(let Currcodes in countryList){
        let newOption = document.createElement('option');
        newOption.innerText = Currcodes;
        if(select.name === "from" && Currcodes === "USD"){
                newOption.selected = "selected";
        }
        else if (select.name === "to" && Currcodes === "INR"){
            newOption.selected = "selected";
    }
        select.append(newOption);
    }
    select.addEventListener("change",(evt) => {
        updateFlag(evt.target)
    })
}

const updateFlag = () => {

}