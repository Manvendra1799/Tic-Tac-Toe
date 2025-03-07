
let boxes = document.querySelectorAll(".box");
let turn0 = true; //X -> O
let newGameBtn = document.querySelector(".new-btn");
let resetBtn = document.querySelector(".reset-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

//2d-array: array of arrays
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

//reset game
const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");

}

//x->0
boxes.forEach((box) => {
  box.addEventListener("click", () => {

    if (turn0 === true) {
      box.innerText = "O";
      box.style.color ="rgb(68, 46, 135)"
      turn0 = false;
    }
    else {
      box.innerText = "X";
      box.style.color = "rgb(11, 196, 116)";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });

});


//disabled boxes
const disabledBoxes = () => {
  for(let box of boxes){
  box.disabled = true;
}
}


//enable boxes
const enableBoxes = () => {
  for(let box of boxes){
  box.disabled = false;
  box.innerText = "";
}
}


//show winner
const showWinner = (Winner) => {
  if (Winner) {
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

  }
}


//checkWinner
const checkWinner = () => {
  for (let pattern of winPattern) {
    //position of all 3boxes
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;


    if (pos1Val != "" && pos2Val != "" && pos3Val != "")
      if (pos1Val === pos2Val && pos2Val === pos3Val) {

        console.log("Winner");

        showWinner(pos1Val);
      }
      else {
        console.log("Not winner");
      }

  }
}


//when new game button and reset button will be triggered.
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)
