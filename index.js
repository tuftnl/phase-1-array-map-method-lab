const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map((row) => { //iterates through each row of text
    let words = row.split(" ") //takes words split by " " and puts into array
    let capitlizeWord = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)
  ) //iterates through the new array and capitlizes by each words character at index 0, and then the rest of the array???
  let newArray = capitlizeWord.join(" ") // joins capitlized array with " " inbetween
  return newArray
  })
}