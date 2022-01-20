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

//ran test and failed -> function was not defined


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

// const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// const letterA = "a"
// // Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

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

//ran test and failed -> function was not defined

// b) Create the function that makes the test pass.

//First I will need to create a funciton
//the function will take 2 arguments, an array and a letter.
//I will then iterate over the array to find words that contain a specific letter
//I will then return the words containing the specified letter in an array
//I will also need to find a way to make sure that I get both the uppercase and lowercase of the specified letter.

const extractor = (array,letter) => {
    extractdArr = array.filter(value => {
      return value.toLowerCase().includes(letter)
    })
    return extractdArr
    }



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false

// I will name my function fullHouseFinder

describe("fullHouseFinder ", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house” ", () => {
      expect(fullHouseFinder(hand1)).toEqual(true)
      expect(fullHouseFinder(hand2)).toEqual(false)
      expect(fullHouseFinder(hand3)).toEqual(false)
    })
   })

//ran test and failed -> function was not defined

// b) Create the function that makes the test pass.


//first I need to create a funciton that takes in an array 
//it needs to iterate over said array --> after some struggling, I came to terms w/ the fact I didn't need to iterate over the array
//it also needs to determine whether there are 3 of the same values as well as 2 of the same values
//it then needs to return a boolean value -> true/false depending on if the conditions meet the requiments for a full house

const fullHouseFinder = (array) => {
  let  newArr = array.sort()
     if(newArr[0] === newArr[1] && newArr[1] === newArr[2] && newArr[3] === newArr[4] ||
       newArr[0] === newArr[1] && newArr[2] === newArr[3] && newArr[3] === newArr[4])  {
       return true
     }
       else{
       return false
     }
}


//I was struggling with this problem at first because I couldn't visualize the logic, so then I had this idea to be a little extra because I could visualize a class with a method in it that performed the same logic. 
// After creating the class and working on the problem that way, I ended up working out some logic to writte the function as directed. Once I finsihed doing the required function, I went back and finsihed the class with some help from Kirk and Salvador. 
//I decided to add a little more to my class once I finished all of the other parts of the assessment. 



// let jack = 11
// let queen = 12
// let king = 13
// let ace = 14


// class PokerHand {
//   constructor([card1,card2,card3,card4,card5]){
//   this.card1 = card1;
//   this.card2 = card2;
//   this.card3 = card3;
//   this.card4 = card4;
//   this.card5 = card5;
//   this.cardArr = [this.card1, this.card2, this.card3, this.card4, this.card5]
//   }
//   showhand(){
//   return `Your cards are ${this.card1}, ${this.card2}, ${this.card3}, ${this.card4}, ${this.card5}.`
//   }
  
  
//   pair(){
//   this.cardArr.sort()
//   if (this.cardArr[0] === this.cardArr[1] || this.cardArr[0] === this.cardArr[2] || this.card[0] === this.cardArr[3] || this.cardArr[0] === this.cardArr[4]  || //card 0 &1 

//   this.cardArr[1] === this.cardArr[2] || this.cardArr[1] === this.cardArr[3] || this.card[1] === this.cardArr[4] || //card 1

//   this.cardArr[2] === this.cardArr[3] || this.cardArr[2] === this.cardArr[4] || 
//   this.card[3] === this.card[4]) {
//     return "You have a pair."
//   }
//   else{
//     "You do not have a pair."
//   }





//   threeOfAKind() {
//     this.cardArr.sort()
//     if (this.cardArr[0] && this.cardArr[1] === this.cardArr[2] // cards 1&2 =3
//     || this.cardArr[0] && this.cardArr[2] === this.cardArr[3]
//     || this.card[0] && this.card[3] === this.card[4])
//     //cards 1&3 = 4
//       //cards 1 & 4 = 5        ))
//     }


//   straight() {
//     this.cardArr.sort()
//     if(this.cardArr[1] === this.cardArr[0] + 1 && this.cardArr[2] === this.cardArr[1] + 1 && this.cardArr[3] === this.cardArr[2] + 1 && this.cardArr[4] === this.cardArr[3] + 1) {
//       return "You have a straight."
//     }
//     else{
//       return "You don't have a straight."
//     }
//   }


//   fullHouseFinder() {
//     this.cardArr.sort()
//     if(this.cardArr[0] === this.cardArr[1] && this.cardArr[1] === this.cardArr[2] && this.cardArr[3] === this.cardArr[4]
//       || this.cardArr[0] === this.cardArr[1] && this.cardArr[2] === this.cardArr[3] && this.cardArr[4] === this.cardArr[4]){
//       return "You have a full house."
//     }
//     else{
//       return "No full house detected." 
//     }
//   }
// }
  // var hand1 = new PokerHand([5, 5, 5, 3, 3])
  // var hand2 = new PokerHand([5, 5, 3, 3, 4])
  // var hand3 = new PokerHand([5, 5, 5, 5, 4])
  // var hand4 = new PokerHand([4 ,2, 4, 2, 4])
  // var hand5 = new PokerHand([2, 3, 4, 5, 6])
  // var hand6 = new PokerHand([jack, queen, king, ace])
  // var hand7 = new PokerHand([2, 3, 4, 5, 6])
  // var hand8 = new PokerHand([2, 4, 5, 3, 2])
  // console.log(hand1.fullHouseFinder())
  // console.log(hand2.fullHouseFinder())
  // console.log(hand3.fullHouseFinder())
  // console.log(hand1.showhand())
  // console.log(hand4.fullHouseFinder())
  // console.log(hand4.fullHouseFinder())
  // console.log(hand4.straight())
  // console.log(hand5.straight())
  // console.log(hand6.straight())
  // console.log(hand7.straight())
  // console.log(hand1.pair())
  // console.log(hand8.pair())
  // console.log(hand8.fullHouseFinder())
  // console.log(hand1.threeOfAKind())







