



// // let arr = [];
// // let inputer="x";
// // for(let i=1; i<9;i++)
// // {
// //      if((i % 2) === 1)
// //      {
// //          inputer +="o";
// //      }
// //      else
// //      {
// //          inputer +="x";
// //      }
// // }



// /////////////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////


// // let flag = "x"
// // function elementUpdater()
// // {   
// //     return flag === "x" ? "0" : "x";
// // }

// // let box = document.querySelector('.cont');
// // Array.from(box).forEach(element =>{
// //     let boxes = element.querySelector('.boxtext');
// //     element.addEventListener("click", () => 
// //     {

// //     })
// // });

// let box = document.querySelector(".cont");
// box.addEventListener("click", myfunction());
// let playerturn  = true;
// let value;
// function myfunction(){
// let boxtext = element.querySelector(".boxtext");
// if(playerturn)
// {
//     boxtext.innerHTML = "x";
//     playerturn = ! playerturn;
// }
// else{
//     boxtext.innerHTML = "0";
//     playerturn = ! playerturn;
// }
// }




// let turn = "x";

// const changeTurn = () =>
// {
//     return turn === "x"? "0" : "x";
// }

// let boxes = document.getElementsByClassName("cont");
// Array.from(boxes).forEach(element =>
// {
//     let boxtext = element.querySelector('.text');
//     element.addEventListener("click",() => {
//         if(boxtext.innerText === '')
//         {
//              boxtext.innerText = turn;
//              turn = changeTurn();   
//              winerChecker();
//         }
//     })

// });

// let box1,box2,box3,box4,box5,box6,box7,box8,box9;
// box1 = document.getElementById("column1").innerHTML;
// box2 = document.getElementById("column2").innerHTML;
// box3 = document.getElementById("column3").innerHTML;
// box4 = document.getElementById("column4").innerHTML;
// box5 = document.getElementById("column5").innerHTML;
// box6 = document.getElementById("column6").innerHTML;
// box7 = document.getElementById("column7").innerHTML;
// box8 = document.getElementById("column8").innerHTML;
// box9 = document.getElementById("column9").innerHTML;

// function winerChecker()
// {
//     if((box1 == "x" && box2 == "x" && box3 == "x") || (box1 == "0" && box2 == "0" && box3 == "0") )
//     {
//         alert("you win")
//     }
//     else if(box4 === box5 && box5 === box6)
//     {}
//     else if(box7 === box8 && box8 === box9)
//     {}
//     else if(box1 === box4 && box4 === box7)
//     {}
//     else if(box2 === box5 && box5 === box8)
//     {}
//     else if(box3 === box6 && box6 === box9)
//     {}
//     else if(box1 === box5 && box5 === box9)
//     {}
//     else if(box3 === box5 && box5 === box7)
//     {}
//     else
//     {}
// }

