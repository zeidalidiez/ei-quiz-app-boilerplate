/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      id: cuid(),
      question: 'How old is Giorno Giovana?',
      answers: [
        '33',
        '100+',
        '15',
        '18'
      ],
      correctAnswer: '15'
    },
    {
      id: cuid(),
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2020',
        '2005'
      ],
      correctAnswer: '2020'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

function generateStartPage() {
  return `<div class="card">
  <h2>Welcome to my quiz</h2>
  <p>This is the best quiz ever!</p>
  <button id="start">Start The quiz</button>
</div>`;
}

function generateQuestion(item) {
  return `<div class="card">
  <h2>${item.question}</h2>
  <form>
  <input type="radio" id="${item.answers[0]}" name="answer" value="${item.answers[0]}">
  <label for="male">${item.answers[0]}</label><br>
  <input type="radio" id="${item.answers[1]}" name="answer" value="${item.answers[1]}">
  <label for="female">${item.answers[1]}</label><br>
  <input type="radio" id="${item.answers[2]}" name="answer" value="${item.answers[2]}">
  <label for="other">${item.answers[2]}</label>
  <input type="radio" id="${item.answers[3]}" name="answer" value="${item.answers[3]}">
  <label for="other">${item.answers[3]}</label>
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
      alert('Woot Woot!');
    } else {
      alert('You Suck!');
    }
    store.questionNumber++;
    let nextQuestion = generateQuestion(store.questions[store.questionNumber]);
    render(nextQuestion);
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
  console.log(store.questions);
  handleStartQuiz();
  handleAnswerChoice();
  let startPage = generateStartPage();
  render(startPage);
}

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