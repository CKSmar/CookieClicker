const counter=document.getElementById("Counter");
const Cookiebtn=document.getElementById("Cookiebtn");
const stickPriceEl=document.getElementById("stickPriceEl")
const stickBtn=document.getElementById("stickBtn")
const numberOfSticksEl=document.getElementById("numberOfSticks")
const amountMadeBySticksEl=document.getElementById("amountMadeBySticks")
const productionMadeBySticksEl=document.getElementById("productionMadeBySticks")
let count=0;
let stickPrice=15
let numSticks=0
let amountMadeBySticks=0
let productionMadeBySticks=0
Cookiebtn.addEventListener("click",function(){
    count=count+1
    console.log(count) 
    counter.textContent=Math.floor(count);
})
stickBtn.addEventListener("click",function(){
    if(count>=stickPrice){
        count=count-stickPrice
        counter.textContent=Math.floor(count);
        numSticks+=1
        stickPrice=Math.floor(stickPrice*1.15)
        stickPriceEl.textContent=stickPrice
        amountMadeBySticks=Math.floor(numSticks*.33*100)/100
        
    }
    
})
setTimeout(function() {
    setInterval(function(){
        count+=numSticks/30;
        counter.textContent = Math.floor(count);
    },100)
})
//If you change your name to chance is the goat, you get access to admin comands and can give your self unlimited cookies
//make more shopping items get images for items add a better background for the whole thing and shopping items make stats in the middle 
// EX(how many sticks how much each stick gives per second and howmuch of your total output per second is done by which shopping items.)
//how to make save on refresh 