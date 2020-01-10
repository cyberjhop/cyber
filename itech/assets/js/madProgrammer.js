const maddProgrammer_submit = document.getElementById("maddProgrammer_submit");
const maddProgrammer_question = document.getElementById("maddProgrammer_question");

const maddProgrammer_submit1 = document.getElementById("maddProgrammer_submit1");
const maddProgrammer_question1 = document.getElementById("maddProgrammer_question1");

function maddProgrammer_checkAnswer(){
    const maddProgrammer_answer = document.getElementById('maddProgrammer_question').value;

    if(maddProgrammer_answer === "System.out.println(\"hello world\");"){
        alert("Your a genieee");
        window.location.href  = "minigames.html#madProgrammer1"
        helloworld();
    }else{
        alert("Your code has error, try again!");
    }
}
function maddProgrammer1_checkAnswer(){
    const maddProgrammer_answer1 = document.getElementById('maddProgrammer_question1').value;
    const maddProgrammer_answer2 = document.getElementById('maddProgrammer_question1.5').value;

    if(maddProgrammer_answer1 === "30iTECH" && maddProgrammer_answer2 === "iTECH1020"){
        alert("I'm going to left coz ur right!");
        window.location.href  = "minigames.html#maddProgrammer2"
    }else{
        alert("String treat numbers as strings but... LOL, try again!!");
    }
}
function maddProgrammer2_checkAnswer(){
    const maddProgrammer_answer2 = document.getElementById('maddProgrammer_question2').value;

    if(maddProgrammer_answer2 === "}"){
        alert("Well done?! That's all for now!");
        window.location.href  = "minigames.html"
    }else{
        alert("Are you blind???");
    }
}
function helloworld(){
	var audio = new Audio('audio/hello_world.mp3');
    audio.play();
  }