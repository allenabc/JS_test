exports.getAge = getAge
exports.generationCheck = generationCheck
exports.decodeDateString = decodeDateString
exports.isValidDate = isValidDate
exports.leapYearCheck = leapYearCheck
exports.checkMonthValue = checkMonthValue

function getAge(birth) {
  var today = new Date()
  var nowyear = today.getFullYear()
  var nowmonth = today.getMonth()
  var nowday = today.getDate()

  var birthyear = birth.getFullYear()
  var birthmonth = birth.getMonth()
  var birthday = birth.getDate()

  var age = nowyear - birthyear
  var age_month = nowmonth - birthmonth
  var age_day = nowday - birthday

  if (age_month < 0 || (age_month == 0 && age_day < 0)) {
    age = parseInt(age) - 1
  }
  alert(age)

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

function isValidDate(month) {
  if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
    msg = 'Month ' + month + " doesn't have 31 days!"
    return msg
  }
}

function leapYearCheck(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
}

function decodeDateString(dateString) {
  var matchDate = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/
  var decode = dateString.match(matchDate)
  console.log(decode)
  if (decode) {
    obj1 = { month: decode[1], day: decode[3], year: decode[4] }
    console.log(obj1)
    return obj1
  }
  return false
}

function checkMonthValue(day, month) {

  if (day < 1 || day > 31)       {
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

//testDecode()
var result
function fnext(dateString) {
  result = decodeDateString(dateString)
  if (result) {
  }
}

var myDate = '13/14/1924'

const getName = () => {
  return 'Jim'
}

//testGenerations()

//result=decodeDateString(myDate)

//console.log(result)
//var t = checkMonthValue(result.day,result.month)
//console.log(t)
//var status
//if(result.month === 2) { status=februaryLeapyearCheck(result.day,result.year) }

//  user claims his birthday is on a certain data
//  after checking the data find his age
//  find if person is millenial, baby boomer, genY
//
//  Gen Z 1996 plus
//  Millennial 1977-1995
//  Gen X 1965-1976
//  BB 1946-1964
//  Silent Gen < 1945
//
