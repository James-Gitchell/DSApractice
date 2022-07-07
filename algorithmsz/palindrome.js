//palindrome algorithm

let letters = []

let word = "racecar"
let rword=""

for(let i = 0; i < word.length; i++ ){
    let letter = word[i];
    letters.push(letter);
    console.log(letters)
}
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