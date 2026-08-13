import { getStockData } from "./fakeStockAPI.js"
setInterval(function(){
    const stockData = getStockData()
    renderStockTicker(stockData)
},1500)
function renderStockTicker(stockData){
const stocKname = document.getElementById('name')
const stocKsym =  document.getElementById('sym')
const stocKprice = document.getElementById('price')
const stocKtime = document.getElementById('time')

const{name,sym, price,time } = stockData


stocKname.innerHTML = `Name :  ${name}`;
stocKsym.innerHTML =  `Symbol: ${sym}`
stocKprice.innerHTML = `Price :${price}`
stocKtime.innerHTML = `Time :${time}`
}