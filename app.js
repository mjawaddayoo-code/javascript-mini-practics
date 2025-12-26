// BULB
function trunOnBulb() {
    document.getElementById("bulb").src = "https://www.w3schools.com/js/pic_bulbon.gif";
    document.getElementById("sts").innerText = "ON";
}

function trunOffBulb() {
    document.getElementById("bulb").src = "https://www.w3schools.com/js/pic_bulboff.gif";
    document.getElementById("sts").innerText = "OFF";
}

// Rolling Dice
let diceNum = null;  
function rollDice(){
    document.getElementById("diceNo").innerText = "-";
    document.getElementById("dice").src = "rolling.webp";
    setTimeout(() =>{
        diceNum = Math.trunc(Math.random()* 6) + 1;
        document.getElementById("dice").src =`${diceNum}.png`;
        document.getElementById("diceNo").innerText =diceNum;
    }, 1000)
}

// strong Password Generator 
      const characters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "#",
        "$",
        "@",
        "&",
        "(",
        ")",
      ];
      let randomNum = null;
      var strongPassword = "";
      function generateMyStrongPassword(event) {
        event.preventDefault();
        strongPassword = "";
        let passLength = document.getElementById("passLength").value;
        for (let i = 1; i <= passLength; i++) {
          randomNum = Math.trunc(Math.random() * characters.length);
          strongPassword += characters[randomNum];
        }
        document.getElementById("generated_password").innerText = strongPassword;
      }
