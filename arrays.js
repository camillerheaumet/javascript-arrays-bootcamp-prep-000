var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray() {
  return ["foo",...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars = ["foo",...chocolateBars]
  return chocolateBars
}

function addElementToEndOfArray() {
  chocolateBars.push("foo")
}

function destructivelyAddElementToEndOfArray() {
  chocolateBars = [...chocolateBars, "foo"]
}