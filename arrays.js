const array = [3, 34, 7, 5, 4, 10, 20, 31, 8, 1]

const arraySum = arr => {
  let partialSum = 0
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    partialSum += element  
  }
  return partialSum 
}

const total = arraySum(array)

const arrayAverage = (arr) => {
  const arrSum = arraySum(arr)
  const arrLength = arr.length
  return (arrSum / arrLength)
}

const average = arrayAverage(array)
console.log(
`The total of the array is ${total}
The average of the array is ${average}`,
 )
//  ----------------------------

const journeys = [
  { from: 'Dhaka', to: 'New York', distance: 12654},
  { from: 'Sydney', to: 'chittagong', distance: 8858},
  { from: 'Kolkata', to: 'Sylhet', distance: 670}
 ]

 const distanceInKM = item => item.distance 

 const distacesArrInKM = journeys.map(distanceInKM)

//  const distancesArrInMiles = distacesArrInKM.map(item => item * 0.62)
//  console.log(distancesArrInMiles, '<<<--------')

 const distanceInMiles = item => item.distance * 0.62

 const distanceArrInMiles = journeys.map(distanceInMiles)
 console.log(distanceArrInMiles, '<<<--------')

//  distances greater than 10000 km

const journeysGreaterThan10000 = journeys.filter(item => item.distance > 10000)
console.log(journeysGreaterThan10000,'*******')

const journeysLessThan1000 = journeys.filter(item => item.distance < 1000)
console.log(journeysLessThan1000,'****___***')

journeys.push({from: 'Dhaka', to: 'Mexico City', distance: 15087})
console.log(journeys)

const firstJourneyFromDhaka = journeys.find(item => item.from === 'Dhaka')
console.log(firstJourneyFromDhaka)

const journeysFromDhaka = journeys.filter(item => item.from === 'Dhaka')
console.log(journeysFromDhaka)

console.log('are there any journeys to Los Angeles?')

const areThereJourneysToLA = journeys.some(item => item.to === 'Los Angeles')
console.log(areThereJourneysToLA)

// ------------------ Find all multiples of 3 and 5 less than 1000
const multiples = () => {
  const results = []
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0) {results.push(i)}
    else if (i % 5 === 0) {results.push(i)}
  }
return results
}

const multiplesOf3And5 = multiples()

// ------------------- Sum those multiples
const sumOfMultiples = (accumulator, current) => accumulator + current

const total = multiplesOf3And5.reduce(sumOfMultiples)

console.log(`the sum of all multiples is ${total}`)