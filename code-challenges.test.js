// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest




// describe(" ", () => {
//     it(" ", () => {
//       expect( ).toEqual()
//     })
//   })


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

//I will name my funciton secretCoder

describe("secretCoder", () => {
    const secretCodeWord1 = "Lackadaisical"
  // Expected output: "L4ck4d41s1c4l"
  const secretCodeWord2 = "Gobbledygook"
  // Expected output: "G0bbl3dyg00k"
  const secretCodeWord3 = "Eccentric"
  // Expected output: "3cc3ntr1c"
    it("takes in a string and returns a coded message", () => {
      expect(secretCoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(secretCoder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(secretCoder(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })




// b) Create the function that makes the test pass.

//first I will create a function that takes in a string
// it will take the string and change the listed letters above to the numbers listed
//I will change the string into an array so that I can iterate over each letter 
// I will also need to make sure all the letters are lowercase 
// I will create an array that holds the string that is all lowercase
// as I iterate over the array I will change the letters to the numbers
//My funciton will then return a new array 
//I will then change the array back into a string 
//I attempted to refactor with ternary operators to cut down on the amount of code but didn't have much luck. 
// I also tried to use only one .toLowerCase method to blanket all the strings but realized it doesn't work when returning the string (haha) so I put them in each conditional statement.

const secretCoder = (string) =>{
    let arrOne = string.split("")
    arrTwo = arrOne.map((value, index) => {
    if(value.toLowerCase() === "a"){
        return 4
    }
    else if(value.toLowerCase() === "e"){
        return 3
    }
        else if(value.toLowerCase() == "i"){
            return 1
        }  
            else if(value.toLowerCase() == "o"){
                return 0
            }  
            return value
            
            })
            return arrTwo.join("")
            }





// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

//My function is going to be named extractor

describe("extractor", () => {
const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]
it("takes in an array of words and a single letter and returns all the words that contain that particular letter ", () => {
  expect(extractor(arrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
  expect(extractor(arrayOfWords2,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
})
})

// b) Create the function that makes the test pass.






// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false



// b) Create the function that makes the test pass.
