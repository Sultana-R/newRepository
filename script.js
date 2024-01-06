var countElement= document.getElementsById("counter");
var IncrementE= document.getElementsByClassName("Plusbtn");
var Decrement= document.getElementsByClassName("Minbtn");

var counterUp=0;

IncrementE.addEventListener("click",function(){
    counterUp=counterUp +1;
    countElement.textContent= counterUp;
})