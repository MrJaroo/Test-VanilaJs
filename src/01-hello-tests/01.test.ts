import { multi, sum } from "./01";

let a:number;
let b:number;
let c:number;

beforeEach(()=>{
    a = 1;
    b = 2;
    c = 3;
})

test('sum shoud be corect', () => {

    const resuslt = sum(a, b);

    expect(resuslt).toBe(3)
})

test('mulyi play should be correct', () => {
     
    const result = multi(b, c)
    const resultAC = multi(a, c)

    expect(result).toBe(6)
    expect(resultAC).toBe(3)
})