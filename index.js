// let flag = "x"
// function elementUpdater()
// {   
//     return flag === "x" ? "0" : "x";
// }

// let box = document.querySelector('.cont');
// Array.from(box).forEach(element =>{
//     let boxes = element.querySelector('.boxtext');
//     element.addEventListener("click", () => 
//     {

//     })
// });

let box = document.querySelector(".cont");
box.addEventListener("click", myfunction());
var playerturn  = true;
let value;
function myfunction(){
let boxtext = document.querySelector(".boxtext");
if(playerturn)
{
    boxtext.innerHTML = "x";
    playerturn = ! playerturn;
}
else{
    // boxtext.innerHTML = "o";
    playerturn = ! playerturn;
}
}




