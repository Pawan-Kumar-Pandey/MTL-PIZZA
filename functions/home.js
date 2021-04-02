var allSandwichesBtn=document.getElementById('sandwiches-btn');
var allSignaturePizzaBtn=document.getElementById('signaturePizza-btn');
var allPizzaBtn=document.getElementById('createPizza-btn');
var allSaladBtn=document.getElementById('salad-btn');
var alldessertbtn=document.getElementById('dessert-btn');


var allSandWiches=document.getElementById('Sand-wiches');
var allSignaturePizza=document.getElementById('selectPizza');
var allPizza=document.getElementById('create-your-pizza');
var allSalad=document.getElementById('salad');
var allDessert=document.getElementById('dessert');



allPizza.style="display:block";


allPizzaBtn.onclick=()=>{
    allPizza.style="display:block";
    allSignaturePizza.style="display:none";
    allSandWiches.style="display:none";
    allSalad.style="display:none";
    allDessert.style="display:none";
    
}

allSignaturePizzaBtn.onclick=()=>{
    allPizza.style="display:none";
    allSignaturePizza.style="display:block";
    allSandWiches.style="display:none";
    allSalad.style="display:none";
    allDessert.style="display:none";
    
}

allSandwichesBtn.onclick=()=>{
    allPizza.style="display:none";
    allSignaturePizza.style="display:none";
    allSandWiches.style="display:block";
    allSalad.style="display:none";
    allDessert.style="display:none";
}

allSaladBtn.onclick=()=>{
    allPizza.style="display:none";
    allSignaturePizza.style="display:none";
    allSandWiches.style="display:none";
    allSalad.style="display:block";
    allDessert.style="display:none";
}

alldessertbtn.onclick=()=>{
    allPizza.style="display:none";
    allSignaturePizza.style="display:none";
    allSandWiches.style="display:none";
    allSalad.style="display:none";
    allDessert.style="display:block";
}