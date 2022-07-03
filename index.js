var playerturn = true ;
const checker = () => 
{
    if(playerturn)
    {
      playerturn =!playerturn;
      return "x";
    }
    else
    {
      playerturn =!playerturn;
      return "0";
    }
}
var boxes = document.getElementsByClassName("cont");
var message = document.querySelector(".message");
var winner=false;
for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click", () =>{
        boxes[i].innerHTML = checker();
        // console.log(boxes[0].innerHTML)
        if(boxes[0].innerHTML === "x" && boxes[1].innerHTML === "x" && boxes[2].innerHTML === "x" || boxes[0].innerHTML === "0" && boxes[1].innerHTML === "0" && boxes[2].innerHTML === "0" ) 
        {
            message.innerHTML = `${boxes[0].innerHTML} - Player is win`;
            boxes[0].style.backgroundColor = "red";
            boxes[1].style.backgroundColor = "red";
            boxes[2].style.backgroundColor = "red";
            winner = true;
            clear();
        }
        else if(boxes[3].innerHTML === "x" && boxes[4].innerHTML === "x" && boxes[5].innerHTML === "x" || boxes[3].innerHTML === "0" && boxes[4].innerHTML === "0" && boxes[5].innerHTML === "0" )
        {
            message.innerHTML = `${boxes[3].innerHTML} - Player is win`;
            boxes[3].style.backgroundColor = "red";
            boxes[4].style.backgroundColor = "red";
            boxes[5].style.backgroundColor = "red";
            winner = true;
            clear();
        }
        else if(boxes[6].innerHTML === "x" && boxes[7].innerHTML === "x" && boxes[8].innerHTML === "x" || boxes[6].innerHTML === "0" && boxes[7].innerHTML === "0" && boxes[8].innerHTML === "0" )
        {
            message.innerHTML = `${boxes[6].innerHTML} Player is win`;
            boxes[6].style.backgroundColor = "red";
            boxes[7].style.backgroundColor = "red";
            boxes[8].style.backgroundColor = "red";
            winner = true;
            clear();
        }
        else if(boxes[0].innerHTML === "x" && boxes[3].innerHTML === "x" && boxes[6].innerHTML === "x" || boxes[0].innerHTML === "0" && boxes[3].innerHTML === "0" && boxes[6].innerHTML === "0" )
        {
            message.innerHTML = `${boxes[0].innerHTML} Player is win`;
            boxes[0].style.backgroundColor = "red";
            boxes[3].style.backgroundColor = "red";
            boxes[6].style.backgroundColor = "red";
            winner = true;
            clear();
        }
        else if(boxes[1].innerHTML === "x" && boxes[4].innerHTML === "x" && boxes[7].innerHTML === "x" || boxes[1].innerHTML === "0" && boxes[4].innerHTML === "0" && boxes[7].innerHTML === "0" )
        {
            message.innerHTML = `${boxes[1].innerHTML} Player is win`;
            boxes[1].style.backgroundColor = "red";
            boxes[4].style.backgroundColor = "red";
            boxes[7].style.backgroundColor = "red";
            winner = true;
            clear();
        }
        else if(boxes[2].innerHTML === "x" && boxes[5].innerHTML === "x" && boxes[8].innerHTML === "x" || boxes[2].innerHTML === "0" && boxes[5].innerHTML === "0" && boxes[8].innerHTML === "0" )
        {
            message.innerHTML = `${boxes[2].innerHTML} Player is win`;
            boxes[2].style.backgroundColor = "red";
            boxes[5].style.backgroundColor = "red";
            boxes[8].style.backgroundColor = "red";
            winner = true;
            clear();
        }
        else if(boxes[0].innerHTML === "x" && boxes[4].innerHTML === "x" && boxes[8].innerHTML === "x" || boxes[0].innerHTML === "0" && boxes[4].innerHTML === "0" && boxes[8].innerHTML === "0" )
        {
            message.innerHTML = `${boxes[0].innerHTML} Player is win`;
            boxes[0].style.backgroundColor = "red";
            boxes[4].style.backgroundColor = "red";
            boxes[8].style.backgroundColor = "red";
            winner = true;
            clear();
        }
        else if(boxes[2].innerHTML === "x" && boxes[4].innerHTML === "x" && boxes[6].innerHTML === "x" || boxes[2].innerHTML === "0" && boxes[4].innerHTML === "0" && boxes[6].innerHTML === "0" )
        {
            message.innerHTML = `${boxes[2].innerHTML} Player is win`;
            boxes[2].style.backgroundColor = "red";
            boxes[4].style.backgroundColor = "red";
            boxes[6].style.backgroundColor = "red";
            winner = true;
            clear();
        }
    });
}

const clear =  () =>
{
    if(winner === true)
    {
        alert(`If you want to play this Game again! Press the Restart Button`);
    }
}

// let reset = document.getElementsByClassName("reset");

// let work = reset.addEventListener('click', () =>
// {
//     for(boxes of element)
//     {
//         element.innerHTML = " ";
//     }
// })



