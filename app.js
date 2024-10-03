let div1 = document.querySelector(".box1");
let div2 = document.querySelector(".box2");
let div3 = document.querySelector(".box3");
let div4 = document.querySelector(".box4");
let div5 = document.querySelector(".box5");
let div6 = document.querySelector(".box6");
let div7 = document.querySelector(".box7");
let div8 = document.querySelector(".box8");
let div9 = document.querySelector(".box9");
let p = document.querySelector("#winning");
let user = "";
function move() {
  if (user === "") {
    user = "X";
  } else if (user === "X") {
    user = "O";
  } else {
    user = "X";
  }
  return user;
}
function resetGame() {
  div1.textContent = "";
  div2.textContent = "";
  div3.textContent = "";
  div4.textContent = "";
  div5.textContent = "";
  div6.textContent = "";
  div7.textContent = "";
  div8.textContent = "";
  div9.textContent = "";
}


const checkWin = () => {
  // for rows
  if (
    (div1.textContent === div2.textContent &&
      div2.textContent === div3.textContent &&
      div1.textContent !== "") ||
    (div1.textContent === div5.textContent &&
      div5.textContent === div9.textContent &&
      div1.textContent !== "")
  ) {
    p.textContent = `${div1.textContent} Wins!`;
    p.style.fontWeight = "bold";
    p.style.backgroundColor = "green";
    setTimeout(() => {
      resetGame();
    }, 1000);
    return;
  } else if (
    div4.textContent === div5.textContent &&
    div5.textContent === div6.textContent &&
    div4.textContent !== ""
  ) {
    p.textContent = `${div4.textContent} Wins!`;
    p.style.fontWeight = "bold";
    p.style.backgroundColor = "green";
    setTimeout(() => {
      resetGame();
    }, 1000);
    return;
  } else if (
    div7.textContent === div8.textContent &&
    div8.textContent === div9.textContent &&
    div7.textContent !== ""
  ) {
    p.textContent = `${div7.textContent} Wins!`;
    p.style.fontWeight = "bold";
    p.style.backgroundColor = "green";
    setTimeout(() => {
      resetGame();
    }, 1000);
    return;
  }

  // for columns
  if (
    div1.textContent === div4.textContent &&
    div4.textContent === div7.textContent &&
    div1.textContent !== ""
  ) {
    p.textContent = `${div1.textContent} Wins!`;
    p.style.fontWeight = "bold";
    p.style.backgroundColor = "green";
    setTimeout(() => {
      resetGame();
    }, 1000);
    return;
  } else if (
    div2.textContent === div5.textContent &&
    div5.textContent === div8.textContent &&
    div2.textContent !== ""
  ) {
    p.textContent = `${div2.textContent} Wins!`;
    p.style.fontWeight = "bold";
    p.style.backgroundColor = "green";
    setTimeout(() => {
      resetGame();
    }, 1000);
    return;
  } else if (
    (div3.textContent === div6.textContent &&
      div6.textContent === div9.textContent &&
      div3.textContent !== "") ||
    (div3.textContent === div5.textContent &&
      div5.textContent === div7.textContent &&
      div3.textContent !== "")
  ) {
    p.textContent = `${div3.textContent} Wins!`;
    p.style.fontWeight = "bold";
    p.style.backgroundColor = "green";
    setTimeout(() => {
      resetGame();
    }, 1000);
    return;
  }

  // Check for a tie
  if (
    div1.textContent !== "" &&
    div2.textContent !== "" &&
    div3.textContent !== "" &&
    div4.textContent !== "" &&
    div5.textContent !== "" &&
    div6.textContent !== "" &&
    div7.textContent !== "" &&
    div8.textContent !== "" &&
    div9.textContent !== ""
  ) {
    p.style.backgroundColor = "red";
    p.textContent = "The Game Is Tie";
    setTimeout(() => {
      resetGame();
    }, 1000);
  }
};




div1.addEventListener("click", () => {
  div1.textContent = move();

  checkWin();
});

div2.addEventListener("click", () => {
  div2.textContent = move();

  checkWin();
});

div3.addEventListener("click", () => {
  div3.textContent = move();

  checkWin();
});

div4.addEventListener("click", () => {
  div4.textContent = move();

  checkWin();
});

div5.addEventListener("click", () => {
  div5.textContent = move();

  checkWin();
});

div6.addEventListener("click", () => {
  div6.textContent = move();

  checkWin();
});

div7.addEventListener("click", () => {
  div7.textContent = move();

  checkWin();
});

div8.addEventListener("click", () => {
  div8.textContent = move();

  checkWin();
});

div9.addEventListener("click", () => {
  div9.textContent = move();

  checkWin();
});
