const assert = require('chai').assert
const vb = require('../validBirthday')

function testx() {
    // npm test

    var month = 6
    describe('Testing day value in checkMonthValue', function () {
        it('enter zero for day should fail', function () {
        var result = vb.checkMonthValue(0, month)
            assert.equal(result, false, 'daily')
        })

        it('enter 32 for day should fail', function () {
        var result = vb.checkMonthValue(32, month)
            assert.equal(result, false, 'daily')
        })

        it('enter one for day should pass', function () {
        var result = vb.checkMonthValue(1, month)
            assert.equal(result, true, 'daily')
        })

        it('enter 31 for day should pass', function () {
        var result = vb.checkMonthValue(31, month)
            assert.equal(result, true, 'daily')
        })
    })

    var day = 14
    describe('Testing month value in checkMonthValue', function () {
        it('enter zero for month should fail', function () {
        var result = vb.checkMonthValue(day,0 )
            assert.equal(result, false, 'daily')
        })

        it('enter 13 for month should fail', function () {
        var result = vb.checkMonthValue(day, 13)
            assert.equal(result, false, 'daily')
        })

        it('enter one for month should pass', function () {
        var result = vb.checkMonthValue(day, 1)
            assert.equal(result, true, 'daily')
        })

        it('enter 12 for month should pass', function () {
        var result = vb.checkMonthValue(day, 12)
            assert.equal(result, true, 'daily')
        })
    })
}
testx()
