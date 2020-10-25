//Variables
const resultsContainer = document.getElementById('results');
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

//Event Listeners
// button.onclick= function(e){
//     e.preventDefault();
// }

//Functions


function enableBtn() {

    button.removeAttribute('disabled');


}

let myQuestions = [
    {
        question: "What is 10/2?",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is 30 * 30 + 2?",
        answers: {
            a: '902',
            b: '900',
            c: '390'
        },
        correctAnswer: 'a'
    },
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "c"
    },

    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
        },
        correctAnswer: "d"
    }
];



function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        // we'll need a place to store the output and the answer choices
        let output = [];
        let answers;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // first reset the list of answers
            answers = [];

            // for each available answer to this question...
            for (letter in questions[i].answers) {

                // ...add an html radio button
                answers.push(
                    '<div class="form-check">' +
                    '<label class="form-check-label">'
                    + '<input type="radio" class="form-check-input" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                    + '</div>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question lead">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {
        // code will go here
        // gather answer containers from our quiz
        let answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let userAnswer = '';
        let numCorrect = 0;

        // for each question...
        for (let i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = 'Your result is ' + numCorrect + ' out of ' + questions.length;
    }

    // show the questions
    showQuestions(questions, quizContainer);

    // when user clicks submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


