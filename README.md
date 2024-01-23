# typescript

Type script é uma extensão para o JavaScript que adiciona tipagem forte a linguagem. Com ele podemos definir tipos fixos para, variáveis, retornos de funções, classes, além de poder criar tipos próprios e etc… Esse recurso torna-se util para dificultar a incidência de erros e facilitar detecção dos próprios quando ocorrido. Tendo tipagem forte torna-se muito mais simples a incrementação e reestruturação de código. Com esse recurso qualquer alteração indevida ou errática de um código já existente, será denunciada (marcada/mencionada etc…)  ainda no desenvolvimento desse recurso, evitando que o erro persista até a versão final e chegue ao publico. Uma maior rigidez nos tipos de dados, criados, passados, e usados é o que traz maior controle sobre o código, e mais segurança par afazer modificações.     

## Ambiente e execução de typescript

> **Configurando o Ambiente**: Podemos fazer uso do typescript executando os seguintes comandos no diretório do projeto:
> 
- Inicie o projeto `npm init -y`
- Adicione typescript como dependência de desenvolvimento `npm i typescript -D` (geralmente)
- inicie o typescript `npx tsc --init`
    - Cria no diretório do projeto o arquivo `tsconfig.json`, responsável por definir as configurações do TS.
- Mudar a propriedade `“target”:”es0000”`, no arquivo `tsconfig.json` para o valor que corresponde com a versão usada do node
    - Nesse arquivo também podemos ativar a propriedade `"outDir": "./dist",` para fazer o código compilado ser gerado na pasta “dist”
    - Nesse arquivo também podemos ativar a propriedade `"rootDir": "./src",` para fazer o compilador considerar apenas os arquivos da pasta “src”
    - valores para cada versão: [https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping)

---

> **Execução de código**
> 
- Gerando a versão JS de distribuição e executando-a com o próprio typescript
    - Converta o projeto para JS puro `npx tsc` e execute
    - Adicione uma dependência de desenvolvimento para execução de TS `npm i tsx -D`
        - Execute o arquivo com a dependência `npx tsx index.ts`
- Executando diretamente a versão TS com atualização em tempo real usando ts-node-dev
    - `npm i ts-node-dev -D` instala
    - `tsnd --respawn --transpile-only src/server.ts` para ativar a aplicação
        - `--transpile-only` para bloquear a analise de erros
        - `--respawn` para o servidor ser atualizado quando modificar os arquivos

## Sintaxe Typescript

### Declaração de tipos

Existem duas formas de se declarar um tipo próprio no typescript, usando `type` ou `interface`. Com o `type` ainda é possível declarar um tipo de valor único com possibilidades delimitadas. Já definições usando `interface` permitem que o tipo seja posteriormente estendido por classes e funções para definir um formato de declaração obrigatório ser seguido.

- `?` Serve para definir a propriedade como opcional
- `|` Serve para definir mais de um tipo possível a uma propriedade
- `[]` Serve para indicar que é um array ou um array do tipo passado

---
- type

```tsx
type Address = {
  number: number
  street: string | number
  reference?: string[] 
}
```

```tsx
type User = { 
  name: any
  address?: Address 
}
```

```sql
type Level = 'one' | 'two' | 'three' | 'four' | 'five' // only for type
const progress: Level = 'one'
```
---
- interface

```tsx
interface Address {
  number: number
  street: string | number
  reference?: string[] 
}
```

```tsx
interface User { 
  name: any
  address?: Address 
}
```

```tsx
interface MathFunc {
  (x: number, y: number): number
}
const add: MathFunc = (x: number, y:number) => x + y; // <---- forced
```

---

Também temos os enums. Enums são como objetos imutáveis, algo como uma coleção de constantes. Declaramos o enum e passamos todos os itens desejados atribuindo seus respectivos valores. Se não nada for atribuído na declaração cada item irá receber o valor anterior mais um, e o valor do primeiro item sera zero, deixando os valores ordenados como um array. Após isso podemos chamar as propriedades pelo enum para obter os seus valores, como um objeto.

