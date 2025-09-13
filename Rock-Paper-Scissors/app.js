const yourcard = document.querySelector(".your_choice");
const computercard = document.querySelector(".computer_choice");
const display = document.querySelector(".display");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const option_arr = ["Paper📄", "Rock🗿 ", "Scissors✂️"];
let ranoption;
let rannumber;
const restart = document.querySelector(".restart");
const yourwin = document.querySelector(".your-win");
const computerwin = document.querySelector(".computer-win");
let yourcount = 0 , computercount = 0;

rock.addEventListener("click", () => {
    yourcard.innerHTML = "Rock 🗿 ";
    rannumber = Math.floor(Math.random() * option_arr.length);
    ranoption = option_arr[rannumber];
    computercard.innerHTML = ranoption;
    if(ranoption === "Paper📄")
    {
        display.innerHTML = "You loss 💀😭";
        computercount++;
        computerwin.innerHTML = "Computer :" + computercount;
    }
    else if (ranoption === "Scissors✂️")
    {
        display.innerHTML = "You WIN 🏆🎉";
        yourcount++;
        yourwin.innerHTML = "You :" + yourcount;

    }
    else
    {
        display.innerHTML = "It's a tie, Try again 🤝😐";
    }
});

paper.addEventListener("click", () => {
    yourcard.innerHTML = "Paper📄";
    rannumber = Math.floor(Math.random() * option_arr.length);
    ranoption = option_arr[rannumber];
    computercard.innerHTML = ranoption;
    if(ranoption === "Paper📄")
    {
        display.innerHTML = "It's a tie, Try again 🤝😐";
    }
    else if (ranoption === "Scissors✂️")
    {
        display.innerHTML = "You loss 💀😭";
        computercount++;
        computerwin.innerHTML = "Computer :" + computercount;
    }
    else
    {
        display.innerHTML = "You WIN 🏆🎉";
        yourcount++;
        yourwin.innerHTML = "You :" + yourcount;

    }
});

scissors.addEventListener("click", () => {
    yourcard.innerHTML = "Scissors✂️";
    rannumber = Math.floor(Math.random() * option_arr.length);
    ranoption = option_arr[rannumber];
    computercard.innerHTML = ranoption;
    if(ranoption === "Paper📄")
    {
        display.innerHTML = "You WIN 🏆🎉";
        yourcount++;
        yourwin.innerHTML = "You :" + yourcount;

    }
    else if (ranoption === "Scissors✂️")
    {
        display.innerHTML = "It's a tie, Try again 🤝😐";
    }
    else
    {
        display.innerHTML = "You loss 💀😭";
        computercount++;
        computerwin.innerHTML = "Computer :" + computercount;
    }
});

restart.addEventListener("click", () =>{
    display.innerHTML = "Choose your move below!";
    rannumber = "";
    ranoption = "";
    computercard.innerHTML = "";
    yourcard.innerHTML = "";
    yourcount = 0;
    computercount = 0;
    yourwin.innerHTML = "You : 0";
    computerwin.innerHTML = "Computer : 0";
});
