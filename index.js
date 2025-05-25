const counter=document.getElementById("Counter");
const Cookiebtn=document.getElementById("Cookiebtn");
const stickPriceEl=document.getElementById("stickPriceEl")
const stickBtn=document.getElementById("stickBtn")
let count=0;
let stickPrice=15;
Cookiebtn.addEventListener("click",function(){
    count=count+1
    console.log(count) 
    counter.textContent=count;
})
stickPriceEl.textContent=16;
stickBtn.addEventListener("click",function(){
    stickPrice=Math.floor(stickPrice*1.2)
    stickPriceEl.textContent=stickPrice
})
