// var cPizza = document.getElementById("clickPizza");
// var cSalad = document.getElementById("clickSalad");
// var cSandwich = document.getElementById("clickSandwich");
// var cdessert = document.getElementById("clickDessert");
// var cMenu = document.getElementById("clickMenu");

// var sPizza = document.getElementsByClassName("das-pizza");
// var sSandwich = document.getElementsByClassName("das-sandwich");
// var sdessert = document.getElementsByClassName("das-dessert");
// var sSalad = document.getElementsByClassName("das-salad");
// var sMenu = document.getElementsByClassName("das-menu");


// sSalad.style = "display:block";

// cMenu.onclick = () => {
//   sPizza.style = "display:none";
//   sSalad.style = "display:none";
//   sSandwich.style = "display:none";
//   sdessert.style = "display:none";
//   sMenu.style = "display:block";
// };

// cPizza.onclick = () => {
//   sPizza.style = "display:block";
//   sSalad.style = "display:none";
//   sSandwich.style = "display:none";
//   sdessert.style = "display:none";
//   sMenu.style = "display:none";
// };

var addPizza = document.querySelectorAll("#addPizzaBtn");
var addSalad = document.querySelectorAll("#addSaladBtn");
var addSandwich = document.querySelectorAll("#addSandwichBtn");
var addDesert = document.querySelectorAll("#addDessertBtn");
var totalPrice = 0;

document.querySelector("#totalPrice span").innerText = totalPrice;

function addItem(x) {
  x.forEach(function (el) {
    el.addEventListener("click", function (el) {
      var table = document.getElementById("cartTable");
      var row = table.insertRow();
      var ItemName = row.insertCell(0);
      var Price = row.insertCell(1);

      ItemName.innerHTML = el.target.innerHTML;

      if (this.id == "addSandwichBtn") {
        Price.innerHTML = "10";
        totalPrice += 10;
      } else if (this.id == "addSaladBtn") {
        Price.innerHTML = "5";
        totalPrice += 5;
      } else if (this.id == "addDessertBtn") {
        Price.innerHTML = "9";
        totalPrice += 9;
      } else {
        Price.innerHTML = "20";
        totalPrice += 20;
      }
      document.querySelector("#totalPrice span").innerText = totalPrice;
    });
  });
}

addItem(addPizza);
addItem(addSalad);
addItem(addSandwich);
addItem(addDesert);
