var assert = require('chai').assert
var expect = require('chai').expect
var should = require('chai').should()
const vb = require('../validBirthday');

var day
var month
describe('checkMonthValue checks if day is 1-31 and month is 1-12', function() {

day=1
month=1
  it(`checka if day ${day} is valid for a month ${month}`,function()  {
    assert.strictEqual(vb.checkMonthValue(day,month),true,`Doesnt work with day as ${day} or month as ${month} `)
  })

day=31
month=1
  it(`checkb if day ${day} is valid for a month ${month}`,function() {
    assert.strictEqual(vb.checkMonthValue(day,month),true,`Doesnt work with day as ${day} or month as ${month} `)
  })

day=1
month=12
  it(`checkc if day ${day} is valid for a month ${month}`,function()  {
    assert.strictEqual(vb.checkMonthValue(day,month),true,`Doesnt work with day as ${day} or month as ${month} `)
  })


db.get(1234, function (err, doc) {
  // we expect error to not exist
  // we expect doc to exist and be an object
});

var should = require('chai').should();
db.get(1234, function (err, doc) {
  should.not.exist(err);
  should.exist(doc);
  doc.should.be.an('object');
});



/*`
function testDecode() {
  var x = [ `05-28-1955`, '07/09/1930', '1-28-1955', '13/12/1924', '05/08/1943', `07/30/2017` ]
  x.forEach(function (val) {
    let result = decodeDateString(val)
    console.log(`the number -${val}-`)
    console.log(result)
    console.log("===============")
  })
}
*/

/*
 *
 *
 function testGenerations() {
        object = {
                2000: 'Generation Z',
                1977: 'Millenial',
                1968: 'Generation X',
                1950: 'Baby Boomer',
                1930: 'Silent Generation'
              }
        console.log(object)

        for (const property in object) {
                let val=generationCheck(property)
                //console.log(val)
                console.log(`asked for ${property} got ${val} expecting ${object[property]}`)
                //console.log(`${property}: ${object[property]}`);
              }
}

*/
