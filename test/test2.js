const assert = require('chai').assert
const vb = require('../validBirthday')

function driver() {
  var month = 6
  var result = vb.checkMonthValue(0, month)
  assert.equal(result, false, 'daily')
  var result = vb.checkMonthValue(32, month)
  assert.equal(result, false, 'daily')
  for (day = 1; day <= 31; day++) {
    var result = vb.checkMonthValue(day, month)
    assert.equal(result, true, 'daily')
  }
  var day = 15
  var result = vb.checkMonthValue(day, 0)
  assert.equal(result, false, 'daily')
  var result = vb.checkMonthValue(day, 13)
  assert.equal(result, false, 'daily')
  for (month = 1; month < 13; month++) {
    var result = vb.checkMonthValue(day, month)
    assert.equal(result, true, 'monthly')
  }
}

driver()
