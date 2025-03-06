// "For rock, paper, scissor game"

/* Plan is to once game gets opened ask player to pick rock, paper, scissors then computer will pic weather or not the option the player 
picked will beat the one the computer picked
Example: (Player) - picked: Rock (computer) - Picked: Paper computer wins. if the player won or loss if won say "Congrats You Are Winner" 
if lose say "You are Bad You Are Loser" */

const Paper = 1;
const Rock = 2;
const Scissors = 3;
let PlayerChoice = undefined;
let BotChoice = undefined;
let input = undefined;
function Playerinput(){
    input = prompt("Rock, Paper, Scissors");

switch(input){
    case "Rock":
        PlayerChoice = 1;
        Botinput(1)
        break;
    case "Paper":
        PlayerChoice = 2;
        Botinput(2)
        break;
    case "Scissors":
        PlayerChoice = 3;
        Bitinput(3)
        break;
    default:
        Playerinput()
        break;
    }
}
Playerinput()
function botinput(max){
    Botchoice = Math.ceil(Math.random() * max)
    return Botchoice
}
    Playerinput()
    function botinput(max){
    Botchoice = Math.ceil(Math.random() * max)
    return Botchoice   
    if(PlayerChoice == BotChoice){
        console.log(" You just tied with a computer that is sad")
    } else if(PlayerChoice == Rock){
        if (BotChoice == Paper){
            PlayerChoice = PlayerChoice +1;
            console.log("The Bot is dumb and picked Paper so you win")
        } else {
            Botscore = Botscore +1;
            console.log(" You just lost you are loser");
        }
    } 
        if(playerChoice == BotChoice){
        console.log("You just tied with a computer that is sad")
    } else if(PlayerChoice == Paper){
        if (botChoice == Scissors){
            PlayerChoice = PlayerChoice +1;
            console.log("The Bot is dumb and picked Scissors so you win")
        } else {
            Botscore = Botscore +1;
            console.log("You just lost you are loser");
        }
    }
    BotChoice = Math.ceil(Math.random() * max)
    if(PlayerChoice == BotChoice){
        console.log("You just tied with a computer that is sad")
    } else if (PlayerChoice == Scissors){
        if (BotChoice == Paper){
        PlayerChoice = PlayerChoice +1;
        console.log("The Bot is dumb and picked Scissors so you win")
        } else {
        Botscore = Botscore +1;
        console.log("You just lost you are loser");
        }
    }
}    

