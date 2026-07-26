// const exercise = 4;
// let message = ''

// message = exercise < 30 ?  'you need to work hard' : exercise < 60  ?  'Good' : 'EXcellent'

// console.log(message)

const Guess = 1 
const correct = 6;

let message = ''

message = Guess == correct ? 'Correct'
          : Guess > correct ? 'Too high'
          : 'Too low'

console.log(message)