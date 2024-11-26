const boxes = document.querySelectorAll(".box");
let win = document.querySelector("#Winner");
let reset = document.querySelector(".Reset");
let score = document.querySelector("#Score");

let count = 1;
function comturn(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let generate = random(1, 3);
reset.addEventListener("click",()=>{
    location.reload();
})
const computer = {
    1 : "ROCK",
    2 : "PAPER",
    3 : "SCISSORS"
}

const points = (count) =>{
    score.innerText = `SCORE : ${count}`
}

let winner = (result) =>{
    win.innerText = `${result} WIN`;
}   

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(box.innerText === computer[comturn(1, 3)]){
            win.innerText = "DRAW";
        }else{
            if(box.innerText === "ROCK" ){
                if(computer[comturn(1, 3)] === "SCISSORS"){
                    points(count++);
                    winner("YOU");
                }
                else{
                    winner("COMPUTER");
                }
            }
            else if(box.innerText === "PAPER" ){
                if(computer[comturn(1, 3)] === "ROCK"){
                    points(count++);
                    winner("YOU");
                }
                else{
                    winner("COMPUTER");
                }
            }else{
                if(computer[comturn(1, 3)] === "PAPER"){
                    points(count++);
                    winner("YOU");
                }
                else{
                    winner("COMPUTER");
                }
            }
        }
    })
})

