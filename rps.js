// "For rock, paper, scissor game"

/* Plan is to once game gets opened ask player to pick rock, paper, scissors then computer will pic weather or not the option the player 
picked will beat the one the computer picked
Example: (Player) - picked: Rock (computer) - Picked: Paper computer wins. if the player won or loss if won say "Congrats You Are Winner" 
if lose say "You are Bad You Are Loser" */

const Paper = 1;
const Rock = 2;
const Scissors = 3;
let Playerscore = 0;
let Botscore = 0;
let PlayerChoice = undefined;
let BotChoice = undefined;
let input = undefined;

function Playerinput(){
    input = prompt("Rock, Paper, Scissors").toLowerCase();
    switch(input){
        case "rock":
            PlayerChoice = 1;
            break;
        case "paper":
            PlayerChoice = 2;
            break;
        case "scissors":
            PlayerChoice = 3;
            break;
        default:
            Playerinput()
            break;
        }
}



function botinput(max){
    PlayerChoice = Playerinput()
    Botchoice = Math.ceil(Math.random() * max) 
    console.log(PlayerChoice, BotChoice)  
    if(PlayerChoice == BotChoice){
        console.log("You just tied with a computer that is sad")
    } else if(PlayerChoice == Rock){
        if (BotChoice == Scissors){
            Playerscore = Playerscore +1;
            console.log("The Bot is dumb and picked Paper so you win")
        } else {
            Botscore = Botscore +1;
            console.log(" You just lost you are loser");
        }
    } 
     else if(PlayerChoice == Paper){
        if (BotChoice == Rock){
            Playerscore = Playerscore +1;
            console.log("The Bot is dumb and picked Scissors so you win")
        } else {
            Botscore = Botscore +1;
            console.log("You just lost you are loser");
        }
    }
     else if (PlayerChoice == Scissors){
        if (BotChoice == Paper){
        Playerscore = Playerscore +1;
        console.log("The Bot is dumb and picked Scissors so you win")
        } else {
        Botscore = Botscore +1;
        console.log("You just lost you are loser");
        }
    } console.log(`Playerscore is ${Playerscore}`);
    console.log(`Botscore is ${Botscore}`);
}    

while (Playerscore < 5 && Botscore < 5){
    botinput(3);
}
