var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
var correctPosition;

document.getElementById("startReset").onclick =
    function() {
        if (playing == true) {
            location.reload();

        } else {
            playing = true;
            score = 0;
            hide("gameover");
            document.getElementById("scorevalue").innerHTML = score;
            document.getElementById("timer").style.display = "block";
            document.getElementById("startReset").innerHTML = "Reset game";
            document.getElementById("timeremaining").innerHTML = timeremaining;
            timeremaining = 60;
            startCountdown();
            generateQA();
        }
    }
for (i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick =
        function() {
            if (playing == true) {
                if (this.innerHTML == correctAnswer) {
                    score++;
                    document.getElementById("scorevalue").innerHTML = score;
                    hide("wrong");
                    show("correct");
                    setTimeout(function() {
                        hide("correct");
                    }, 1000);
                    generateQA();

                } else {
                    show("wrong");
                    hide("correct");
                    setTimeout(function() {
                        hide("wrong");
                    }, 1000);

                }
            }
        }
}

function startCountdown() {
    action = setInterval(function() {
        timeremaining -= 1;
        document.getElementById("timeremaining").innerHTML = timeremaining;

        if (timeremaining == 0) {
            clearInterval(action);
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>GAME OVER!</p>YOUR SCORE IS " + score + "<p></p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startReset").innerHTML = "Start Game"

        }
    }, 1000);


}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function show(id) {
    document.getElementById(id).style.display = "block";
}

function generateQA() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctAnswer = x * y;
    document.getElementById("question").innerHTML = x + "x" + y;
    correctPosition = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer;
    var answers = [correctAnswer];
    for (i = 1; i < 5; i++) {
        if (i !== correctPosition) {
            var worngAnswer
            do {
                worngAnswer = 1 + Math.round(9 * Math.random()) * 1 + Math.round(9 * Math.random());
            }
            while (answers.indexOf(worngAnswer) > -1) {
                document.getElementById("box" + i).innerHTML = worngAnswer;
                answers.push(worngAnswer);
            }

        }
    }

}