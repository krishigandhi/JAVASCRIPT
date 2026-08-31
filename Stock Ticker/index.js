import { getStockData } from "./fakeStockAPI.js"

let prevPrice = null

setInterval(function(){
    const stockData = getStockData()
    renderStockTicker(stockData)
}, 1500)

function renderStockTicker(stockData){

    const stocKname = document.getElementById('name')
    const stocKsym = document.getElementById('sym')
    const stocKprice = document.getElementById('price')
    const stocKtime = document.getElementById('time')

    const { name, sym, price, time } = stockData

    const priceDirectionIcon =
        price > prevPrice ? '^' :
        price < prevPrice ? 'v' :
        '>'

    stocKname.innerHTML = `Name : ${name}`
    stocKsym.innerHTML = `Symbol : ${sym}`
    stocKprice.innerHTML = `Price : ${price} ${priceDirectionIcon}`
    stocKtime.innerHTML = `Time : ${time}`

    prevPrice = price
}