async function getCard() {
  try {
    const card = await fetch("https://fakestoreapi.com/carts");
    const data = await card.json();
    data.map((item) => console.log(item.id));
  } catch (error) {
    console.log(error);
  }
}
// getCard();

/////////////////////////////////

const getitem = fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    const res = data.filter((item) => item.price > 50);
    console.log(
      res.sort((a, b) => a.price - b.price).map((item) => item.title),
    );
  })
  .catch((error) => {
    console.log(error);
  });

///////////////////////////////

async function fofo() {
  try {
    const [groduc, cards] = await Promise.all([
      fetch("https://fakestoreapi.com/products"),
      fetch("https://fakestoreapi.com/carts"),
    ]);
    const [groducshow, cardsshow] = await Promise.all([
      groduc.json(),
      cards.json(),
    ]);
    console.log("prodoucts", groducshow.length);
    console.log("card", cardsshow.length);
  } catch (error) {
    console.log(error);
  }
}
fofo();

////////////////////////////

const products = fetch("https://fakestoreapi.com/products");
const carts = fetch("https://fakestoreapi.com/carts");

Promise.all([products, carts])
  .then((responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((data) => {
    console.log("Products:", data[0].length);
    console.log("Carts:", data[1].length);
  })
  .catch((error) => {
    console.log(error);
  });

//////////////////////////

async function getData() {
  try {
    const [productsResponse, cartsResponse] = await Promise.all([
      fetch("https://fakestoreapi.com/products"),
      fetch("https://fakestoreapi.com/carts"),
    ]);

    const [products, carts] = await Promise.all([
      productsResponse.json(),
      cartsResponse.json(),
    ]);

    console.log("Products:", products.length);
    console.log("Carts:", carts.length);
  } catch (error) {
    console.log(error);
  }
}

getData();
