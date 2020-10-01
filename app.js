/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';
/**
 * Example store structure
 */

const quizContainer = document.getElementsByClassName('card');

const store = {
  // 5 or more questions are required
  questions: [
    {
      id: 1,
      question: 'How old is Giorno Giovanna?',
      answers: [
        '33',
        '100+',
        '15',
        '18'
      ],
      correctAnswer: '15',
      image: 'images/giornogiovanna.jpg'
    },
    {
      id: 2,
      question: 'How tall is Jotaro?',
      answers: [
        '6 Ft',
        '7 Ft',
        '6 Ft 5 In',
        '6 Ft 2 In'
      ],
      correctAnswer: '6 Ft 5 In',
      image: 'images/jotaro.png'
    },
    {
      id: 3,
      question: 'This plant was originally a...',
      answers: [
        'cat',
        'horse',
        'dog',
        'owl'
      ],
      correctAnswer: 'cat',
      image: 'images/tama.png'
    },
    {
      id: 4,
      question: 'Which of these luxury clothing brands participated in a crossover with the creator of JoJo?',
      answers: [
        'Prada',
        'Gucci',
        'Bvlgari',
        'Louis Vuitton'
      ],
      correctAnswer: 'Gucci',
      image: 'images/jojofashion.jpg'
    },
    {
      id: 5,
      question: 'This stand belongs to Koichi and is called',
      answers: [
        'Illusion',
        'Jojo',
        'Reverb',
        'Resound'
      ],
      correctAnswer: 'Reverb',
      image: 'images/koichistand.png'
    },
    {
      id: 6,
      question: 'What relation is Josuke to Jotaro?',
      answers: [
        'Cousin',
        'Uncle',
        'Grandfather',
        'Grandson'
      ],
      correctAnswer: 'Uncle',
      image: 'images/josukejotaro.jpg'
    },
    {
      id: 7,
      question: 'Mannish Boy has a stand called',
      answers: [
        'Death 13',
        'Reaper',
        'Charon',
        'Justice'
      ],
      correctAnswer: 'Death 13',
      image: 'images/mannishboy.png'
    },
    {
      id: 8,
      question: 'What stand does Rohan Kishibe use?',
      answers: [
        'Stairway to Heaven',
        'Heavens Door',
        'Freebird',
        'Manga Magician'
      ],
      correctAnswer: 'Heavens Door',
      image: 'images/rohan.png'
    },
    {
      id: 9,
      question: 'Polnareff from Stardust Crusaders inspired the following popular video game character',
      answers: [
        'Dhalsim',
        'Guile',
        'Megaman',
        'One Punch Man'
      ],
      correctAnswer: 'Guile',
      image: 'images/polnareff.jpg'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

let lastAnswer = 'None';
let lastQuestion = 'None';
let qN = store.questionNumber;


function generateStartPage() {
  return `<div class="card">
  <h2>Hello and Welcome to my JJBA Quiz</h2>
  <p>Test your knowledge about Jojo's Bizarre Adventure</p>
  <button id="start">Begin</button>
</div>`;
}


function generateEndPage() {
  let pctPart = ((store.score / store.questionNumber) * 100);
  let pctOfTotal = Math.round(pctPart) || 0;
  return `<div class="card">
  <h2>Thank you for taking my Quiz</h2>
  <p>Score:${store.score} out of ${store.questionNumber} - ${pctOfTotal} %</p>
  <p> Last Question: ${lastQuestion} </p>
  <p> Last Answer: ${lastAnswer} </p>
  <button onClick="window.location.reload();">Retry</button>
</div>`;
}

function generateAnswerChecking() {
  return `<div class="card">
  <h2>Thank you for taking my Quiz</h2>
  <p>Your score is ${store.score} out of ${store.questionNumber}</p>
  <form>
  <button type="button">OK!</button>
  </form>
</div>`;
}

// function handleAnswerChecking(){
//   $('main').on('button', 'form', function(evt){
//     evt.preventDefault();
//     let currentQuestion = store.questions[store.questionNumber];
//     let answer = $('input[name=answer]:checked').val();
//     console.log(answer,currentQuestion.correctAnswer);
//     if(answer === currentQuestion.correctAnswer){
//       store.score++;
//       console.log(quizContainer);
//     } else {
//       console.log('failure');
//       $('.answers').css('background-color', 'red');
//     }
//     store.questionNumber++;
//     if(store.questionNumber  >= store.questions.length) {
//       let endPage = generateEndPage();

//       render(endPage);
//     } else {
//       let nextQuestion = generateQuestion(store.questions[store.questionNumber]);
//       render(nextQuestion);
//     }

//   });
// }

function generateQuestion(item) {
  let pctPart = ((store.score / store.questionNumber) * 100);
  let pctOfTotal = Math.round(pctPart) || 0;
  return `<div class="card">
  <h2>${item.question}</h2>
  <h2>Question ${store.questionNumber} out of ${store.questions.length} </h2>
  <p>Score:${store.score} out of ${store.questionNumber} - ${pctOfTotal} %</p>
  <p> Last Question: ${lastQuestion} </p>
  <p> Last Answer: ${lastAnswer} </p>
  <img src=${item.image}>
  <form>
  <input type="radio" class="answers" id="${item.answers[0]}" name="answer" value="${item.answers[0]}" required>
  <label id="answerA" for="male">${item.answers[0]}</label>
  <input type="radio" class="answers" id="${item.answers[1]}" name="answer" value="${item.answers[1]}">
  <label id="answerB" for="female">${item.answers[1]}</label>
  <input type="radio" class="answers" id="${item.answers[2]}" name="answer" value="${item.answers[2]}">
  <label id="answerC" for="other">${item.answers[2]}</label>
  <input type="radio" class="answers" id="${item.answers[3]}" name="answer" value="${item.answers[3]}">
  <label id="answerD" for="other">${item.answers[3]}</label>
  <button type="submit">Submit</button>
  </form>
</div>`;
}

function handleAnswerChoice(){
  $('main').on('submit', 'form', function(evt){
    evt.preventDefault();
    let currentQuestion = store.questions[store.questionNumber];
    let answer = $('input[name=answer]:checked').val();
    console.log(answer,currentQuestion.correctAnswer);
    if(answer === currentQuestion.correctAnswer){
      store.score++;
      console.log(quizContainer);
      document.getElementById('answerA').style.backgroundColor  = 'green';
      document.getElementById('answerB').style.backgroundColor  = 'green';
      document.getElementById('answerC').style.backgroundColor  = 'green';
      document.getElementById('answerD').style.backgroundColor  = 'green';
    } else {
      console.log('failure');
      document.getElementById('answerA').style.backgroundColor  = 'red';
      document.getElementById('answerB').style.backgroundColor  = 'red';
      document.getElementById('answerC').style.backgroundColor  = 'red';
      document.getElementById('answerD').style.backgroundColor  = 'red';
    }
    store.questionNumber++;
    if(store.questionNumber  >= store.questions.length) {
      lastAnswer = store.questions[qN].correctAnswer;
      lastQuestion = store.questions[qN].question;
      qN = 0;
      let endPage = generateEndPage();
      store.quizStarted = false; /// addition to set quiz to ended
      setTimeout(() => {  render(endPage); }, 1000);
      

    } else {
      lastAnswer = store.questions[qN].correctAnswer;
      lastQuestion = store.questions[qN].question;
      qN++;
      let nextQuestion = generateQuestion(store.questions[store.questionNumber]);

      setTimeout(() => {  render(nextQuestion); }, 3000);
    }

  });


}
function render(html) {
  $('main').html(html);
}

function handleStartQuiz() {
  $('main').on('click', '#start', function(evt){
    console.log('Clicked!');
    store.quizStarted = true;
    let question = generateQuestion(store.questions[store.questionNumber]);
    render(question);
  });
}

function main() {
  handleStartQuiz();
  handleAnswerChoice();
  let startPage = generateStartPage();
  render(startPage);
}

$(function() {

  $('input[type="checkbox"]').bind('change', function (v) {

    if($(this).is(':checked')) {
      $(this).parent().addClass('active');
    } else {
      $(this).parent().removeClass('active');
    }
  });

});

$(main);
/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)