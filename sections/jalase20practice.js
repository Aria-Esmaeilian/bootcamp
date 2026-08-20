var productName = document.getElementById("productName");
var category = document.getElementById("productCategory");
var price = document.getElementById("productPrice");
var quantity = document.getElementById("productQuantity");
var addBtn = document.getElementById("addBtn");
var clearBtn = document.getElementById("clearBtn");
var searchProduct = document.getElementById("searchProduct");
var categoryFilter = document.getElementById("categoryFilter");
var editIndex = -1;

var products = JSON.parse(localStorage.getItem("user")) || [];

function showProducts() {
  document.getElementById("products").innerHTML = "";
  document.getElementById("productCount").innerHTML =
    products.length + " Products";
  for (var i = 0; i < products.length; i++) {
    document.getElementById("products").innerHTML += `
    <tr>
      <td>${i + 1}</td>
      <td>${products[i].name}</td>
      <td>${products[i].category}</td>
      <td>${products[i].price}</td>
      <td>${products[i].quantity}</td>
      <td>
        <button class="edit-btn" onclick="handeledit(${i})">Edit</button>
        <button class="delete-btn"onclick="handeldelete(${i})">Delete</button>
      </td>
    </tr>
  `;
  }
}
function showCategories() {
  categoryFilter.innerHTML = `<option value="ALL">ALL</option>`;
  for (var i = 0; i < products.length; i++) {
    var categoryName = products[i].category;
    var exists = false;
    for (var j = 0; j < i; j++) {
      if (products[j].category === categoryName) {
        exists = true;
        break;
      }
    }
    if (exists === false) {
      categoryFilter.innerHTML += `
          <option value="${categoryName}">
          ${categoryName}
          </option>
          `;
    }
  }
}
function filterCategory() {
  var categoryValue = categoryFilter.value;

  document.getElementById("products").innerHTML = "";

  for (var i = 0; i < products.length; i++) {
    if (categoryValue === "ALL" || categoryValue === products[i].category) {
      document.getElementById("products").innerHTML += `
      <tr>
      <td>${i + 1}</td>
      <td>${products[i].name}</td>
      <td>${products[i].category}</td>
      <td>${products[i].price}</td>
      <td>${products[i].quantity}</td>
          <td>
            <button class="edit-btn" onclick="handeledit(${i})">Edit</button>
            <button class="delete-btn" onclick="handeldelete(${i})">Delete</button>
          </td>
      </tr>`;
    }
  }
}
function searchProducts() {
  var search = searchProduct.value.trim().toLowerCase();
  document.getElementById("products").innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].name.trim().toLowerCase().includes(search)) {
      document.getElementById("products").innerHTML += `
    <tr>
      <td>${i + 1}</td>
      <td>${products[i].name}</td>
      <td>${products[i].category}</td>
      <td>${products[i].price}</td>
      <td>${products[i].quantity}</td>
      <td>
        <button class="edit-btn" onclick="handeledit(${i})">Edit</button>
        <button class="delete-btn"onclick="handeldelete(${i})">Delete</button>
      </td>
    </tr>
  `;
    }
  }
}
function handeledit(index) {
  for (var i = 0; i < products.length; i++) {
    if (i == index) {
      productName.value = products[i].name;
      category.value = products[i].category;
      price.value = products[i].price;
      quantity.value = products[i].quantity;

      addBtn.innerHTML = "Edit";
      editIndex = index;
    }
  }
  showProducts();
}
function handeldelete(index) {
  var newProducts = [];
  for (var i = 0; i < products.length; i++) {
    if (i !== index) {
      newProducts.push(products[i]);
    }
  }
  products = newProducts;
  localStorage.setItem("user", JSON.stringify(products));
  showProducts();
  showCategories();
}
function handelclikclear() {
  productName.value = "";
  category.value = "";
  price.value = "";
  quantity.value = "";
  addBtn.innerHTML = "+ Add product";
}
function handelclikadd() {
  addBtn.innerHTML = "+ Add product";
  var product = {
    name: productName.value,
    category: category.value,
    price: price.value,
    quantity: quantity.value,
  };
  if (
    !productName.value ||
    !category.value ||
    !price.value ||
    !quantity.value
  ) {
    alert("Please fill in the field.");
    return;
  }
  for (var i = 0; i < products.length; i++) {
    if (
      productName.value === products[i].name &&
      category.value === products[i].category &&
      price.value === products[i].price &&
      quantity.value === products[i].quantity
    ) {
      alert("Already added");
      return;
    }
  }
  if (editIndex !== -1) {
    ((products[editIndex].name = productName.value),
      (products[editIndex].category = category.value),
      (products[editIndex].price = price.value),
      (products[editIndex].quantity = quantity.value),
      (editIndex = -1));
    localStorage.setItem("user", JSON.stringify(products));
    showProducts();
    handelclikclear();
    showCategories();
    return;
  }

  handelclikclear();
  products.push(product);
  localStorage.setItem("user", JSON.stringify(products));
  showProducts();
  showCategories();
}
showProducts();
showCategories();
