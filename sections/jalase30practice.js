const showitem = document.getElementById("showitem");
let allusers = [];

async function users() {
  try {
    const getusers = await fetch("https://dummyjson.com/users");
    const regetusers = await getusers.json();
    allusers = regetusers.users;
    showusers(allusers);
  } catch (error) {
    console.log(error);
  }
}
function showusers(item) {
  const inpot = item.map((item) => {
    return `<div class="users">${item.username}</div>`;
  });
  showitem.innerHTML = inpot.join("");
}

async function postitem() {
  const post = await fetch("https://dummyjson.com/users/add", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "Aria Esmaeilian",
      age: 24,
    }),
  });
  const data = await post.json();
  allusers.push(data);
  showusers(allusers);
}
async function postitem2() {
  const getitem = await fetch("https://dummyjson.com/users/add", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "json statham",
      age: 24,
    }),
  });
  const data = await getitem.json();
  allusers.push(data);
  showusers(allusers);
}
async function put() {
  try {
    const get = await fetch("https://dummyjson.com/users/22", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "json statham hoseinabadi",
        age: 24,
      }),
    });

    const data = await get.json();
    const index = allusers.findIndex((item) => item.id === 22);
    allusers[index] = data;
    showusers(allusers);
  } catch (error) {
    console.log(error);
  }
}

async function start() {
  await users();
  await postitem();
  await postitem2();
  await put();
}
start();
