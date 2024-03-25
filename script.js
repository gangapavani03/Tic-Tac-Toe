let boxes=document.querySelectorAll(".box");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#newGame");
let turnO=true;
let c=0;
const winPatterns=[[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
           if(turnO){
            box.innerText="O";
            turnO=false;
            box.style.color="black";
           }
           else{
            box.innerText="X";
            turnO=true;
            box.style.color="red";
           }
           box.disabled=true;
           c++;
           checkWinner();
    });
});
const checkWinner=()=>{
    for(let pattern of winPatterns){
       let pos1Val=boxes[pattern[0]].innerText;
       let pos2Val=boxes[pattern[1]].innerText;
       let pos3Val=boxes[pattern[2]].innerText;
      
       if(pos1Val!="" && pos2Val!="" && pos3Val!="" ){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            showWinner(pos1Val);
        }
      
       }
       
    }
    if(c===boxes.length){
        showDraw();
       }
        
};
const showDraw=()=>{
    msg.innerText="Its a Draw!!!, No one won";
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const showWinner=(winner)=>{
       msg.innerText=`Congratulations, the Winner is ${winner} !!!`;
       msgContainer.classList.remove("hide");
       disableBoxes();
};
const disableBoxes=()=>{
      for(let box of boxes){
        box.disabled=true;
      }
};
const enableBoxes=()=>{
    for(let box of boxes){
         box.disabled=false;
        box.innerText="";
    }
}
const resetGame=()=>{
     turnO=true;
     enableBoxes();
     msgContainer.classList.add("hide");
};
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);