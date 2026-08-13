import { getStockData } from "./fakeStockAPI"
setInterval(function(){
    const stockData = getStockData()
    renderStockTicker(stockData)
},1500)
function renderStockTicker(stockData){
const name = document.getElementById('#name')
const sym =  document.getElementById('#symbol')
const price = document.getElementById('#price')
const time = document.getElementById('#time')

const{name,sym, price,time } = stockData
}

name.inne