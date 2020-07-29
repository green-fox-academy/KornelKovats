import {Count } from "./count";

let test = require('tape');
let count = new Count();

test('testing',t=>{
    let expected ={
        t:2,
        e:1,
        s:1,
    };
    t.deepEquals(count.countingLetters('test'),expected);
    t.end();
});