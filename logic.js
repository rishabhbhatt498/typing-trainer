const showscreen=(currentscreen_id,nextscreen_id)=>{
    const current=document.getElementById(currentscreen_id);
    const next=document.getElementById(nextscreen_id);
    current.classList.remove("current_screen");
    current.classList.add("hidden_screen");
    next.classList.remove("hidden_screen");
    next.classList.add("current_screen");
};

const all_arrays=[["a","s","d","f","j","k","l"],
["a","b","c","d","e","f","g","h","i","j","k","l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"],
["a","b","c","d","e","f","g","h","i","j","k","l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z","0","1","2","3","4","5","6","7","8","9"]
];
//screen 1
const begin=document.querySelector("#begin")
begin.addEventListener("click", () =>{
     showscreen("homescreen","levelscreen");
});
//screen 2
const level_buttons=document.querySelectorAll(".level_button");
let selected_level=1;
level_buttons.forEach(button => {
    button.addEventListener("click",()=>{
        selected_level=Number(button.dataset.level);
        showscreen("levelscreen","gamescreen");
    });
});
// screen 3
const box= document.querySelector("#display");
const start=document.querySelector("#start");
const finish= document.querySelector("#finish");
const right=document.querySelector("#correct_ks");
const wrong=document.querySelector("#wrong_ks");
const total=document.querySelector("#total_ks");
let right_count=0;
let wrong_count=0;
start.addEventListener("click", ()=>{
    box.textContent= all_arrays[selected_level-1][Math.floor(Math.random()*all_arrays[selected_level-1].length)];
});
document.addEventListener("keydown", function(event){
    if(event.key===box.textContent){
        box.textContent=all_arrays[selected_level-1][Math.floor(Math.random()*all_arrays[selected_level-1].length)];
        box.style.borderColor="green";
        right_count++;
    }
    else{
        box.style.borderColor="red";
        wrong_count++;
    }
    
});

finish.addEventListener("click", ()=>{
    right.textContent=right_count;
    wrong.textContent=wrong_count;
    total.textContent=right_count+wrong_count;
    showscreen("gamescreen","statscreen");
});

// screen 4

