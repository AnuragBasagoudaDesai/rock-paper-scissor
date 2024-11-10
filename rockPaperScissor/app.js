let userScore = 0;
let computerScore = 0;
let dramCount = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


let userScorePara = document.querySelector(".user-score");

let computerScorePara = document.querySelector(".computer-score");
let drawCountPara = document.querySelector(".draw-score");
let resetBtn = document.querySelector("#reset");
let finalScore = document.querySelector(".finalisescore");




const getComputerChoice = () => {
    let options = ["rock", "paper", "scissor"];
    let cmpOptions = Math.floor(Math.random() * 3);
    return options[cmpOptions];
}

const showDraw = () => {
    let message = "Game Draw!";
    msg.innerText = message;
    msg.style.backgroundColor = "black";
    dramCount++;
    drawCountPara.innerText = dramCount;
}

const showWinner = (userWin, UserChoice, ComputerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = "player " + UserChoice + " beats " + " computer choice " + ComputerChoice;
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++; let userWin = true;
        computerScorePara.innerText = computerScore;

        msg.innerText = "computer " + ComputerChoice + " beats " + " user choice " + UserChoice;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (UserChoice) => {
    //generate computer choice
    let ComputerChoice = getComputerChoice();

    console.log(UserChoice);
    console.log(ComputerChoice);

    if (ComputerChoice === UserChoice) {
        showDraw();
    }
    else {
        let userWin = true;

        if (UserChoice === "rock") {
            if (ComputerChoice === "paper") {
                userWin = false;
            }
            else {
                userWin = true;
            }
        }
        else if (UserChoice === "scissor") {
            if (ComputerChoice === "rock") {
                userWin = false;
            }
            else {
                userWin = true;
            }
        }
        else {
            if (ComputerChoice === "scissor") {
                userWin = false;
            }
            else {
                userWin = true;
            }
        }
        showWinner(userWin, UserChoice, ComputerChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const UserChoice = choice.getAttribute("id");
        playGame(UserChoice);



    });
});


finalScore.addEventListener("click", () => {
    if (userScore > computerScore) {
        finalScore.innerText = "YOU WIN";

    }
    else if (userScore < computerScore) {
        finalScore.innerText = "better luck try again!";
    }
    else {
        finalScore.innerText = "great match draw!";
    }
    hideSection.classList.add("hide");
   hideSection.classList.add("appear");


});


resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    dramCount = 0;

    computerScorePara.innerText = userScore;
    drawCountPara.innerText = dramCount;
    userScorePara.innerText = computerScore;
    finalScore.innerText = "decision";
    msg.innerText = "Play Your Game";
    msg.style.backgroundColor = "black";

});

