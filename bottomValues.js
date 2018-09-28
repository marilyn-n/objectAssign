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
