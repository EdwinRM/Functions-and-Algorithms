const functions = require('./functions');


test('Add 2 +2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4); //matcher toBe 4         
});

test('Add 2 +2 not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5); //must not be a 5
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull(); //has to be a null
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();//undefine 0 null pass the test of a Falsy value
});

test('User user should be traversy object', () => {
    expect(functions.createUser()).toEqual({ //To Equal check obj and arrays
        firstName: 'Brad',
        lastName: 'Traversy'
    });//
});

//Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex Regular Expresions
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

//Array
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin'); //to Contain for arrays
});


//working with async data

test('User names should be Leanne Graham', () => {
    expect.assertions(1); //test if the promise gets call
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        })
});