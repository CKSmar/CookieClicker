const counter=document.getElementById("Counter");
const Cookiebtn=document.getElementById("Cookiebtn");
const stickPriceEl=document.getElementById("stickPriceEl")
const stickBtn=document.getElementById("stickBtn")
let count=0;
let stickPrice=15;
let numSticks=0
Cookiebtn.addEventListener("click",function(){
    count=count+1
    console.log(count) 
    counter.textContent=Math.floor(count);
})
stickBtn.addEventListener("click",function(){
    if(count>=stickPrice){
        count=count-stickPrice
        counter.textContent=count;
        numSticks+=1
        stickPrice=Math.floor(stickPrice*1.15)
        stickPriceEl.textContent=stickPrice
        
    }
    
})
setTimeout(function() {
    setInterval(function(){
        count+=numSticks/30;
        counter.textContent = Math.floor(count);
    },100)
})
//If you change your name to chance is the goat, you get access to admin comands and can give your self unlimited cookies