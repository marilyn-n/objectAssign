# Object Assign

you can clone or ovewrite 

The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

```
example.js

const myPersonalInfo = {
  name: 'Alisha',
  gender: 'F',
  age: 14,
  birthdate: '23 de Agosto',
  country: 'Mexico',
  nationality: 'Mexican',
  hobby: 'Painting'
}

```

## Clone

The Object.assign() method only copies enumerable and own properties from a source object to a target object.

```
example.js

```

## Overwrite

Properties in the target object will be overwritten by properties in the sources if they have the same key.

```
example.js

```