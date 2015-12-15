document.getElementById("reset").style.display = "none";
document.getElementById("openSafe").style.display = "none";
window.alert("don't click any buttons until told to do so. Open the console. Keep your eyes open for clues. Click OK. :)");
var woodChuck = "Just as much wood as a wood chuck could if a woodChuck could chuck wood. (Write the answer for number 1) But, I think it's 24. What next? Ask woodChuckette.";
var woodChuckette = "Can you make the background of 4 orange instead of yellow? (Enter your code for number 2) Then talk to my kid, chuckieJr.";
var chuckieJr = "Hi folks! Congratulations for making it this far! For number 3 you should calculate the following problem. 31*(247/10). After you record your answer, ask for a joke. I can chuck 31.";
var joke = "Pete and Repeat sat on a fence. Pete fell off and who was left?";
var Repeat = "OK. Pete and Repeat sat on a fence. Pete fell off and who was left? We can keep going if you want, or you can enter the answer to the riddle in 4 and then click the button on the left to find out what you are worth.";
console.log("Congratulations! You found the console!");
console.log("Your first task is to answer this riddle!");
console.log("How much wood could a woodChuck chuck if a woodChuck could chuck wood?");
console.log("Ask woodChuck. Then scroll to the right to make sure you see the whole message.");
console.log("Still need help? Use the help button.");

function help() {
    console.log("Perhaps the contents of the variable woodChuck might be helpful?");
    document.getElementById("help").style.display = "none";
}

var part1 = "For God so loved";
var part2 = "that He gave His only begotten Son, that";
var part3 = "believes in Him";
var part4 = "would not perish";
var part5 = "have everlasting life";
var Message;
function worth() {
    var myName = prompt("Please enter your name");
    Message = part1 + " " + myName + " " + part2 + " if " + myName + " " + part3 + " " + myName + " " + part4 +" but "+ part5;
    console.log("Be sure to pick up your secretMessage().");
    document.getElementById("worth").style.display = "none";
    document.getElementById("reset").style.display = "inline";
    document.getElementById("openSafe").style.display = "inline";
};
function reset() {
    secretCode = "";
};
function openSafe() {
    if (secretCode === "2431") {
        window.alert("Good job! You have successfully completed the quiz. Answer to number 6 is Green Enchiladas. Please enter the answer and then submit it now.");
    }
};
function secretMessage() {
    console.log(Message);
    console.log("Make sure to enter the message in number 5");
    window.alert("Congratulations on making it this far. Now we are going to see if you have what it takes to crack the code. The clue is: Father and son stand side by side in chucking wood. Press the boxes in the order according to the clues you have been given.")

};
var secretCode = "";