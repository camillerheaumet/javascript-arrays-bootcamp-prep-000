var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray() {
  return ["Mars",...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars = ["Caramilk",...chocolateBars]
  return chocolateBars
}

function addElementToEndOfArray() {
  chocolateBars.push("Mr Big")
}

function destructivelyAddElementToEndOfArray() {
  chocolateBars = [...chocolateBars, "Crunchy"]
}