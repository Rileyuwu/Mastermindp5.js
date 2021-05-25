//All variables
let button;
let ellipsesanswer = [];
let color = ["red", "blue", "yellow", "green", "purple", "black", "aqua", "orange"]; //Possible Colors
let ellipses = [];
let squares = [];
let input = [];
let n = 0;
let b = 0;
let a = 0;
let x = 0;
let p = 0;
let l = 0;
let s = 0;
let c = 0;
let v = 0;
let score = 0;

//Randomization of input
input[0] = color [Math.floor((Math.random() * 8 ))] ;
input[1] = color [Math.floor((Math.random() * 8 ))] ;
input[2] = color [Math.floor((Math.random() * 8 ))] ;
input[3] = color [Math.floor((Math.random() * 8 ))] ;

function setup() {
    createCanvas(4000, 4000);
    for (let i = 0; i < 40; i++) { //40 Ellipses
        ellipses[i] = {
            x: 250 + 75 * n,
            y: 350 + 100 * b,
            fill: 'color'
        }
        n++
        if (n > 3) {
            n = 0;
            b++;
        }
    }

    for(let i = 0; i < 40; i++) { //40 Squares
        squares[i] = {
            x: 550 + 75 * p,
            y: 350 + 100 * l,
            fill: 'green'
        }
        p++
        if (p > 3) {
            p = 0;
            l++
        }
    }

    for (let h = 0; h < 4; h++) { //4 Ellipses
        ellipsesanswer[h] = {
            x: 250 + 75 * s,
            y: 200 + 100 * c,
            fill: input[0, 1, 2, 3] = color [Math.floor((Math.random() * 8 ))], //Random Color Generation

        }
        s++
    }
    text(s, 10, 10, 70, 80);
}

function draw() {
    //Board Creation
    textSize(60);
    textStyle(BOLD);
    fill(100,100,140);
    text("MASTERMIND",300,70);
    fill("grey");
    stroke(71, 71, 71);
    strokeWeight(15);
    rect(200, 120, 650, 1500);
    line(850, 275, 200, 275);
    line(850, 1300, 200, 1300);
    line(530,120, 530, 1300);

    //Ellipses and Squares Creation
    for (let j = 0; j < ellipses.length; j++) {

        noStroke();
        fill(ellipses[j].fill)
        ellipse(ellipses[j].x, ellipses[j].y, 60, 60)
    }

    for(let j = 0; j < squares.length; j++) {
        fill(squares[j].fill);
        rect(squares[j].x, squares[j].y, 30, 30);
    }

    for (let q = 0; q < ellipsesanswer.length; q++) {
        noStroke();
        fill(ellipsesanswer[q].fill)
        ellipse(ellipsesanswer[q].x, ellipsesanswer[q].y, 0, 0) //Change w 0 h 0 to make it visible (w60, h60)
    }

    textSize(12);
    text('Mastermind is a simple game. 4 random circles are chosen, it is your goal to guess the correct circles\n' +
        '      to assist you hints are given. If a color is correct a square on teh side will turn white. If a color is correct\n' +
        '      and in the correct place a square will turn red. Getting 4 red squares means you have beaten the game!', 210, 1400);
    fill(0, 50, 153);

}





function color_check() {
    //Color Check
    let checks = 0;
    ellipses.forEach(({ fill }, index) => {
        if (fill === ellipsesanswer[checks++].fill) squares[index].fill = "red" ;
        else if (ellipsesanswer.some(ellipse => fill === ellipse.fill)) squares[index].fill = "white";
        if (checks >= 4) checks = 0;
    })
    console.log(ellipsesanswer);
    score++
    console.log(score);
    //Loose Check
    if(score === 10) window.open("LOOSE.html");
}



function mouseClicked() { //Color Ellipse Cycle
    for (let e = 0; e < ellipses.length; e++)
        if (mouseX < ellipses[e].x + 20 && mouseX > ellipses[e].x && mouseY < ellipses[e].y + 20 && mouseY > ellipses[e].y) {
            ellipses[e].fill = color[a];
            a++;
            if (a > 7) {
                a = 0;
            }
        }
}



