moment = require('moment')
//moment.suppressDeprecationWarnings = true
exports.setFullname = setFullname
exports.getFullname = getFullname
exports.setAge = setAge
exports.getAge = getAge
exports.getBirthyear = getBirthyear
exports.setGeneration = setGeneration
exports.checkMonthDay = checkMonthDay
exports.longMonth = longMonth
exports.myObj = myObj

var firstname
var lastname
var birthday
var age
var generation
var leapyear
var birthyear
var birthmonth
var dayofweek
var day
var full

function myObj() {
  var obj = {
    firstname: firstname, lastname: lastname, currentAge: age,
    generation: generation, birthmonth: birthmonth, day: day, birthyear: birthyear,
    dayofweek: dayofweek, full: full, leapyear: leapyear,
  }
  return obj
}

function setFullname(first, last) {
  firstname = first
  lastname = last
}

function getFullname() {
  return { firstname: firstname, lastname: lastname }
}

function getAge() {
  return age
}

function getBirthyear() {
  return birthyear
}

function setAge(bday) {
  birthday = new Date(bday)
  age = moment(birthday).fromNow().split(" ")[0]
  birthyear = moment(birthday).format('YYYY')
  birthmonth = moment(birthday).format('MMMM')
  dayofweek = moment(birthday).format('dddd')
  day = moment(birthday).format('DD')
  leapyear = moment(birthday).isLeapYear()
  full = moment(birthday).format('MM-DD-YYYY')
}

function ageEighteen() {
  if ((age == 18 && age_month <= 0 && age_day <= 0) || age < 18) {
  } else {
    alert('You have crossed your 18th birthday !')
  }
}

function setGeneration(year) {
  //  Silent Gen < 1945
  if (year <= 1945) {
    generation = 'Silent Generation'
    return generation
  }
  //  BB 1946-1964
  else if (year <= 1964) {
    generation = 'Baby Boomer'
    return generation
  }
  //  Gen X 1965-1976
  else if (year <= 1976) {
    generation = 'Generation X'
    return generation
  }
  //  Millennial 1977-1995
  else if (year <= 1995) {
    generation = 'Millenial'
    return generation
  }
  //  Gen Z 1996 plus
  else {
    generation = 'Generation Z'
    return generation
  }
}

function checkMonthDay(month, day) {
  return moment(new Date(month + ' ' + day + ' ' + 2001)).isValid()
}

function longMonth(month) {
  if (month < 1 || month > 12) { return undefined }

  if (month == 1 || month == 3 || month == 5
    || month == 7 || month == 8 || month == 10 || month == 12) {
    return true
  }
  // long month is true
  // otherwise false
  return false
}
