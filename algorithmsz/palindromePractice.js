let letters= [];
let word = "racecar"
let rword =""

for(let i = 0;i < word.length;i++){
    letters.push(word[i])
    console.log(letters)
}
for(let i = 0; i < word.length; i++){
    rword += letters.pop();
    console.log(rword);
}
if( word === rword ){
    console.log("it is a palindrome")
}else {
    console.log("it is not a palindrome")
}
