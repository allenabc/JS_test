const assert = require('chai').assert
const vb = require('../validBirthday')

scenario()
var birthday = '07/21/2000'

function main() {
    getAge()
    checkMonthDay()
    generationCheck()
    leapYearCheck()
    decodeDateStringTest()
    shortLongTest()
}
function scenario() {
    setNameTest()
    setBirthday(birthday)
}
function setNameTest() {
    var first = 'John'
    var last = 'Brown'
    vb.setName(first, last)
    describe('Testing name', function () {
        it('check firstName', function () {
            var result = vb.getFirstName()
            assert.match(first, /John/, 'first name')
        })
        it('check lastName', function () {
            var result = vb.getLastName()
            assert.match(last, /Brown/, 'last name')
        })

    })
}
function setBirthday(date){
	vb.setBirthday(date)
	console.log(">>${vb.getBirthday()'
        it('check birthday', function () {
            var result = vb.getBirthday()
            assert.equal(result, '07/21/2000', 'checking date')
        })
}
function getAge() {
    birthday = '01/01/2000'
    result = vb.getAge(birthday)
    describe('getAge ', function () {
        it('check year', function () {
            var result = vb.getAge(birthday)
            assert.match(result, /2000/, 'wrong year')
        })
    })
}
function checkMonthDay() {
    // npm test
    var month = 6
    describe('Testing day value in checkMonthDay', function () {
        it('enter zero for day should fail', function () {
            var result = vb.checkMonthDay(0, month)
            assert.isFalse(result, 'daily')
        })

        it('enter 32 for day should fail', function () {
            var result = vb.checkMonthDay(32, month)
            assert.isFalse(result, 'daily')
        })

        it('enter one for day should pass', function () {
            var result = vb.checkMonthDay(1, month)
            assert.isTrue(result, 'daily')
        })

        it('enter 31 for day should pass', function () {
            var result = vb.checkMonthDay(31, month)
            assert.isTrue(result, 'daily')
        })
    })

    var day = 14
    describe('Testing month value in checkMonthDay', function () {
        it('enter zero for month should fail', function () {
            var result = vb.checkMonthDay(day, 0)
            assert.isFalse(result, 'daily')
        })

        it('enter 13 for month should fail', function () {
            var result = vb.checkMonthDay(day, 13)
            assert.isFalse(result, 'daily')
        })

        it('enter one for month should pass', function () {
            var result = vb.checkMonthDay(day, 1)
            assert.isTrue(result, 'daily')
        })

        it('enter 12 for month should pass', function () {
            var result = vb.checkMonthDay(day, 12)
            assert.isTrue(result, 'daily')
        })
    })
}
function generationCheck() {
    describe('Testing generationCheck', function () {
        var generation = 'Silent Generation'
        var year = 1930
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.generationCheck(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Silent Generation'
        var year = 1944
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.generationCheck(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Baby Boomer'
        var year = 1945
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.generationCheck(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Baby Boomer'
        var year = 1964
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.generationCheck(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Generation X'
        var year = 1965
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.generationCheck(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Generation X'
        var year = 1976
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.generationCheck(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Millenial'
        var year = 1977
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.generationCheck(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Millenial'
        var year = 1995
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.generationCheck(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Generation Z'
        var year = 1996
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.generationCheck(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Generation Z'
        var year = 2020
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.generationCheck(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
    })// scribe
}
function leapYearCheck() {
    leaps = [1904, 1956, 1960, 1992, 2000, 2016, 2020]
    nonLeaps = [1953, 1991, 1995, 2001, 2015]
    describe('Testing leapYearcheck', function () {
        leaps.forEach(function (year) {
            it(`${year} is leap `, function () {
                assert.isTrue(vb.leapYearCheck(year), `expecting a valid`)
            })
        })
        nonLeaps.forEach(function (year) {
            it(`${year} is not leap `, function () {
                assert.isFalse(vb.leapYearCheck(year), `expecting a valid`)
            })
        }
        )
    })
}
function decodeDateStringTest() {
    describe('Decode date string ', function () {
        it(`validate date `, function () {
            var dateString = '06-12-1960'
            let Obj = vb.decodeDateString(dateString)
            assert.equal(Obj.month, 06, 'should match month')
            assert.equal(Obj.day, 12, 'should match day')
            assert.equal(Obj.year, 1960, 'should match year')
        })
        it(`validate date`, function () {
            var dateString = '07/08/2000'
            let Obj = vb.decodeDateString(dateString)
            assert.equal(Obj.month, 07, 'should match day')
            assert.equal(Obj.day, 08, 'should match month')
            assert.equal(Obj.year, 2000, 'should match year')
        })
        it(`validate date`, function () {
            var dateString = '01/12/1950'
            let Obj = vb.decodeDateString(dateString)
            assert.equal(Obj.month, 01, 'should match day')
            assert.equal(Obj.day, 12, 'should match month')
            assert.equal(Obj.year, 1950, 'should match year')
        })
    }
    )
}
function shortLongTest() {
    describe('Long month ', function () {
        months = [1, 3, 5, 7, 8, 10, 12]
        months.forEach(function (month) {
            it(`long month  `, function () {
                let result = vb.longMonth(month)
                assert.isTrue(result, 'should be long month')

            })
        }
        )
    })
    describe('short month ', function () {
        months = [2, 4, 6, 9, 11]
        months.forEach(function (month) {
            it(`long month  `, function () {
                let result = vb.longMonth(month)
                assert.isFalse(result, 'should be long month')

            })
        }
        )
    })
    describe('out of range', function () {
        months = [-1, 13]
        months.forEach(function (month) {
            it(`out of range  `, function () {
                let result = vb.longMonth(month)
                assert.isUndefined(result, 'should be out of range')
            })
        }
        )
    })
}
