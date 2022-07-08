//palindrome algorithm

let letters = []

let word = "racecar"
let rword=""

//put letters of word into stack
for(let i = 0; i < word.length; i++ ){
    let letter = word[i];
    letters.push(letter);
    console.log(letters)
}
//pop off the stack in reverse order
for(let i = 0; i < word.length; i++){
    rword += letters.pop()
    console.log(rword)
}
 
if ( word === rword ){
    console.log("it is a palendrome")
} else {
    console.log("it is not a palindrome")
    
}

console.log(word)
console.log(rword)