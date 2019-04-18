window.onload = function(){
  let questionsArr = [
    {
      question: "shithole A",
      answerA: "A",
      answerB: "B",
      answerC: "C",
      answerD: "D",
      correctAnswer: "answerA" //correctAnswer needs to have the same value as the id
    },
    {
      question: "shithole B",
      answerA: "A",
      answerB: "B",
      answerC: "C",
      answerD: "D",
      correctAnswer: "answerB"
    },
    {
      question: "shithole C",
      answerA: "A",
      answerB: "B",
      answerC: "C",
      answerD: "D",
      correctAnswer: "answerC"
    },
    {
      question: "shithole D",
      answerA: "A",
      answerB: "B",
      answerC: "C",
      answerD: "D",
      correctAnswer: "answerD"
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

  

  let answersArray = document.querySelectorAll(".answerBox");
  answersArray.forEach(function(answer) {
    answer.addEventListener("click", function(e) {
    let answerText = e.target.children[e.target.children.length - 1].id;
      let timer = 0;
      
      //change between colors.
      answer.style.backgroundColor = 'green';
      let suspense = setInterval(function(){
        if(answer.style.backgroundColor == 'red'){
          answer.style.backgroundColor = 'green';
        }
        else if(answer.style.backgroundColor == 'green'){
          answer.style.backgroundColor = 'red';
        }
          
        timer++;
        if(timer == 8){
          clearInterval(suspense);
          if (answerText === questionsArr[random].correctAnswer) {
            answer.style.backgroundColor = 'green';
          }
          else{
            answer.style.backgroundColor = 'red';
          }
        }
      }, 300);
      
      setTimeout(function () {
        answer.style.backgroundColor = '#ccc333';//change the color of the answer box back to normal
        nextQuestion();
      }, 6000);
      
    });
  });
  
  
  function nextQuestion(){
    questionsArr.splice(random, 1);
    if(questionsArr.length <= 0){
      //gg wp
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

}