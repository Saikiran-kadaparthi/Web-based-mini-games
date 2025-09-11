let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let Turn_temp = true;
let winnerannounce = document.querySelector(".winnerTag");
let theme = document.querySelector(".theme-outer");
let themebtn = document.querySelector(".theme-inner");
let container = document.querySelector(".container")
const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
    if(Turn_temp === true){
        box.innerText= "X";
        Turn_temp = false;
        box.disabled = true;
    }
    else{
        box.innerText = "O";
        Turn_temp = true;
        box.disabled = true;

    }
    winner();
    draw();
    });
});
const draw = () => {
    let draw = true;
    boxes.forEach(box => {
        if (box.innerText === "") draw = false;
    });
    if (draw) {
        winnerannounce.innerHTML = "It's a draw";
        boxes.forEach(box => box.disabled = true);
    }
};
const winner = () => 
{
    for (patterns of win)
    {
        let one = boxes[patterns[0]].innerHTML;
        let two = boxes[patterns[1]].innerHTML;
        let three = boxes[patterns[2]].innerHTML;
        
        if (one != "" && two != "" && three != "")
        {
            if(one === two && two === three)
            {
                console.log("Win", one);

                for(let i=0; i<boxes.length; i++)
                {
                    boxes[i].disabled = true;
                }

                boxes[patterns[0]].style.background = "#a87297ff";
                boxes[patterns[1]].style.background = "#a87297ff";
                boxes[patterns[2]].style.background = "#a87297ff";
                winnerannounce.innerHTML = "Winner is "+ one;

            }
        }
    }
}


reset.addEventListener("click", () =>{
    for(i=0; i < boxes.length; i++)
    {
        boxes[i].innerHTML = "";
        boxes[i].disabled = false;
        boxes[i].style.background = "";
    }

    Turn_temp = true;
    winnerannounce.innerHTML = "";
});

theme.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
});
