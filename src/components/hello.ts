import a from './b'
function test(s: string, n: number): string {
    return s
}
interface Person {
    name: string,
    age: number
}
interface action {
    (s: string): string
}

let aaa: action = function (ss) {
    return ss
}

a(12,23);
aaa("12");