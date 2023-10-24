let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox")
let maxGuess; // Declare maxGuess variable
let minGuess; // Declare minGuess variable
let audio=new Audio('/audio/2sec Notification.mp3')

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    // console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}
// init() isko hmne html k onload attribute m de diya hai alg se call krne ki jrurt nhi


const newGameBegin=()=>{
    audio.play()
    window.location.reload();
}

let startGame = () => {
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("welcomeScreen").style.display = "none";
}


const startNewGame = () => {
    document.getElementById("newGameButton").style.display = 'inline'
    userNumberUpdate.setAttribute('disabled', true);
}


// main logic of our app

const compareGuess = () => {

    audio.play()

    const userNumber = Number(document.getElementById('inputBox').value);
    userGuess = [...userGuess, userNumber]

    document.getElementById("guesses").innerHTML = userGuess;

    // check the value low or high
    if (userGuess.length < maxGuess) {


        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "your guess is too high"
            userNumberUpdate.value = ''
        }
        else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "your guess is too low"
            userNumberUpdate.value = ''
        }
        else {
            userGuessUpdate.innerHTML = "it's correct"
            userNumberUpdate.value = ''
            startNewGame()
        }
    }

    else {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `you loose!! correct number was ${computerGuess}`;
            userNumberUpdate.value = ''
            startNewGame()
        }
        else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `you loose!! correct number was ${computerGuess}`;
            userNumberUpdate.value = ''
            startNewGame()
        }
        else {
            userGuessUpdate.innerHTML = "it's correct"
            userNumberUpdate.value = ''
            startNewGame()
        }
    }

    document.getElementById('attempts').innerHTML = userGuess.length;
}

const easyMode = () => {
    maxGuess = 10;
    audio.play()
    startGame();
}
const hardMode = () => {
    maxGuess = 5;
    audio.play()
    startGame();
}