```tsx
enum infos {
  up = 1,
  down,
  left,
  right
}

console.log(infos.left) // return 2
```

Por ultimo temos as tuplas. Servem para definir um tipo referente a um array de tamanho e tipos de itens específicos. O exemplo a baixo é um tipo que obriga itens a serem um array de duas propriedades com uma ordem, quantidade e tipo certo para as propriedades.

- *`type* Person = [*string*, *number*]`

### Atribuição de tipos

Podemos atribuir tipos a variáveis, funções, retornos de funções, parâmetros e etc… Á 3 formas de definir o tipo de algo, essas são:

- A definição com `satisfies` que obriga que o item tenha as características básicas do tipo para que a definição seja possível.
    - ex: `const person = {...} satisfies User`
- A definição com `:` que obriga que o item tenha as características básicas do tipo para que a definição seja possível. Mas, diferente do `satisfies` essa propriedade realiza as operações e testes no item considerando o valor atribuído ao tipo do item, e não o valor atribuído ao item em questão.
    - ex: `const name: string = ‘lucas’`
- A definição com `as` que força o item a ser do tipo definido independente de suas características
    - ex: `const name = ‘lucas’ as string`

### keyof & typeof

O `keyof` e o `typeof` são comandos typescript para obter tipos a partir de estruturas criadas. O recorte:

- `keyof user` Retorna um novo tipo que só conter passives chaves do item user.
- `typeof user` Retorna um tipo com a exata estrutura do item user

### Utility types

Utility types são funções exclusivas do typescript, nessas passamos os argumentos usando `<>` ao invés de `()`. Essas funções servem objetivamente para manipulação de tipos, algumas delas são:

- `ReturnType< item >` Devolve todas as possibilidades de retorno do tipo “item”.
- `Omit< item,  ‘level’ | ‘name’>` Devolve um tipo igual ao tipo “item” mas sem as propriedades “level” e “name”.
- `Pick< item, ‘level’ | ‘name’ >` Devolve um tipo que tem apenas as propriedades “level” e “name” do tipo “item”
- `Partial< item >` Retorna um tipo igual ao tipo “item” mas com todas as propriedades sendo opcionais.
- `Required< item >` Retorna um tipo igual ao tipo “item” mas com todas as propriedades sendo obrigatórias.
- `Readonly< item >` Retorna um tipo igual ao tipo “item” mas com todas as propriedades sendo imutáveis
- `Exclude< item, ‘name’>` Devolve um tipo que tem todas as propriedades de item, exceto “level” e “name”.
- `Parameters< functionType >` devolve os parâmetros de um tipo de função.

### Generics

O generic é pré-definido em uma função ou tipo composto para ser usado como uma variável durante sua declaração. É um tipo relativo a outro tipo. Comumente o usamos para definir tipos que obrigatoriamente devem ser uma especificidade, característica, derivação, transformação ou possibilidade de algum valor, dessa forma um valor X obriga o generic a ser referente a X, já um valor Z obriga-o a ser referente a Z, dai o nome. 

Por tanto, o generic é um tipo para representar uma fator genérico de qualquer tipo. Isso ajuda na tipagem pois um valor do tipo generic não aceita a a atribuição de uma possibilidade invalida.   

```sql
type UserKeys = 'name' | 'password' | 'age'

function pickProperty_two<t extends Record<UserKeys, unknown>>(
  user: t,
  property: keyof t
) {
  return user[property];
}
```

No exemplo a cima definimos o generic com o nome desejado dentro de `<>` (”T” nesse caso) e atribuímos ele como o tipo de user. Dessa forma delimitamos todas as possibilidades de valor a serem passadas para user.

### Class syntax

No Typescript podemos definir a visibilidade das variáveis e forma de as declarar com a seguinte sintaxe:

```jsx
class students {
   constructor(
      readonly name: string,
      protected id: number,
      private history: string,
   ) {}
      
   myName(): string {
      return this.name;
   }
   
}
```
