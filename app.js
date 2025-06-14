let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",choiceId);
        playGame(userChoice);
    })
})

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        console.log("you win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScorePara.innerText=userScore;
    }else{
        compScore++;
        console.log("you lose");
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScorePara.innerText=compScore;
    }
}

const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game was Draw. Play Again.";
    msg.style.backgroundColor="grey";
}
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin=(compChoice==="scissors"? true:false);
           //console.log("1");
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin=(compChoice==="scissors" ? true:false);
            //console.log("2");
        }else{
            //rock,paper
            userWin=(compChoice==="paper" ? true:false);
            //console.log("3");
        }
        //console.log(userWin);
        showWinner(userWin,userChoice,compChoice);
    }

}

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random() *3);
    return options[randomIndex];
}