const counter=document.getElementById("Counter");
const Cookiebtn=document.getElementById("Cookiebtn");
const stickPriceEl=document.getElementById("stickPriceEl")
const stickBtn=document.getElementById("stickBtn")
const numberOfSticksEl=document.getElementById("numberOfSticks")
const amountMadeBySticksEl=document.getElementById("amountMadeBySticks")
const productionMadeBySticksEl=document.getElementById("productionMadeBySticks")
const nameInput=document.getElementById("name")
const shoppingListEl=document.getElementById("shoppingList")
const upgradesBtn=document.getElementById("upgradesBtn")
const shoppingDiv=document.getElementById("shoppingDiv")
let isOnShopping=true
let count=0;
let stickPrice=15
let numSticks=0
let productionMadeBySticks=0
let amountMadeBySticks=0
let adminActivated=false
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
        productionMadeBySticks=Math.floor((numSticks/3)*100)/100
        numberOfSticksEl.textContent=numSticks
        productionMadeBySticksEl.textContent=productionMadeBySticks
        
    }

    
})
setTimeout(function() {
    setInterval(function(){
        count+=numSticks/30;
        counter.textContent = Math.floor(count);
        amountMadeBySticks+=numSticks/30
        amountMadeBySticksEl.textContent=Math.floor(amountMadeBySticks)
    },100)
})


nameInput.addEventListener("change",function(){
    if(nameInput.value.toLowerCase()=="chance"&&!adminActivated){
    count+=9999999
    counter.textContent=count
    adminActivated=true
    }
})
upgradesBtn.addEventListener("click",function(){
    shoppingDiv.style.display="none"
    if(!isOnShopping){
        isOnShopping=true
        shoppingDiv.style.display="flex"
    }
    else{
        isOnShopping=false
    }
})
//If you change your name to chance is the goat, you get access to admin comands and can give your self unlimited cookies
//make more shopping items get images for items add a better background for the whole thing and shopping items make stats in the middle 
// EX(how many sticks how much each stick gives per second and howmuch of your total output per second is done by which shopping items.)
//how to make save on refresh 
// make the upgrades pages show when shopping not and vice versa use a 