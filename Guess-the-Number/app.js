const input = document.getElementById("input");
const display = document.querySelector(".display");
const enter = document.querySelector(".enter");
const restart = document.querySelector(".restart");
let entered_number;
let ran_num = Math.floor(Math.random() * 100) + 1;

enter.addEventListener("click", () =>{
    entered_number = input.value;
    console.log(entered_number);
    if(entered_number === ""){
        display.innerHTML = "Enter a Number";

    }
    else if(entered_number > 100 || entered_number < 0)
    {
        display.innerHTML = "Invalid Number, Enter between 0-100";
    }
    else if(isNaN(entered_number)){
        display.innerHTML = "Please enter Only Number!";
    }
    else
    {
        if(entered_number > ran_num)
        {  
            display.innerHTML = "Guessed number is Higher";
        }
        else if (entered_number < ran_num)
        {
            display.innerHTML = "Guessed number is Lower";
        }
        else
        {
            display.innerHTML = "Guessed number is Correct!! 🎉🎉";
        }
    }
    input.value = "";
});

input.addEventListener("keydown", () =>{

    if( event.key === "Enter"){
    entered_number = input.value;
    console.log(entered_number);
    if(entered_number === ""){
        display.innerHTML = "Enter a Number";

    }
    else if(isNaN(entered_number)){
        display.innerHTML = "Please enter Only Number!";
    }
    else if(entered_number > 100 || entered_number < 0)
    {
        display.innerHTML = "Invalid Number, Enter between 0-100";
    }
    else
    {
        if(entered_number > ran_num)
        {  
            display.innerHTML = "Guessed number is Higher";
        }
        else if (entered_number < ran_num)
        {
            display.innerHTML = "Guessed number is Lower";
        }
        else
        {
            display.innerHTML = "Guessed number is Correct!! 🎉🎉";
        }
    }
    input.value = "";
    }
});


restart.addEventListener("click", () => {
    entered_number = "";
    ran_num = Math.floor(Math.random() * 100) + 1;
    display.innerHTML = " Guess a number between 0-100 ";
    input.value = "";
} );