interface Address {   // can be extend for a classes
  number: number
  street: string
  country: string  
  reference?: string[] // array of string can be used "Array<string>" too
}

type User = { // cant't be extend for a classes
  name: string
  age: number
  address?: Address // "?" for make this a optional item of this type
}

type Level = 'one' | 'two' | 'three' | 'four' | 'five' // only for types
const progress: Level = 'one' 


type Person = [string, number] // tuplas
const guy: Person = ['cleitone', 2]

type MorePerson = [string, number][]
const people: MorePerson = [
  ['cle', 2], 
  ['lucas', 18]
]

enum infos {
  up = 1,
  down = 2,
  left = 3,
  right = 4
}

interface MathFunc {
  (x: number, y: number): number
}
// const add: MathFunc = (x: number, y:number) => x + y; <---- forced 

