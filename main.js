let turn = "x";
let gameOver = false;

const changeTurn = () => {
    return turn === "x" ? "0" : "x";
};

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];

    win.forEach((e) => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.getElementById("info").innerText =
                boxtext[e[0]].innerText + " won ";
            gameOver = true;
            document
                .querySelector(".imgbox")
                .getElementsByTagName("img")[0]
                .classList.add("imgwidth");
            document.querySelector(
                ".line"
            ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").classList.add("linewidth");
        }
    });
};


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver) {
                document.getElementById("info").innerHTML = "Turn for " + turn;
            }
        }
    });
});

reset.addEventListener("click", () => {
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach((element) => {
        element.innerText = "";
    });
    turn = "x";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0]
        .classList.remove("imgwidth");
    document.querySelector(".line").classList.remove("linewidth");
});