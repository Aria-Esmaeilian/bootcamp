const showitem = document.getElementById("showitem");
const searchInput = document.getElementById("searchInput");
const sction = document.getElementById("sction");
const mealstaly = document.getElementById("mealstaly");

let allrec = [];

async function users() {
  try {
    const getusers = await fetch("https://dummyjson.com/recipes");
    const regetusers = await getusers.json();

    allrec = regetusers.recipes;

    showusers(allrec);

    delee();
    put();
    post();
    getsction();
    getnamememe();
  } catch (error) {
    console.log(error);
  }
}

function showusers(item) {
  const inpot = item.map((item) => {
    return `
      <div class="cord">
        <img class="imggp" src="${item.image}" />
        <div class="users">${item.name}</div>
      </div>
    `;
  });

  showitem.innerHTML = inpot.join("");
}

async function filteritem() {
  try {
    const searchValue = searchInput.value;

    const get = await fetch(
      `https://dummyjson.com/recipes/search?q=${searchValue}`,
    );

    const data = await get.json();

    showusers(data.recipes);
  } catch (err) {
    console.log(err);
  }
}

searchInput.addEventListener("input", filteritem);

/////////////////////////////////////////////////////////////////

function getsction() {
  let foli = [];
  allrec.map((item) => {
    item.tags.map((item2) => {
      foli.push(item2);
    });
  });

  foli = [...new Set(foli)];

  sction.innerHTML = foli
    .map((item) => {
      return `
        <option value="${item}">${item}</option>
      `;
    })
    .join("");
}

async function sctionfilter() {
  try {
    const sectionValue = sction.value;

    const get = await fetch(
      `https://dummyjson.com/recipes/tag/${sectionValue}`,
    );

    const data = await get.json();

    showusers(data.recipes);
  } catch (err) {
    console.log(err);
  }
}

sction.addEventListener("change", sctionfilter);

/////////////////////////////////////////////////////////////////

function getnamememe() {
  let deshsh = [];
  allrec.map((item) => {
    item.mealType.map((item2) => {
      deshsh.push(item2);
    });
  });
  deshsh = [...new Set(deshsh)];

  mealstaly.innerHTML = deshsh
    .map((tiem) => {
      return `
            <option value="${tiem}">${tiem}</option>
`;
    })
    .join("");
}

async function namemame() {
  try {
    const mealValue = mealstaly.value;
    const get = await fetch(
      `https://dummyjson.com/recipes/meal-type/${mealValue}`,
    );
    const data = await get.json();
    showusers(data.recipes);
  } catch (eee) {
    console.log(eee);
  }
}

mealstaly.addEventListener("change", namemame);

/////////////////////////////////////////////////////////////////

async function post() {
  try {
    const get = await fetch("https://dummyjson.com/recipes/add", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Aria pizza",
      }),
    });
    const data = await get.json();
    allrec.push(data);
    showusers(allrec);
  } catch (ee) {
    console.log(ee);
  }
}

async function put() {
  try {
    const get = await fetch("https://dummyjson.com/recipes/1", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "italian MAMA mia",
      }),
    });
    const data = await get.json();
    const index = allrec.findIndex((item) => item.id === 1);
    allrec[index] = data;
    showusers(allrec);
  } catch (error) {
    console.log(error);
  }
}

async function delee() {
  try {
    const get = await fetch("https://dummyjson.com/recipes/2", {
      method: "delete",
    });
    const data = await get.json();
    const index = allrec.findIndex((item) => item.id === 2);
    allrec.splice(index, 1);
    showusers(allrec);
  } catch (error) {
    console.log(error);
  }
}

users();
