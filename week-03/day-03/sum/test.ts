let test = require('tape');
import {Sum} from './sum'

let sum = new Sum();

let newInteger: number[] = [];

test('equaling sum',t=>{
    t.equals(sum.summingElements(),0);

    t.end();
});

