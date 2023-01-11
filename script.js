//get the minus  buttton
var minusBtn = document.getElementsByClassName("fa-square-minus");
for (let index = 0; index < minusBtn.length; index++) {
  console.log(minusBtn[index]);
  minusBtn[index].addEventListener("click", function (event) {
    if (event.target.nextElementSibling.innerText > 1) {
      event.target.nextElementSibling.innerText--;
      calculateTotal();
    }
  });
}

//Max button
var maxBtn = document.getElementsByClassName("fa-square-plus");
for (let index = 0; index < maxBtn.length; index++) {
  console.log(maxBtn[index]);
  maxBtn[index].addEventListener("click", function (event) {
    event.target.previousElementSibling.innerText++;
    calculateTotal();
  });
}

//remove button
var trashBtn = document.getElementsByClassName("fa-trash");
for (let index = 0; index < trashBtn.length; index++) {
  console.log(trashBtn[index]);
  trashBtn[index].addEventListener("click", function (event) {
    console.log(event.target.closest(".single-item").remove());
    calculateTotal();
  });
}

//thumbs button
var thumbsBtn = document.getElementsByClassName("fa-thumbs-up");
for (let index = 0; index < thumbsBtn.length; index++) {
  console.log(thumbsBtn[index]);
  thumbsBtn[index].addEventListener("click", function (event) {
    event.target.classList.toggle("like");
  });
}

// Total
function calculateTotal() {
  var total = 0;
  var products = document.getElementsByClassName("single-item");
  for (let index = 0; index < products.length; index++) {
    console.log(products[index]);
    var price = products[index].querySelector(".price").innerText;
    console.log(price);
    var quantity = products[index].querySelector(".quantity").innerText;
    console.log(quantity);
    total = total + price * quantity;
  }
  console.log(total);
  document.getElementById("total").innerText = total;
}
calculateTotal();