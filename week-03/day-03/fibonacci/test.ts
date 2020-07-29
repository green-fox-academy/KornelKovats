let test = require('tape');
import {Fibonacci} from './fibonacci'

let fibo = new Fibonacci();

test('check if fibonacci is equals ',t=>{
    t.equals(fibo.getFiboValue(1),1);
    t.end();
});