const assert = require('chai').assert
const vb = require('../validBirthday')

var first = 'John'
var last = 'Brown'
var age
var birthday = '07/21/1995'
//scenario()
//main()
//setBirthdayTest()
//getBirthyearTest()
generationCheck()

function retall() {
    scenario()
    let a = vb.myObj()
    console.log(a)
}

function main() {
    getAge()
    checkMonthDay()
    generationCheck()
    leapYearCheck()
    shortLongTest()
}
function scenario() {
    // set name and birthday
    vb.setAge(birthday)
    vb.setFullname(first, last)
    vb.setGeneration(vb.getBirthyear())
}
function setNameTest() {
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
function setBirthdayTest() {
    vb.setAge(birthday)
    describe('calculate age from birthday', function () {
        it('calculate birthday', function () {
            age = vb.getAge()
            assert.equal(age, 25, 'checking age')
        })
    })
}

function getBirthyearTest() {
    setBirthdayTest()
    console.log(vb.getBirthyear())
}

function getAgeTest() {
    age = vb.setAge(birthday)
    describe('getAge ', function () {
        it('check year', function () {
            var result = vb.getAge(birthday)
            assert.match(result, /2000/, 'wrong year')
        })
    })
}
function checkMonthDay() {
    // npm test
    var month = '06'
    describe('Testing day value in checkMonthDay', function () {
        it('enter zero for day should fail', function () {
            var result = vb.checkMonthDay(month, 0)
            assert.isFalse(result, 'daily')
        })

        it('enter 32 for day should fail', function () {
            var result = vb.checkMonthDay(month, 32)
            assert.isFalse(result, 'daily')
        })


        it('enter one for day should pass', function () {
            var result = vb.checkMonthDay(month, 1)
            assert.isTrue(result, 'daily')
        })

        it('enter 31 for day should pass', function () {
            var result = vb.checkMonthDay(month, 31)
            assert.isTrue(result, 'daily')
        })

    })

    var day = 14
    describe('Testing month value in checkMonthDay', function () {
        it('enter zero for month should fail', function () {
            var result = vb.checkMonthDay(0, day)
            assert.isFalse(result, 'daily')
        })

        it('enter 13 for month should fail', function () {
            var result = vb.checkMonthDay(13, 20)
            assert.isFalse(result, 'daily')
        })

        it('enter one for month should pass', function () {
            var result = vb.checkMonthDay(1, 1)
            assert.isTrue(result, 'daily')
        })

        it('enter 12 for month should pass', function () {
            var result = vb.checkMonthDay(12, 12)
            assert.isTrue(result, 'daily')
        })
    })
}
function generationCheck() {
    describe('Testing generationCheck', function () {
        var generation = 'Silent Generation'
        var year = 1930
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.setGeneration(year)
            console.log(`>>> ${result}`)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Silent Generation'
        var year = 1944
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.setGeneration(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Baby Boomer'
        var year = 1945
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.setGeneration(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Baby Boomer'
        var year = 1964
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.setGeneration(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Generation X'
        var year = 1965
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.setGeneration(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Generation X'
        var year = 1976
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.setGeneration(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Millenial'
        var year = 1977
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.setGeneration(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Millenial'
        var year = 1995
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.setGeneration(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Generation Z'
        var year = 1996
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.setGeneration(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })
        var generation = 'Generation Z'
        var year = 2020
        it(`Year ${year} should should return ${generation}`, function () {
            var result = vb.setGeneration(year)
            assert.equal(result, generation, `expecting ${generation}`)
        })

    })

}

function done() { }
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
