const add = require("./add.js")

describe('Add_tests', () => {

    test('Addition', () => {
        expect( add(1, 2) ).toBe(3)
    })

})


