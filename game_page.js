var player1name=localStorage.getItem("player1namekey");
var player2name=localStorage.getItem("player2namekey");
var player1score=0;
var player2score=0;
var questionturn="player1";
var answerturn="player2";

document.getElementById("player1name").innerHTML=player1name+": ";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2name").innerHTML=player2name+": ";
document.getElementById("player2score").innerHTML=player2score;

function send(){

document.getElementById("questionturnplayer").innerHTML="Turn to Question : "+player1name;
document.getElementById("answerturnplayer").innerHTML="Turn to Answer : "+player2name;

var questionword=document.getElementById("questionword").value;
console.log(questionword);

var secondletter=questionword.charAt(1)
console.log(secondletter);

var getmiddle=Math.floor(questionword.length/2);
var middleletter=questionword.charAt(getmiddle);
console.log(middleletter);

var getend=questionword.length;
var lastletter=questionword.charAt(5);

var remove1=questionword.replace(secondletter,"_");
var remove2=remove1.replace(middleletter,"_");
var remove3=remove2.replace(lastletter,"_");
 
var question_word = "<h4 id='word_display'> Q. "+remove3+"</h4>";
var textinput='<br><input type="text" id="answerinput" placeholder="Enter answer here">';
var check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

var merge=question_word+textinput+check_button;
document.getElementById("output").innerHTML=merge;
document.getElementById("questionword").innerHTML="";}

function check(){
var answer=document.getElementById("answerinput").value;
console.log(answer);

if(questionturn=="player1"){
    questionturn="player2";
    document.getElementById("questionturnplayer").innerHTML=player2name;
}


if(questionturn=="player2"){
    questionturn="player1";
    document.getElementById("questionturnplayer").innerHTML=player1name;
}


if(answerturn=="player1"){
    answerturn="player2";
    document.getElementById("answerturnplayer").innerHTML=player2name;
}


if(answerturn=="player2"){
    answerturn="player1";
    document.getElementById("answerturnplayer").innerHTML=player1name;
}


if(questionword==answer){

    if(answerturn=="player1"){
      player1score=player1score+1;
        document.getElementById("player1score").innerHTML=player1score;
    }

    if(answerturn=="player2"){
        player2score=player2score+1;
        document.getElementById("player2score").innerHTML=player2score;
    }
}
document.getElementById("output").innerHTML="";
}