const {greet} = require('../index');
test('greet returns greeting with name', ()=>{
    expect(greet('World')).toMatch(/(Hello|Hi), World!?/);
});