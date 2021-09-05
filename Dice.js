function playGame(){
    // for image 1 of dice
    var diceNo =(Math.floor(Math.random()*6)) + 1;
    var diceImg = "dice" + diceNo + ".png";
    var finalImg1 = document.querySelectorAll("img")[0];
    finalImg1.setAttribute("src", diceImg);

    // for image 1 of dice
    var diceNo1 = (Math.floor(Math.random()*6 )) + 1;
    var diceImg1 = "dice" + diceNo1 + ".png";
    var finalImg2 = document.querySelectorAll("img")[1];
    finalImg2.setAttribute("src",diceImg1);

    if(diceNo > diceNo1){
        document.querySelector("h1").innerHTML = "Player 1 WINS!";
    } else if(diceNo1 > diceNo){
        document.querySelector("h1").innerHTML = "Player 2 WINS!"
    } else{
    document.querySelector("h1").innerHTML = "DRAW!"
    }
}

document.querySelector("button").addEventListener("click",playGame);


