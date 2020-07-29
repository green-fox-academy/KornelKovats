let test = require('tape');

class Apple {
    getApple():string{
        return 'apple';
    }
}
let apple= new Apple();
test('apple is equals?: ',t =>{
    t.equals('apple',apple.getApple());
    t.end();
});

