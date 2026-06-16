const arr=["a","b","c","d","e","f","g","h","i","j","k","l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"] ;
const box= document.querySelector("#display");
const start=document.querySelector("#start");
const finish= document.querySelector("#finish");



start.addEventListener("click", function(){

    box.textContent= arr[Math.floor(Math.random()*arr.length)];
} );

document.addEventListener("keydown", function(event){
    if(event.key===box.textContent){
        box.textContent=arr[Math.floor(Math.random()*arr.length)];
        box.style.borderColor="green";
    }
    else{
        box.style.borderColor="red";
    }
    
});

finish.addEventListener("click", function(){
    box.textContent= "terminated";
});
