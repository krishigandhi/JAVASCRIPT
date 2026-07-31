//  ****************************************  Ternary opertaor ****************************************
// const exercise = 4;
// let message = ''

// message = exercise < 30 ?  'you need to work hard' : exercise < 60  ?  'Good' : 'EXcellent'

// console.log(message)

//**************************************** 2 ****************************************//
// const Guess = 1 
// const correct = 6;

// let message = ''

// message = Guess == correct ? 'Correct'
//           : Guess > correct ? 'Too high'
//           : 'Too low'

// console.log(message)

//****************************************Switch CAse****************************************//

// Price : tea 10, dosa 40, cake 50, idli 35//

/*function select(item){
    let price = 0

    switch(item){
        case 'tea':
        price = 10
        break;

        case 'dosa':
            price = 40
            break;

        case 'cake':
            price = 50
            break;
        case 'idli':
            price = 35
            break;
        default : 
        return ` ${item} is not available`
    }
     return `You seelcted ${item} and its price is Rs. ${price}`
}

console.log(select('doosa')) */

//**************************************** Object Destructuring ****************************************//
 /*const dreamLife = {
    position: 'softWare Developer',
    company:'Google',
    place: 'Banglore',
    health: 'Fit and healthy'
 }

  const {position, company, place, health} = dreamLife

  console.log(`My dream position is ${position} at ${company} in ${place} and really want a ${health} body`) */
/*function namee(ans,points){
    console.log(`the ans is ${ans} and you got ${points} points `)
}
  setTimeout(namee,3000,'New Delhi',10)

console.log(`What is the capital of India ?`)*/

  //**************************************** Date Constructors //****************************************//
  const tDate = new Date()
  console.log(tDate)
  console.log(tDate.getFullYear())
  //****************************************Error Constructors //****************************************//
