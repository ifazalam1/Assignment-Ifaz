var product = JSON.stringify(product);
var cartStorage = JSON.parse(window.localStorage.getItem("cart") || "[]");
// window.localStorage.setItem("cart", JSON.stringify(cartStorage));
var carItem = {};
var cartCount = 0;

if (cartStorage.length === 0) {
  for (var i = 0; i < cartStorage.length; i++) {
    if (cartStorage[i].id == product._id) {
      carItem = cartStorage[i];
    }
  }
} else {
  carItem = {
    id: product._id,
    cartCount: cartCount,
  };
}

var newQuantity = product.quantity - carItem.cartCount;
document.getElementById("qty").innerHTML = newQuantity;

document.getElementById("cartAdd").addEventListener("click", (e) => {
  if (carItem.cartCount >= 0) carItem.cartCount--;
  if (cartStorage.length === 0) {
    for (var i = 0; i < cartStorage.length; i++) {
      if (cartStorage[i].id == product._id) {
        cartStorage[i] = carItem;
      }
    }
  } else {
    cartStorage.push(carItem);
  }
  window.localStorage.setItem("cart", JSON.stringify(cartStorage));
});
