// Bottom Values with ! !! && ||

const bottomValues = [undefined, null, 3, 9, NaN, 'hello world', 'javaScript', 0, 1]

const obj = {
  name: null,
  lastName: 'Gonzales',
  lastName2: 'perez',
  age: 30,
  country: undefined,
  married: true,
  divorced: true
}

const isMarried = (item) => {
  if (!item.married || !item.divorced) {
    return 'This person is free'
  } else {
    return 'its married' 
  }
}

console.log(isMarried(obj))

const allBottomValues = bottomValues.filter(item => !item)
console.log(allBottomValues)


// You have a friend who can't eat "fish" or "pineapples". 
// Write a function using && to check if she can eat a particular kind of food or not. 
// Return one sentence if she can eat it, and a different one if she can't. 
// For example, the function might work like this: canEllaEat("panda stew");
//  would return "She can eat it!".

const canSheEat = (food) => {
  if (food === 'panda stew') {
    return ('She can eat it!')
  } else if (food === 'pineaple' && 'fish') {
    return ('She cannot eat it')
  }
}

console.log(canSheEat('panda stew'))
// Rewrite the previous function using || instead.

const canSheEat2 = (food) => {
  if (food === 'panda stew') {
    return ('She can eat it!')
  } else if (food === 'pineaple' || 'fish') {
    return ('She cannot eat it')
  }
}

console.log(canSheEat2(!'panda stew', '<<<<<<'))

// Let's add a new message to the number guessing game we made in the previous lesson.
//  Since the rules of the game say that the user has to guess a winning number which will 
//  be between 1 and 20, make the program output "That's not between 1 and 20!" 
//  if the user guesses less than 1 or greater than 20.

const randomNumber = Math.floor(Math.random() * 10)
console.log(randomNumber, 'random number')

const numberGuessing = (num) => {
  if (num === randomNumber) {
    return ('Yei you guess it right')
  } else {
    return ('That is not between 1 and 20!')
  }
} 

console.log(numberGuessing(0))