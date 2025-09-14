
// questions, multipleChoice, correct answers
let questionArr = [
    "Which keyword is used to declare a variable in JavaScript?",
    "Which symbol is used for comments in JavaScript (single line)?",
    "Which function is used to print messages in the browser console?",
    "Which operator is used to compare both value and type?",
    "What is the default value of an uninitialized variable in JavaScript?",
    "Which of the following is NOT a JavaScript data type?",
    "Which method converts a string to uppercase in JavaScript?",
    "How do you create a function in JavaScript?",
    "Which keyword is used to stop a loop in JavaScript?",
    "Which built-in method removes the last element from an array?"
]

let multiChoiceArr = [
    {
        1: "var",
        2: "int",
        3: "string",
        4: "let"
    },
    {
        1: "< !-- -- >",
        2: "//",
        3: "/* */",
        4: "#"
    },
    {
        1: "print()",
        2: "console.log()",
        3: "log.console()",
        4: "write()"
    },
    {
        1: "==",
        2: "=",
        3: "===",
        4: "!="
    },
    {
        1: "null",
        2: "undefined",
        3: "0",
        4: "NaN"
    },
    {
        1: "Boolean",
        2: "Undefined",
        3: "Character",
        4: "Number"
    },
    {
        1: "toUpperCase()",
        2: "upperCase()",
        3: "makeUpper()",
        4: "strUpper()"
    },
    {
        1: "function myFunction() {}",
        2: "create myFunction() {}",
        3: "def myFunction() {}",
        4: "fun myFunction() {}"
    },
    {
        1: "stop",
        2: "end",
        3: "break",
        4: "exit"
    },
    {
        1: "pop()",
        2: "push()",
        3: "shift()",
        4: "remove()"
    }
]
let correctArr = [1, 2, 2, 3, 2, 3, 1, 1, 3, 1]

let question = document.querySelector(".question")
let answers = document.querySelector(".multipleChoice")
let answersContainer = document.getElementsByTagName("li")
let nextBtn = document.querySelector(".submit")


// add event listener to list of answers
function select(answerArr) {
    // selected answer get highlighted, only one can be selected
    answerArr.forEach(e => {
        e.addEventListener("click", () => {
            // if already selected, unselect it
            if (e.classList.contains("selected")) {
                e.classList.remove("selected");
                e.style.backgroundColor = "white";
                nextBtn.style.display = "none";
            } else {
                // remove selection from others then adds bg + class for clicked elem
                answerArr.forEach((elem) => {
                    elem.classList.remove("selected");
                    elem.style.backgroundColor = "white";
                })

                // highlights the currently selected
                e.classList.add("selected")
                e.style.backgroundColor = "#98d4f1";
                nextBtn.style.display = "block";
            }
        })
    })
}

let qNo = 0;

// loads first question with its multipleChoice on DOM load
window.addEventListener("DOMContentLoaded", () => {
    question.innerHTML = ` <h3> <span>${qNo + 1}</span>. ${questionArr[qNo]}</h3>`
    answers.innerHTML = `<ul>
                    <li> ${multiChoiceArr[qNo][1]}</li>
                    <li> ${multiChoiceArr[qNo][2]}</li>
                    <li> ${multiChoiceArr[qNo][3]}</li>
                    <li> ${multiChoiceArr[qNo][4]}</li>
                    
                </ul>`
    // gets answers in container after insertion
    answersContainer = document.getElementsByTagName("li")
    let answerArr = Array.from(answersContainer)
    select(answerArr) // apply event listener
    qNo++
})

// event listener to nextBtn
let correctScore = 0
nextBtn.addEventListener("click", () => {
    //  loads next Q/A + adds Event listener to each answer 
    Array.from(answersContainer).forEach(e => {
        if (e.classList.contains("selected")) {
            if (e.textContent.trim() == multiChoiceArr[qNo - 1][correctArr[qNo - 1]]) {
                correctScore++
            }
        }
    })

    if (qNo < questionArr.length) {
        question.innerHTML = ` <h3> <span>${qNo + 1}</span>. ${questionArr[qNo]}</h3>`
        answers.innerHTML = `<ul>
                    <li> ${multiChoiceArr[qNo][1]}</li>
                    <li> ${multiChoiceArr[qNo][2]}</li>
                    <li> ${multiChoiceArr[qNo][3]}</li>
                    <li> ${multiChoiceArr[qNo][4]}</li>
                    
                </ul>`
        answersContainer = document.getElementsByTagName("li")
        answerArr = Array.from(answersContainer)
        select(answerArr)
        nextBtn.style.display = "none"
        qNo++

    } else if (qNo == questionArr.length) {
        question.innerHTML = ` <h3> Awesome, You played it well!!</h3>`
        answers.innerHTML = `<p> You scored  <span>${correctScore}/10</span></p>`
        nextBtn.style.display = "none"
    }
})

