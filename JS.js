user_score=0;
computer_score=0;

let user=document.querySelector("#your");
let comp=document.querySelector("#computer");
let choice=document.querySelectorAll(".choice");
let show=document.querySelector("#answer");

game = (a) =>{    
    n=Math.floor(Math.random()*3);
    c="";
    if(n==0) c="Rock";
    if(n==1) c="Paper";
    if(n==2) c="Scissor";
    console.log(c);

    if(c==a){
        show.classList.remove("hide");
        if(n==0) show.innerText="Draw, You both Choosed Rock";
        if(n==1) show.innerText="Draw, You both Choosed Paper";
        if(n==2) show.innerText="Draw, You both Choosed Scissor";
    }

    if((c=="Rock" && a=="Paper") || (c=="Scissor" && a=="Rock") || (c=="Paper" && a=="Scissor")){
        show.classList.remove("hide");
        show.innerText="You Won, Computer Choosed "+c;
        user_score++; 
    }

    if((c=="Paper" && a=="Rock") || (c=="Rock" && a=="Scissor") || (c=="Scissor" && a=="Paper")){
        show.classList.remove("hide");
        show.innerText="You Lost, Computer Choosed "+c;
        computer_score++;
    }  

    user.innerText=user_score;
    comp.innerText=computer_score;
}

choice.forEach((x) => {
    x.addEventListener("click", () => {
        let a=x.getAttribute("id");
        game(a);
    });
});