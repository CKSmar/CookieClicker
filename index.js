const counter=document.getElementById("Counter");
const Cookiebtn=document.getElementById("Cookiebtn");
let count=0;
Cookiebtn.addEventListener("click",function(){
    count=count+1
    console.log(count) 
    counter.textContent=count;
})