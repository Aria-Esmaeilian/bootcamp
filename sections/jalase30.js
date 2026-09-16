const productlist = document.getElementById("productlist");

async function gg() {
  try {
    const card = await fetch("https://dummyjson.com/products");
    const showcard = await card.json();
    print(showcard.products);
  } catch (error) {
    console.log(error);
  }
}
function print(product) {
  const cards = product.map((item) => {
    return `
      <div class="card">${item.title}</div>
    `;
  });
  productlist.innerHTML = cards.join("");
}

gg();
