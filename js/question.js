class Question {
    constructor(questionText, answers, correctAnswer) {
        this.questionText = questionText;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer){
        return answer === this.correctAnswer;
    }
}

let questions = [
    new Question("What is the capital of Pakistan ?", {
        a: "Karachi",
        b: "Islamabad",
        c: "Lahore"
    }, "b"),
    new Question("What is the national animal of Pakistan?", {
        a: "Hourse",
        b: "Markhor",
        c: "Elephent"
    }, "b"),
    new Question("What is the national game of Pakistan?", {
        a: "Cricket",
        b: "Football",
        c: "Hockey"
    }, "c"),
    new Question("Which is the higest mountain of Pakistan?", {
        a: "K2",
        b: "Nanga Parbat",
        c: "Broad Peak"
    }, "a"),
    new Question("What is the national bird of Pakistan?", {
        a: "Pegion",
        b: "Eagle",
        c: "Chakor"
    }, "c")
];