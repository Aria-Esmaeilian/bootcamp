const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/api/coins", (req, res) => {
  const requests = [];

  for (let page = 1; page <= 5; page++) {
    requests.push(
      new Promise((resolve, reject) => {
        exec(
          `curl.exe "https://api.wallex.ir/v2/coin-market-list?page=${page}&per_page=50&sortsby=rank"`,
          (error, stdout, stderr) => {
            if (error) {
              reject(error);
              return;
            }

            try {
              const data = JSON.parse(stdout);
              resolve(data.result);
            } catch (error) {
              reject(error);
            }
          },
        );
      }),
    );
  }

  Promise.all(requests)
    .then((results) => {
      const allCoins = results.flat();

      console.log("COINS:", allCoins.length);

      res.json({
        result: allCoins,
      });
    })
    .catch((error) => {
      console.log(error);

      res.status(500).json({
        error: "Could not fetch Wallex data",
      });
    });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
