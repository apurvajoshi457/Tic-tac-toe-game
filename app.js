let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let newgame_btn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
const winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const resetgame=()=>{
turnO=true;
enableAllBoxes();
msgContainer.classList.add("hide");
}

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO==true){
            box.innerHTML="O";
            turnO=false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner=()=>{
    for(pattern of winningPatterns){
        let pos1val=boxes[pattern[0]].innerHTML;
        let pos2val=boxes[pattern[1]].innerHTML;
        let pos3val=boxes[pattern[2]].innerHTML;

        if(pos1val !="",pos2val !="",pos3val !=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("Winner is ",pos1val);
                shoWinner(pos1val);
        }
    }
        
    }
};

const shoWinner=(winner)=>{
    msg.innerText=`Congratulations ${winner} You are the winner`;
    msgContainer.classList.remove("hide");  
    disableAllBoxes();
};

const disableAllBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableAllBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}


newgame_btn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);