interface Person {
    name: string,
    age: number
}

interface change {
    (p: Person | boolean): Person | boolean
}

interface animal {
    readonly name: string,
    readonly type: string
}

interface cat {
    name?: string,
    age?: number
}

interface dog {
    name?: string,
    age?: number,
    //还可以存在其他属性
    [propName: string]: any
}

function a(dog: dog) {
    console.log(dog)
}

a({ name: 'adf', adsf: 111 })

function b(dog: cat) {
    console.log(dog)
}

//类型断言
b({ name: 'adf', adsf: 111 } as cat)

let f: change = (p) => {
    console.log(p.valueOf)
    console.log(p.valueOf)
    return p
}

f({ name: 'hello', age: 15 })



//可索引类型
//可索引类型与额外属性定义一样
interface StringArray {
    [index: number]: string
}
let nameArray: StringArray
nameArray = ['Bob', 'Fred']
//TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，
//但是数字索引的返回值必须是字符串索引返回值类型的子类型。 
//这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 
//也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
//额外属性定义
interface extralProp {
    [prop: string]: any
}

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    [x: string]: Animal;
    [x: number]: Dog;
}