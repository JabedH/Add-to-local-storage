const productName = document.getElementById("productName").value;
const totalPrice = document.getElementById("price").value;
const addBtn = document.getElementById("addBtn");

//---------

// addBtn.addEventListener("click", function () {
//   const productName = document.getElementById("productName").value;
//   const totalPrice = document.getElementById("price").value;
//   const productAndPrice = productName + totalPrice;
//   console.table(productAndPrice);
// });

//
const getValue = () => {
  const totalPrice = document.getElementById("price").value;
  const productName = document.getElementById("productName").value;
  if (!productName) {
    return;
  }

  showList(productName, totalPrice);
  addCart(productName);
};
const showList = (name, price) => {
  const getShowingList = document.getElementById("showList");
  const tr = document.createElement("tr");
  tr.innerHTML = `<td class="col-md-8">${name}</td>
  <td>${price}$</td>`;
  getShowingList.appendChild(tr);
};
// cart checker in local storage is it available or not. (console.log)
// go to console and call this function (getCart())
const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObject;
  if (cart) {
    cartObject = JSON.parse(cart);
  } else {
    cartObject = {};
  }
  return cartObject;
};
// add cart
const addCart = (name) => {
  const cart = getCart();
  cart[name] = 1;
  const cartStringiFied = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringiFied);
};

// display local storage cart
const displayLocalStorage = () => {
  const cart = getCart();
  for (let name in cart) {
    showList(name);
  }
};
displayLocalStorage();
const displayLocalStoragePrice = () => {
  const cart = getCart();
  for (let name in cart) {
    showList(price);
  }
};
displayLocalStoragePrice();
