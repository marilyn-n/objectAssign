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
  break;
}

do {
  console.log(countries, 'mmmm')
  break;

} while (countries.length)


numbers.forEach(num => {
  console.log(num, 'hey')
});


