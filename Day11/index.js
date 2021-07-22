var options = document.getElementsByClassName('block')
var i, j;
var c = document.getElementsByClassName('but')
const answerArr = [
    "", 1, 2, 3, 4
];
const questArr = ['', '', 'What is my favourite programming language?', 'what is my favourite pet?', 'what is my favourite travel destination?']
const optionBox = [
    [],
    [],
    ['C++', 'python', 'swift', 'java'],
    ['cat','bird','dog','dolphine'],
    ['Pakistan','Argentina', 'India', 'Nepal']
]
var currentQuestion = 1;

function truthDetector(changevalue) {
    if (changevalue.value == answerArr[currentQuestion]) {
        console.log('Right');
    } else {
        console.log('Wrong');
    }
}
for (i = 0; i <= options.length - 1; i++) {
    console.log(i);
    options[i].addEventListener('click', (e) => {

        for (j = 0; j < c.length; j++) {
            if (e.target == c[j]) {
                e.target.value = j + 1;
            }
            console.log(e.target);
            truthDetector(e.target);
        }
    })
}
document.getElementsByClassName('nextBut')[0].addEventListener('click', (e) => {
    console.log(e.target);
    currentQuestion++;
    var questionName = document.querySelector('.QuestionScreen');
    questionName.value = questArr[currentQuestion];
    for (let i = 0; i < 4; i++) {
        c[i].innerHTML = optionBox[currentQuestion][i];
    }

})