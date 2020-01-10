// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
var continues = false;
// create our questions
let questions = [
    {
        question : "What does HTML stand for?",
        imgSrc : "img/html.png",
        choiceA : "Hypertext Markup Language",
        choiceB : "Hyperlinks and Text Markup Language",
        choiceC : "Home Tool Markup Language",
        correct : "A"
    },{
        question : "What type of cable is this?",
        imgSrc : "images/coaxial.png",
        choiceA : "Cat6",
        choiceB : "Coaxial",
        choiceC : "Unshielded Twisted Pair",
        correct : "B"
    },{
        question : "The java language initiated called ____ after a ____ ",
        imgSrc : "images/question.png",
        choiceA : "Oak, Tree",
        choiceB : "Java, Machine",
        choiceC : "JAVA[SE], Sun Microsystems",
        correct : "A"
    },{
        question : "What type of network device is this?",
        imgSrc : "images/hub.png",
        choiceA : "Switch",
        choiceB : "Modem",
        choiceC : "Hub",
        correct : "C"
    },{
        question : "What logo is this?",
        imgSrc : "images/java.png",
        choiceA : "JavaScript",
        choiceB : "HTML",
        choiceC : "Java",
        correct : "C"
    },{
        question : "What type of network device is this?",
        imgSrc : "images/switch.png",
        choiceA : "Router",
        choiceB : "Hub",
        choiceC : "switch",
        correct : "C"
    },{
        question : "The first programmer is a woman.",
        imgSrc : "images/girl_programmer.png",
        choiceA : "True",
        choiceB : "False",
        choiceC : "I don't know",
        correct : "A"
    },{
        question : "It is a high-level programming language originally developed by Sun Microsystems.",
        imgSrc : "images/question.png",
        choiceA : "JAVACODE",
        choiceB : "JAVA",
        choiceC : "JAVASCRIPT",
        correct : "B"
    },{
        question : "Who initiated Java?",
        imgSrc : "images/question.png",
        choiceA : "James Babbage",
        choiceB : "James Smith",
        choiceC : "James Gosling",
        correct : "C"
    },{
        question : "What WORA means?",
        imgSrc : "images/question.png",
        choiceA : "Wireless Outgoing, Radio Amplitude",
        choiceB : "Wireless Output, Run Assembly",
        choiceC : "Write once, Run anywhere",
        correct : "C"
    },{
        question : "The file extension of java program is?",
        imgSrc : "images/question.png",
        choiceA : ".js",
        choiceB : ".program",
        choiceC : ".java",
        correct : "C"
    },{
        question : "Which of these is not a java keyword?",
        imgSrc : "images/question.png",
        choiceA : "strictfp",
        choiceB : "native",
        choiceC : "function",
        correct : "C"
    },{
        question : "Which of these is not java primitive data type",
        imgSrc : "images/question.png",
        choiceA : "long",
        choiceB : "char",
        choiceC : "var",
        correct : "C"
    },{
        question : "int a=20; System.out.println(a++);",
        imgSrc : "images/question.png",
        choiceA : "20",
        choiceB : "40",
        choiceC : "60",
        correct : "A"
    },{
        question : "What year is java released?",
        imgSrc : "images/question.png",
        choiceA : "1995",
        choiceB : "1996",
        choiceC : "1997",
        correct : "A"
    },{
        question : "Java is?",
        imgSrc : "images/question.png",
        choiceA : "Object Oriented",
        choiceB : "Platform Dependent",
        choiceC : "Static",
        correct : "A"
    },{
        question : "How many questions are there?",
        imgSrc : "images/OnlyAssuredCoati-max-1mb.gif",
        choiceA : "20",
        choiceB : "15",
        choiceC : "18",
        correct : "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnswer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}
// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>"; 
    if(scorePerCent >=90){
        applause();
    }
    setTimeout(reset, 5000);
}
function reset(){
    window.location.href  = "minigames.html"
}
function applause(){
	var audio = new Audio('audio/applause.mp3');
    audio.play();
  }
















