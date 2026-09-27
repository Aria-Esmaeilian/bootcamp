const conteiner = document.getElementById("conteiner");
const input = document.getElementById("input");
const select = document.getElementById("select");
const deleteinput = document.getElementById("deleteinput");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const loginBox = document.getElementById("loginBox");
const mainPage = document.getElementById("mainPage");

let allpro = [];

async function getproduct() {
  try {
    const get = await fetch("https://dummyjson.com/products");
    const data = await get.json();

    allpro = data.products;
    showproduct(allpro);

    filterByCtegory();
    post();
    put();
  } catch (error) {
    console.log(error);
  }
}

function showproduct(item) {
  const getitem = item.map((item) => {
    return `
      <div class="bg-white p-5 rounded-xl border border-[#e5e5e5] shadow-[0_3px_10px_rgba(0,0,0,0.05)] transition duration-[0.2s] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
        <p class="my-[10px]">Name : ${item.title}</p>
        <pclass="my-[10px]">Category : ${item.category}</pclass=>
        <pclass="my-[10px]">Price : ${item.price}</pclass=>
        <pclass="my-[10px]">Rating : ${item.rating}</pclass=>
        <p class="text-[#666] leading-[1.5] line-clamp-2 overflow-hidden cursor-pointer">${item.description}</p>
      </div>
    `;
  });

  conteiner.innerHTML = getitem.join("");
}

async function serch() {
  try {
    const vale = input.value;

    const get = await fetch(`https://dummyjson.com/products/search?q=${vale}`);

    const data = await get.json();

    showproduct(data.products);
  } catch (error) {
    console.log(error);
  }
}

input.addEventListener("input", serch);

function filterByCtegory() {
  let cat = [];

  allpro.map((item) => {
    return cat.push(item.category);
  });

  cat = [...new Set(cat)];

  select.innerHTML = cat
    .map((item) => {
      return `
        <option value="${item}">${item}</option>
      `;
    })
    .join("");
}

async function getByCtegory() {
  try {
    const value = select.value;

    const get = await fetch(`https://dummyjson.com/products/category/${value}`);

    const data = await get.json();

    showproduct(data.products);
  } catch (error) {
    console.log(error);
  }
}

select.addEventListener("change", getByCtegory);

async function post() {
  try {
    const get = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Aria Esmaeilian",
        category: "Legend",
        price: "priceless",
        rating: "10",
        description:
          "Hi, my name is Arya, and I'm here to have lots of great moments.",
      }),
    });

    const data = await get.json();

    allpro.push(data);

    showproduct(allpro);
  } catch (error) {
    console.log(error);
  }
}

async function put() {
  try {
    const get = await fetch("https://dummyjson.com/products/30", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "111111111111111",
        category: "22222222222",
        price: "33333333333333",
        rating: "4444444444",
        description: "5555555555555555555555",
      }),
    });

    const data = await get.json();

    const index = allpro.findIndex((item) => item.id === 30);

    if (index !== -1) {
      allpro[index] = data;
    }

    showproduct(allpro);
  } catch (error) {
    console.log(error);
  }
}

async function del() {
  try {
    const deletee = Number(deleteinput.value);

    const get = await fetch(`https://dummyjson.com/products/${deletee}`, {
      method: "DELETE",
    });

    const data = await get.json();

    const index = allpro.findIndex((item) => item.id === deletee);

    if (index !== -1) {
      allpro.splice(index, 1);
    }

    showproduct(allpro);
  } catch (error) {
    console.log(error);
  }
}

deleteinput.addEventListener("change", del);

async function login() {
  try {
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;

    const get = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameValue,
        password: passwordValue,
      }),
    });

    const data = await get.json();

    if (data.accessToken) {
      localStorage.setItem("token", data.accessToken);

      loginBox.classList.add("hidden");
      mainPage.classList.remove("hidden");
      console.log(loginBox.classList);

      getproduct();
    }
  } catch (error) {
    console.log(error);
  }
}

function logout() {
  localStorage.removeItem("token");

  mainPage.classList.add("hidden");
  loginBox.classList.remove("hidden");
}

const token = localStorage.getItem("token");

if (token) {
  loginBox.classList.add("hidden");
  mainPage.classList.remove("hidden");

  getproduct();
} else {
  loginBox.classList.remove("hidden");
  mainPage.classList.add("hidden");
}
