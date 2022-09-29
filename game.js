/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Rock-Paper bla game////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

let myChoiseNum;
let compChoiseNum;
let result;
const choiseWords = ["Rock", "Paper", "Scissors", "Lizard", "Spawk"];
let i=0;
let Rock = document.getElementById('Rock');
let Paper = document.getElementById('Paper');
let Scissors = document.getElementById('Scissors');
let Lizard = document.getElementById('Lizard');
let Spawk = document.getElementById('Spawk');


//To detect my choise
Rock.addEventListener('click', () => {myChoiseNum = 0; changeColor(myChoiseNum);})
Paper.addEventListener('click', () => {myChoiseNum = 1; changeColor(myChoiseNum);})
Scissors.addEventListener('click', () => {myChoiseNum = 2; changeColor(myChoiseNum);})
Lizard.addEventListener('click', () => {myChoiseNum = 3; changeColor(myChoiseNum);})
Spawk.addEventListener('click', () => {myChoiseNum = 4; changeColor(myChoiseNum);})

//background color on click (Shows user his selection) [This is not needed for mobile application]
function changeColor(a){
    // let color[myChoiseNum] = {Rock.style.backgroundColor = "palevioletred", } 
    // if(a == 0){Rock.style.backgroundColor = "palevioletred";}
    // else if(a == 1){Paper.style.backgroundColor = "palevioletred";}
    // else if(a == 2){Scissors.style.backgroundColor = "palevioletred";}
    // else if(a == 3){Lizard.style.backgroundColor = "palevioletred";}
    // else if(a == 4){Spawk.style.backgroundColor = "palevioletred";}  
}

//exexcute game() whenever any button is clicked
let button = document.querySelectorAll('.myChoise button');
for(i=0; i<button.length; i++){
button[i].addEventListener('click', game);
}

function game() { //generates opp choise and check result
    compChoiseNum = Math.floor(Math.random()*5); 
    document.getElementById('choise').innerHTML = choiseWords[compChoiseNum]; //replace space with compChoise


    if(myChoiseNum==compChoiseNum){
        result = "You tied! Try again.";
    }
    else if((myChoiseNum==0 && (compChoiseNum==2 || compChoiseNum==3)) || 
            (myChoiseNum==1 && (compChoiseNum==0 || compChoiseNum==4)) || 
            (myChoiseNum==2 && (compChoiseNum==1 || compChoiseNum==3)) || 
            (myChoiseNum==3 && (compChoiseNum==1|| compChoiseNum==4)) || 
            (myChoiseNum==4 && (compChoiseNum==0 || compChoiseNum==2)))
    {
        result = "Yay!! You won!";
        new Audio('Yay.mp3').play();
    }
    else{
        result = "Oh no! You lost!";
    }

    document.getElementById('result').innerHTML = result;
}


//diaplying rules image only on click
function rulesimg(){  
    document.getElementById('rulesimg').style.display =  "block"; 
    document.getElementById('game1').style.height = "auto"; 
    document.getElementById('game2').style.height = "auto";
    if(i%2 == 0){
        document.getElementById('rulesimg').style.display =  "none";
    }
    i++;
}

/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////FLip a Coin////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
let coin = document.getElementById('coin');
let emoji = document.getElementById('emoji');

function flip(){
    // coin.style.transform = "rotate3d(1, 0, 0, 920deg)";
    let flipResult = Math.floor(Math.random()*2 + 1);

    coin.classList.remove('animate');
	setTimeout(function(){ //adding only for 10ms 
		coin.classList.add('animate');
	}, 10); //10milliseconds

    setTimeout(function(){
        if(flipResult == 1){
        emoji.innerText = "😀 Won!";
        new Audio('Yay.mp3').play();
        }
        else{
            emoji.innerText = "😔 Lost";
        }
        }, 2000);
}

/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Dinner Spinner////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

function spinfunction(){


	var x = 1024; //min value
	var y = 9999; // max value

	var deg = Math.floor(Math.random() * y) ;

	document.getElementById('box').style.transform = "rotate("+deg+"deg)";

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
	}, 1000); //1000 = 1 second
}
