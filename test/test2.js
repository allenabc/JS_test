const assert = require('chai').assert
const vb = require('../validBirthday')

//checkMonthValue()
//generationCheck()
//leapYearCheck()
decodeDateString()


function checkMonthValue() {
    // npm test
    var month = 6
    describe('Testing day value in checkMonthValue', function () {
        it('enter zero for day should fail', function () {
            var result = vb.checkMonthValue(0, month)
            assert.isFalse(result, 'daily')
        })

        it('enter 32 for day should fail', function () {
            var result = vb.checkMonthValue(32, month)
            assert.isFalse(result, 'daily')
        })

        it('enter one for day should pass', function () {
            var result = vb.checkMonthValue(1, month)
            assert.isTrue(result, 'daily')
        })

        it('enter 31 for day should pass', function () {
            var result = vb.checkMonthValue(31, month)
            assert.isTrue(result, 'daily')
        })
    })

    var day = 14
    describe('Testing month value in checkMonthValue', function () {
        it('enter zero for month should fail', function () {
            var result = vb.checkMonthValue(day, 0)
            assert.isFalse(result, 'daily')
        })

        it('enter 13 for month should fail', function () {
            var result = vb.checkMonthValue(day, 13)
            assert.isFalse(result, 'daily')
        })

        it('enter one for month should pass', function () {
            var result = vb.checkMonthValue(day, 1)
            assert.isTrue(result, 'daily')
        })

        it('enter 12 for month should pass', function () {
            var result = vb.checkMonthValue(day, 12)
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

function decodeDateString (){
	var dateString='07/12/1949'
	dateString='07-12-1949'
	describe('Testing decode', function () {
            it(`${dateString} to decode `, function () {
                dateObj=vb.decodeDateString(dateString)
		let day=dateObj.day
		let month=dateObj.month
		let year=dateObj.year
                assert.equal(day,12,'should match day')
                assert.equal(month,07,'should match month')
                assert.equal(year,year,'should match year')
	    })})}
