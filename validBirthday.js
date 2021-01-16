exports.getAge = getAge
exports.generationCheck = generationCheck
exports.leapYearCheck = leapYearCheck
exports.decodeDateString = decodeDateString
exports.checkMonthDay = checkMonthDay
exports.longMonth = longMonth

function getAge(birth) {
  var today = new Date()
  var nowyear = today.getFullYear()
  var nowmonth = today.getMonth()
  var nowday = today.getDate()

  //var birthyear = birth.getFullYear()
  by=new Date(1949,07,12)
  return by.getFullYear()
  var birthmonth = birth.getMonth()
  var birthday = birth.getDate()

  var age = nowyear - birthyear
  var age_month = nowmonth - birthmonth
  var age_day = nowday - birthday

  if (age_month < 0 || (age_month == 0 && age_day < 0)) {
    age = parseInt(age) - 1
  }
  alert(age)

}
function ageEighteen() {
  if ((age == 18 && age_month <= 0 && age_day <= 0) || age < 18) {
  } else {
    alert('You have crossed your 18th birthday !')
  }
}

function generationCheck(year) {
  //  Silent Gen < 1945
  if (year <= 1945) {
    return 'Silent Generation'
  }
  //  BB 1946-1964
  else if (year <= 1964) {
    return 'Baby Boomer'
  }
  //  Gen X 1965-1976
  else if (year <= 1976) {
    return 'Generation X'
  }
  //  Millennial 1977-1995
  else if (year <= 1995) {
    return 'Millenial'
  }
  //  Gen Z 1996 plus
  else {
    return 'Generation Z'
  }
}

function leapYearCheck(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
}

function decodeDateString(dateString) {
  var matchDate = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/
  var decode = dateString.match(matchDate)
  if (decode) {
    return { month: decode[1], day: decode[3], year: decode[4] }
  }
  return false
}

function checkMonthDay(day, month) {

  if (day < 1 || day > 31) {
    // `Day ${day} must be between 1 and 31.`
    return false
  }

  if (month < 1 || month > 12) {
    // check month range
    //`Month ${month} must be between 1 and 12.`
    return false
  }

  return true
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

//  user claims his birthday is on a certain data
//  after checking the data find his age
//  find if person is millenial, baby boomer, genY
//
