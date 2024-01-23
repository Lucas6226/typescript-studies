const person_one = {name: 'lucas', age: 17} as User 
// força o item a ter o tipo "User" independente das caracteristicas (pratica não recomendada)



// export const person_two : User & Person = { <--- can be maked for have more types
export const person_two : User = {
  name: 'adaber',
  age: 1,
  address: {
    number: 1,
    street: ' ',
    country: ' ',
  }
}
// não permite inferencia, ou seja, executa ações e previsões baseando-se
// apenas no padrão do tipo setado ao item


const person_three = {name: 'pedro', age: 12} satisfies User
// Permite interferencia, ou seja, executa açôes e previsões baseando-se no tipo 
// do item especifico em questão e não nas possibilidades de tipos previstos