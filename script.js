let score = 0

function checkanswers(){
    let score = 0
    let result = 0

    let quiz = document.forms.quiz.elements;

    answer1 = quiz.colour.value
    if (answer1 == "cyan"){
        score = score + 1;
    }
    if (answer1 == "yellow"){
        score = score + 2;
    }
    if (answer1 == "magenta"){
        score = score + 3;
    }
    if (answer1 == "black"){
        score = score + 4;
    }

    answer2 = quiz.animal.value
    if (answer2 == "cat"){
        score = score + 1;
    }
    if (answer2 == "dog"){
        score = score + 2;
    }
    if (answer2 == "rabbit"){
        score = score + 3;
    }
    if (answer2 == "rat"){
        score = score + 4;
    }

    answer3 = quiz.music.value
    if (answer3 == "pop"){
        score = score + 1;
    }
    if (answer3 == "rock"){
        score = score + 2;
    }
    if (answer3 == "classical"){
        score = score + 3;
    }
    if (answer3 == "electronic"){
        score = score + 4;
    }

    answer4 = quiz.hobby.value
    if (answer4 == "read"){
        score = score + 1;
    }
    if (answer4 == "sleep"){
        score = score + 2;
    }
    if (answer4 == "gym"){
        score = score + 3;
    }
    if (answer4 == "drink"){
        score = score + 4;
    }

    if (score < 6){
        result = "HTML"
    }
    else if (score < 10){
        result = "Python"
    }
    else if (score < 13){
        result = "JavaScript"
    }
    else {
        result = "Java"
    }
    alert ('test text' + score + result);
}