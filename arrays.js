var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray() {
  barresDeChocolat = ["Mars",...chocolateBars]
  return barresDeChocolat
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift("Caramilk")
  return chocolateBars
}

function addElementToEndOfArray() {
  chocolateBars.push("Mr Big")
}

function destructivelyAddElementToEndOfArray() {
  chocolateBars = [...chocolateBars, "Crunchy"]
}

function accessElementInArray() {
  return console.log(chocolateBars[3])
}
