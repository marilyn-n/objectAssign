const countries = [ 'Chile', 'Spain', 'England', 'Argentina','Panama', 'USA', 'Mexico', 'Canada']
const numbers = [5, 6, 12, 18, 20, 28, 32, 45, 51, 62, 64, 65, 67, 68, 72, 78, 83, 84, 91, 97]

const mixedArray = countries.concat(numbers)
console.log(mixedArray, 'mixed array with concat')

const fizzBuzz = number => {
  if(number % 2 === 0 && number % 5 === 0) {
    return ('Fizz')
  } else if (number % 5 === 0) {
      return ('Buzz') 
  } else if (number % 2 === 0 ) {
    return ('FizzBuzz')
  } else {
    return (number)
  }
}

const fizzBuzzLoop = array => {
  for(let i = 0; i < array.length; i++) {
    const number = array[i]
    console.log(fizzBuzz(number))
  }
}

fizzBuzzLoop(numbers)


for (let index = 0; index < countries.length; index++) {
  const element = countries[index]
}

for (let i = 0; i < numbers.length; i++){
  if (i % 2 === 0) {
    console.log(`${numbers[i]} is multiple of 2`)
  }
}

for(let i = 0; i < countries.length; i++){
  const element = countries[i]
  if (element.length > 8) {
    console.log(`Country with 9 characters --> ${element}`)
  }
}

for(let i = 0; i < numbers.length; i++){
  const num = numbers[i]
  console.log(num.toString()) 
}

// iterable
for (const country of countries) {
  console.log(country) 
}

for (const num of numbers) {
  console.log(num)
}

for (const item of countries) {
  console.log(item.length < 3)
}

for (const item of countries) {
  const toUpperCase = item.toLocaleUpperCase()
  console.log(toUpperCase)
}

// enumerable
for (const element in countries) {
  if (countries.hasOwnProperty(element)) {
    console.log(countries[element], '******')
  }
}

for (const num in numbers) {
  if (num % 2 === 0) {
    console.log(numbers[num], '-------´´´´´+++')
  }
}

for (const item in countries) {
  const myItem = countries[item].toLocaleUpperCase()
  console.log(myItem, '¡¡¡¡¡')
}

for (const num in numbers) {
  if (numbers[num] > 50) {
    console.log(numbers[num], 'ºººººº')
  }
}

while (countries.length) {
  console.log(countries, 'what')
  break
}

do {
  console.log(countries, 'mmmm')
  break;

} while (countries.length)


numbers.forEach(num => {
});

// // Write a for loop that will iterate from 0 to 20. 
// // For each iteration, it will check if the current number is even or odd, and report that to the screen 
// // (e.g. "2 is even").


  for (let i = 0; i < 21; i++) {
    if (i % 2 === 0) {
      console.log(i + ' is even')
    } else {
      console.log(i + ' is odd')
    }
  }


  // Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, 
  // it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

  for(let i = 0; i < 11; i++) {
    console.log(`${i} * 9 = ${i * 9}`)
    console.log('*******************************')
  }

  // Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 
  // (100 results total).

  for(let i = 0; i < 11; i++) {
    console.log('*******************************')
    for(let a = 0; a < 11; a++) {
      console.log(`${i} * ${a} = ${i * a}`)
    }
  }

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

const assignGrade = (score) => {
  if(score <= 40) {
    return ('F')
  } else if(score >= 41 && score <= 60) {
    return ('D')
  } else if(score >= 61 && score <= 80) {
    return ('C')
  } else if(score >= 81 && score <= 90){
    return ('B')
  } else if(score >= 90) {
    return ('A Congratulations!')
  }
}

console.log(assignGrade(55))
console.log(assignGrade(7))
console.log(assignGrade(97))
console.log(assignGrade(66))
console.log(assignGrade(81))


// Check the results of your assignGrade function from the conditionals exercise by logging every value 
// from 60 to 100: your log should show "For 88, you got a B. For 89, you got a B. For 90, you got an A. 
// For 91, you got an A.", etc., logging each grade point in the range.

for (let i = 60; i <= 100; i++) {
  console.log(`For ${[i]}, you got ${assignGrade([i])}`)
}