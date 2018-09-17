// cloning an object

const obj1 = {}

const obj2 = {
  fb: 'mar',
  instagram: '@mar'
}

Object.assign(obj1, {twitter: 'mar'})
Object.assign(obj2, {patron: 'm@r'})

const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj);

const status = {
  public: 'Publico',
  private: 'Privado',
  deleted: 'Eliminado',
  draft: 'Borrador',
  edited: 'Editado',
  copy: 'Copia'
}

const myPersonalInfo = {
  name: 'Alisha',
  gender: 'F',
  age: 14,
  birthdate: '23 de Agosto',
  country: 'Mexico',
  nationality: 'Mexican',
  hobby: 'Painting'
}

const objCopy = Object.assign(
  {},
  myPersonalInfo,
  {
    status: status.copy,
    id: '003'
  }
)

const objPrivate = Object.assign(
  {},
  myPersonalInfo,
  {
    status: status.private
  }
)

console.log(objPrivate, '<<<<<---------')

const human = { 
  canDie: true,
  isBorn: true,
  getsOld: true,
  mustEat: true,
  name: null,
  walks(){
    console.log(`${name} is walking`)
  }
 }
 
 const superWoman = Object.assign( human, {
   canDie: false,
   getsOld: false,
   canFly: true,
   mustEat: false,
   name: null,
   saveWorld () {
     console.log(`${name} saves the world`)
   }
 })

 const fbPost = {
   isPrivate: false,
   isPublic: true,
   isEdited: false,
   isDeleted: false
 }

 const newPost = Object.assign({}, fbPost)

 Object.assign(newPost, { likes: 0 })