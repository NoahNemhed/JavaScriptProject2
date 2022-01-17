var proceed = false;
    while(!proceed) 
    {
        tag = prompt("Please enter your name");
        if (typeof(tag) == "string") 
        {
            tag = tag.trim();


            if (tag=="")
            {
                proceed = false;
                alert('Invalid entry.');
            }
            else
            {
              proceed=true;

            }
        }
        if (tag===null)
        {
            proceed = false;
            alert('Please enter your name');
            break;
        }
    }
    if(proceed)
    {
        document.getElementById("player-name").textContent = tag;
    }




const selectionButtons = document.querySelectorAll("[data-selection]");


selectionButtons.forEach(selectionButtons =>  {
    selectionButtons.addEventListener("click", e => {
        const selectionName = selectionButtons.dataset.selection
        playerMove(selectionName)
    }) 


})


function playerMove(input){
    const computerMove = generateComputerMove();
    const playersMove = input;
    whoWins(playersMove, computerMove);
}


function generateComputerMove(){
    const randomNr =  Math.floor(Math.random() * 3) + 1;
    
    switch(randomNr){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissor";
            break;    
    }
}

function whoWins(player,computer){
    let playerScore = parseInt(document.getElementsByClassName("results-score")[0].textContent);
    let computerScore = parseInt(document.getElementsByClassName("results-score")[1].textContent);

    if(player == "rock"){
        if(computer == "rock"){
            appendMove(player,computer)
            document.getElementById("winner").textContent = "Tie"
            document.getElementById("winner").style.display = "block";
        }

        if(computer == "scissor"){
            playerScore++;
            document.getElementsByClassName("results-score")[0].textContent = playerScore;
            appendMove(player,computer)
            document.getElementById("winner").textContent = "Player wins"
            document.getElementById("winner").style.display = "block";
            
        }

        if(computer == "paper"){
            computerScore++;
            document.getElementsByClassName("results-score")[1].textContent = computerScore;
            appendMove(player,computer)
            document.getElementById("winner").textContent = "Computer wins"
            document.getElementById("winner").style.display = "block";
        }

    }

    if(player == "paper"){
        if(computer == "paper"){
            appendMove(player,computer)
            document.getElementById("winner").textContent = "Tie"
            document.getElementById("winner").style.display = "block";
        }

        if(computer == "rock"){
            playerScore++;
            document.getElementsByClassName("results-score")[0].textContent = playerScore;
            appendMove(player,computer)
            document.getElementById("winner").textContent = "Player wins"
            document.getElementById("winner").style.display = "block";
        }

        if(computer == "scissor"){
            computerScore++;
            document.getElementsByClassName("results-score")[1].textContent = computerScore;
            appendMove(player,computer)
            document.getElementById("winner").textContent = "Computer wins"
            document.getElementById("winner").style.display = "block";
        }

    }

    if(player == "scissor"){
        if(computer == "scissor"){
            appendMove(player,computer)
            document.getElementById("winner").textContent = "Tie"
            document.getElementById("winner").style.display = "block";
        }

        if(computer == "paper"){
            playerScore++;
            document.getElementsByClassName("results-score")[0].textContent = playerScore;
            appendMove(player,computer)
            document.getElementById("winner").textContent = "Player wins"
            document.getElementById("winner").style.display = "block";
        }

        if(computer == "paper"){
            computerScore++;
            document.getElementsByClassName("results-score")[1].textContent = computerScore;
            appendMove(player,computer) 
            document.getElementById("winner").textContent = "Computer wins"
            document.getElementById("winner").style.display = "block";
        }

    }

    endGame();

}

function appendMove(player, computer){
    const playersMoveList = document.getElementsByClassName("player-move-list")[0];
    const computerMoveList = document.getElementsByClassName("computer-move-list")[0];

    switch(player){

            case "rock":
                var element = document.createElement("LI")
                var content = document.createTextNode("🪨")
                element.appendChild(content)
                element.style.fontSize = "4rem"
                playersMoveList.appendChild(element)
                break;

            case "paper":
                var element = document.createElement("LI")
                var content = document.createTextNode("📄")
                element.appendChild(content)
                element.style.fontSize = "4rem"
                playersMoveList.appendChild(element)
                break;
                
            case "scissor":
                var element = document.createElement("LI")
                var content = document.createTextNode("✂")
                element.appendChild(content)
                element.style.fontSize = "4rem"
                playersMoveList.appendChild(element)
                break;         
    }

    
    switch(computer){

        case "rock":
            var element2 = document.createElement("LI")
            var content2 = document.createTextNode("🪨")
            element2.appendChild(content2)
            element2.style.fontSize = "4rem"
            computerMoveList.appendChild(element2)
            break;

        case "paper":
            var element2 = document.createElement("LI")
            var content2 = document.createTextNode("📄")
            element2.appendChild(content2)
            element2.style.fontSize = "4rem"
            computerMoveList.appendChild(element2)
            break;
            
        case "scissor":
            var element2 = document.createElement("LI")
            var content2 = document.createTextNode("✂")
            element2.appendChild(content2)
            element2.style.fontSize = "4rem"
            computerMoveList.appendChild(element2)
            break;         
}

}

function endGame(){
    const playerScore = parseInt(document.getElementsByClassName("results-score")[0].textContent);
    const computerScore = parseInt(document.getElementsByClassName("results-score")[1].textContent);
    if(playerScore == 3){
        alert(tag + " " +"won game")  
        if(window.confirm){
            resetGame();
        }     
    }
    if(computerScore == 3){
        alert("Computer won game") 
        if(window.confirm){
            resetGame();
        }  
    }
}


function resetGame(){
    document.getElementsByClassName("results-score")[1].textContent = 0;
    document.getElementsByClassName("results-score")[0].textContent = 0;
    document.getElementById("winner").textContent = "";
    const moves = document.querySelectorAll("LI")
    for(let i = 0; i<moves.length; i++){
        moves[i].remove();
    }
    

}



