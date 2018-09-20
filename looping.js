const countries = [ 'Chile', 'Spain', 'Ingland', 'Argentina','Panama', 'USA', 'Mexico', 'Canada']
const numbers = [5, 6, 12, 18, 20, 28, 32, 45, 51, 62, 64, 65, 67, 68, 72, 78, 83, 84, 91, 97]

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
  console.log(item.length < 3) // ============================> what?
}

for (const item of countries) {
  const toUpperCase = item.toLocaleUpperCase()
  console.log(toUpperCase)
}
// enumerable
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    const element = object[key];
    
  }
}

while (condition) {

}

do {
  
} while (condition);


array.forEach(element => {
  
});

