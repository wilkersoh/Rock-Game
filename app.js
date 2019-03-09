let userScore = 0
let compScore = 0;
const userScoreSpan = document.getElementById('user-score');
const comScoreSpan = document.getElementById('computer-score');
const scoreDiv = document.querySelector('.score-board');
const result_P = document.querySelector('.result > p')
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');

function getCompChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

const covertToWord = letter => {
    if(letter === 'r') return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

const win = (userChoice, compChoice) => {
    const smallUserword = "user".fontsize(3).sup();
    const smallCompword = "comp".fontsize(3).sup();
    const user = document.getElementById(userChoice);
    userScore++;
    userScoreSpan.innerHTML = userScore;
    comScoreSpan.innerHTML = compScore;
    result_P.innerHTML = `${covertToWord(userChoice)}${smallUserword} beats ${covertToWord(compChoice)}${smallCompword}. You Win💥`;

    user.classList.add('green-glow')
    setTimeout(() => {
        user.classList.remove('green-glow');
    }, 500)
}

const lose = (userChoice, compChoice) => {
    const smallUserword = "user".fontsize(3).sup();
    const smallCompword = "comp".fontsize(3).sup();
    const user = document.getElementById(userChoice);
    compScore++;
    userScoreSpan.innerHTML = userScore;
    comScoreSpan.innerHTML = compScore;
    result_P.innerHTML = `${covertToWord(userChoice)}${smallUserword} loses to ${covertToWord(compChoice)}${smallCompword}. You lost..🙈`;

    user.classList.add('red-glow')
    setTimeout(() => {
        user.classList.remove('red-glow');
    }, 500)
};

const draw = (userChoice, compChoice) => {

    const smallUserword = "user".fontsize(3).sup();
    const smallCompword = "comp".fontsize(3).sup();
    const user = document.getElementById(userChoice);
    result_P.innerHTML = `${covertToWord(userChoice)}${smallUserword} draw ${covertToWord(compChoice)}${smallCompword}. Draw Round😛`;

    document.getElementById(userChoice).classList.add('grey-glow')

    user.classList.add('grey-glow')
    setTimeout(() => {
        user.classList.remove('grey-glow');
    }, 500)
}


function rule(userChoice){

    const compChoice = getCompChoice();
 
    //userChoice = r p s || compChoice = r p s
    switch( userChoice + compChoice){

        case "rs":
        case "pr":
        case "sp":
        win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, compChoice);
            break;
    }
}


function main(){

    rockDiv.addEventListener('click', (e) => {
        rule('r');
    })
    
    paperDiv.addEventListener('click', (e) => {
        rule('p')
    })
    
    scissorsDiv.addEventListener('click', (e) => {
        rule('s')
    })

}


main();
