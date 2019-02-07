//var colors = ["red", "green", "blue"];


function Game() {
    
}

function PlayerBox() {

    var colors = ["red", "green", "blue"];
    var that = this;

    for (i = 0; i < 3; i++){
        this.ele = document.createElement("div");
        this.ele.style.width = "100px";
        this.ele.style.height = "100px";
        this.ele.style.border = "solid";
        this.ele.style.display = "inline-block";


        var randomColor = colors[Math.floor(Math.random()*colors.length)];
        var x = colors.indexOf(randomColor);

        this.ele.style.background = randomColor;

        document.body.appendChild(this.ele);
    }

}

function AnswerBox() {

    var colors = ["red", "green", "blue"];

    for (i = 0; i < 3; i++){
        var that = this;
        this.ele = document.createElement("div");
        this.ele.style.width = "100px";
        this.ele.style.height = "100px";
        this.ele.style.border = "solid";
        this.ele.style.display = "inline-block";


        var randomColor = colors[Math.floor(Math.random()*colors.length)];

        this.ele.style.background = randomColor;

    }
}


var test = new PlayerBox();
// document.write("<br>");
// var test2 = new AnswerBox();



