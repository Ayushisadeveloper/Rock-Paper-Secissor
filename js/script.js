//code for swithing mode.
let newmode = document.querySelector(".mode");

let mode = "light";

newmode.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        document.querySelector(".display").style.color = "white";
    }
    else {
        mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
    }

})

let uscore = 0;
let cscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#res");
const userscore = document.querySelector("#you-count");
const compscore = document.querySelector("#comp-count");

const draw = () => {
    msg.innerHTML = "Game was Draw";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranop = Math.floor(Math.random() * 3);
    return options[ranop];
}

const showres = (userwin) => {
    if (userwin) {
        uscore++;
        userscore.innerText = uscore;
        msg.innerHTML = "You Win";
        msg.style.backgroundColor = "green";
    }
    else {
        cscore++;
        compscore.innerText = cscore;
        msg.innerHTML = "You Lose";
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    if (userchoice === compchoice) {
        draw();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true
        }
        else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true
        }
        else {
            userwin = compchoice === "rock" ? false : true
        }
        showres(userwin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})