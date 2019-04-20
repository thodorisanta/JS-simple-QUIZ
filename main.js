window.onload = function(){
  let questionsArr = [
    {
      question: "Which planet is the closest to Earth?",
      answerA: "Venus",
      answerB: "Earth",
      answerC: "Mars",
      answerD: "Jupiter",
      correctAnswer: "answerA" //correctAnswer needs to have the same value as the id
    },
    {
      question: "Which Roman emperor supposedly fiddled while Rome burned?",
      answerA: "Augustus",
      answerB: "Nero",
      answerC: "Caligula",
      answerD: "Titus",
      correctAnswer: "answerB"
    },
    {
      question: "According to the old proverb, to which European capital city do all roads lead?",
      answerA: "Paris",
      answerB: "Athens",
      answerC: "Rome",
      answerD: "Constantinople",
      correctAnswer: "answerC"
    },
    {
      question: "On which mountain did Moses receive the Ten Commandments?",
      answerA: "Serbal",
      answerB: "Bggir",
      answerC: "Catherine",
      answerD: "Mount Sinai",
      correctAnswer: "answerD"
    },
    {
      question: "Which is the tallest mammal?",
      answerA: "The giraffe",
      answerB: "Zebra",
      answerC: "Reindeer",
      answerD: "African Elephant",
      correctAnswer: "answerA"
    },
    {
      question: "What is the name of the fairy in Peter Pan?",
      answerA: "Snow White",
      answerB: "Tinkerbell",
      answerC: "Elsa",
      answerD: "Ariel",
      correctAnswer: "answerB"
    },
    {
      question: "How many strings does a violin have?",
      answerA: "6",
      answerB: "5",
      answerC: "3",
      answerD: "4",
      correctAnswer: "answerD"
    },
    {
      question: "What color is the circle on the Japanese national flag?",
      answerA: "Orange",
      answerB: "White",
      answerC: "Red",
      answerD: "Blue",
      correctAnswer: "answerC"
    },
    {
      question: "What is the chemical symbol for Hydrogen?",
      answerA: "A",
      answerB: "H",
      answerC: "O",
      answerD: "Z",
      correctAnswer: "answerB"
    },
    {
      question: "What is the name of the city where the cartoon family The Simpsons live?",
      answerA: "Springfield",
      answerB: "Quahog",
      answerC: "Tazmania",
      answerD: "Cleveland",
      correctAnswer: "answerA"
    }
  ]

  let question = document.getElementById("question");
  let answerA = document.getElementById("answerA");
  let answerB = document.getElementById("answerB");
  let answerC = document.getElementById("answerC");
  let answerD = document.getElementById("answerD");

  let random = Math.floor(Math.random()*questionsArr.length);

  question.innerHTML = questionsArr[random].question;
  answerA.innerHTML = questionsArr[random].answerA;
  answerB.innerHTML = questionsArr[random].answerB;
  answerC.innerHTML = questionsArr[random].answerC;
  answerD.innerHTML = questionsArr[random].answerD;

  let score = 0; //correct answers.

  let answersArray = document.querySelectorAll(".answerBox");
  answersArray.forEach(function(answer) {
    answer.addEventListener("click", function(e) {
    let answerText = e.target.children[e.target.children.length - 1].id;
      let timer = 0;
      let colors = ["green", "red"];
      let num = 0;
      
      //change between colors.
      answer.style.backgroundColor = 'green';
      let suspense = setInterval(function(){
        answer.style.backgroundColor = colors[num];
        num == 1 ? num-- : num++; //change value of x between 0 and 1
        
        timer++;
        if(timer == 8){
          clearInterval(suspense);
          if (answerText === questionsArr[random].correctAnswer) {
            score++;
            answer.style.backgroundColor = 'green';
            document.getElementById("message").innerHTML = "CORRECT!!"
          }
          else{
            answer.style.backgroundColor = 'red';
            document.getElementById("message").innerHTML = "WRONG!"
          }
        }
      }, 300);
      
      
      setTimeout(function () {
        answer.style.backgroundColor = '#ccc333';//change the color of the answer box back to normal
        nextQuestion();
      }, 6000); // When setInterval ends run this
      
    });
  });
  
  
  let questionNum = 1;
  function nextQuestion(){
    document.getElementById("message").innerHTML = "";
    if(questionNum < 10){
      questionNum++;
      document.getElementById("questionsNum").innerHTML = questionNum + "/10";
    }
    
    questionsArr.splice(random, 1);
    if(questionsArr.length <= 0){
      document.getElementById("questionsBox").style.display = "none";
      document.getElementById("answersBox").style.display = "none";
      document.getElementById("scoreMessage").style.display = "block";
      document.getElementById("retry").style.display = "block";
      if(score >= 6){
         document.getElementById("scoreMessage").innerHTML = "Congradulations, you answered " + score + " questions correctly!";
       }
      else{
        document.getElementById("scoreMessage").innerHTML = "You answered " + score + " questions correctly! I think you need to try again.. :/"
      }
    }
    else{
      random = Math.floor(Math.random()*questionsArr.length);
      question.innerHTML = questionsArr[random].question;
      answerA.innerHTML = questionsArr[random].answerA;
      answerB.innerHTML = questionsArr[random].answerB;
      answerC.innerHTML = questionsArr[random].answerC;
      answerD.innerHTML = questionsArr[random].answerD; 
    }
  }
  
  
  document.getElementById("retry").addEventListener("click", function(){
    javascript:history.go(0); //refresh page.
  });

}
