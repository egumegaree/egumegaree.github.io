let nQ = 7;
let currQ = 1;

// scores
let scores = [0,0,0,0];

let answers = document.getElementsByClassName("answer-button");

function increaseScore() {
    var answerType = this.className.replace("answer-button ", "");
    console.log(answerType);

    if (answerType == "heal") {
        scores[0]++;
    } else if (answerType == "energy") {
        scores[1]++;
    } else if (answerType == "luck") {
        scores[2]++;
    } else {
        scores[3]++;
    }

    showNextSet();
}

function showNextSet() {
    if (currQ == nQ) {
        endQuiz();
    }
    document.getElementById("q"+currQ).style.display = "none";
    currQ++;
    let nextQ = "q" + currQ;
    document.getElementById("q"+currQ).style.display = "block";
}

for (var i = 0; i < answers.length; i++) {
    answers[i].addEventListener('click', increaseScore);
}

function endQuiz() {
    document.getElementById("q"+nQ).style.display = "none";
    document.getElementById("crafting").style.display = "none";
    document.getElementById("complete").style.display = "inline";
    document.getElementById("quiz-complete").style.display = "block";

    let maxScore = 0;
    for (i=1; i<4; i++) {
        if (scores[i] > scores[maxScore]) {
            maxScore = i;
        } else if (scores[i] == scores[maxScore]) {
            if (Math.random() < 0.5) {
                maxScore = i;
            }
        }
    }

    setTimeout(function() {
        document.getElementById("complete").style.display = "none";
        document.getElementById("quiz-complete").style.display = "none";
        showResult(maxScore);
    }, 2000);
}

function showResult(result) {
    document.getElementById("potion"+result).style.display = "block";
    document.getElementById("result-box").style.display = "block";
    document.getElementById("result"+result).style.display = "block";
    document.getElementById("reset-button").style.display = "block";
}