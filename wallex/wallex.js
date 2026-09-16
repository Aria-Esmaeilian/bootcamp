const holymoly = document.getElementById("holymoly");

const pages = document.getElementById("pages");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const pageInfo = document.getElementById("pageInfo");

const coinModal = document.getElementById("coinModal");
const closeModal = document.getElementById("closeModal");
const modalInfo = document.getElementById("modalInfo");

let currentPage = 1;
const itemsPerPage = 10;
let allCoins = [];

async function getitem() {
  try {
    const get = await fetch("http://localhost:3000/api/coins");

    const resive = await get.json();

    allCoins = resive.result;

    console.log("Total coins:", allCoins.length);

    showpage();
    showPagination();
  } catch (error) {
    console.log(error);
  }
}

function showpage() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const coins = allCoins.slice(start, end);

  holymoly.innerHTML = coins
    .map((coin) => {
      const usdt = coin.quotes?.USDT;
      const tmn = coin.quotes?.TMN;

      const change = usdt?.percentChange24h;

      let changeHtml;

      if (change === undefined || change === null) {
        changeHtml = `<div class="change empty">---</div>`;
      } else if (Number(change) < 0) {
        changeHtml = `<div class="change negative">↘ ${change}%</div>`;
      } else {
        changeHtml = `<div class="change positive">↗ ${change}%</div>`;
      }

      return `
        <div class="coin-row">

          <div class="coin-info">

            <img
              src="https://assets.coincap.io/assets/icons/${coin.baseAsset.toLowerCase()}@2x.png"
              alt="${coin.baseAsset}"
            >

            <div>
              <strong>${coin.faBaseAsset}</strong>
              <span>${coin.baseAsset}</span>
            </div>

          </div>

          <div>
            ${tmn ? Number(tmn.price).toLocaleString() : "---"}
          </div>

          ${changeHtml}

          <div>
            ${usdt ? Number(usdt.price).toLocaleString() : "---"}
          </div>

          <div>
            ${usdt ? Number(usdt.marketCap).toLocaleString() : "---"}
          </div>

          <button class="trade-btn" data-id="${coin.baseAsset}">
            خرید و فروش آنی
          </button>

        </div>
      `;
    })
    .join("");
}

function openModal(coin) {
  const usdt = coin.quotes?.USDT;
  const tmn = coin.quotes?.TMN;

  coinModal.classList.add("show");

  modalInfo.innerHTML = `
    <div class="modal-title">

      <img
        src="https://assets.coincap.io/assets/icons/${coin.baseAsset.toLowerCase()}@2x.png"
        alt="${coin.baseAsset}"
      >

      <div>
        <h2>${coin.faBaseAsset || "---"}</h2>
        <span>${coin.enBaseAsset || coin.baseAsset}</span>
      </div>

    </div>

    <div class="modal-grid">

      <div class="info-box">
        <span>نماد</span>
        <strong>${coin.baseAsset || "---"}</strong>
      </div>

      <div class="info-box">
        <span>نام فارسی</span>
        <strong>${coin.faBaseAsset || "---"}</strong>
      </div>

      <div class="info-box">
        <span>نام انگلیسی</span>
        <strong>${coin.enBaseAsset || "---"}</strong>
      </div>

      <div class="info-box">
        <span>قیمت تومان</span>
        <strong>
          ${tmn?.price ? Number(tmn.price).toLocaleString() : "---"}
        </strong>
      </div>

      <div class="info-box">
        <span>قیمت USDT</span>
        <strong>
          ${usdt?.price ? Number(usdt.price).toLocaleString() : "---"}
        </strong>
      </div>

      <div class="info-box">
        <span>تغییر ۲۴ ساعت</span>
        <strong>
          ${usdt?.percentChange24h ?? "---"}%
        </strong>
      </div>

      <div class="info-box">
        <span>ارزش بازار</span>
        <strong>
          ${usdt?.marketCap ? Number(usdt.marketCap).toLocaleString() : "---"}
        </strong>
      </div>

      <div class="info-box">
        <span>حجم معاملات ۲۴ ساعت</span>
        <strong>
          ${usdt?.volume24h ? Number(usdt.volume24h).toLocaleString() : "---"}
        </strong>
      </div>

      <div class="info-box">
        <span>بالاترین قیمت ۲۴ ساعت</span>
        <strong>
          ${usdt?.dailyHighPrice ? Number(usdt.dailyHighPrice).toLocaleString() : "---"}
        </strong>
      </div>

      <div class="info-box">
        <span>پایین‌ترین قیمت ۲۴ ساعت</span>
        <strong>
          ${usdt?.dailyLowPrice ? Number(usdt.dailyLowPrice).toLocaleString() : "---"}
        </strong>
      </div>

      <div class="info-box">
        <span>ارز جدید</span>
        <strong>
          ${coin.isNew ? "بله" : "خیر"}
        </strong>
      </div>

      <div class="info-box">
        <span>فعال در بازار</span>
        <strong>
          ${coin.isInMarket ? "بله" : "خیر"}
        </strong>
      </div>

      <div class="info-box">
        <span>کارمزد شبکه</span>
        <strong>
          ${
            coin.networkFees?.[coin.baseAsset] !== undefined
              ? coin.networkFees[coin.baseAsset]
              : "---"
          }
        </strong>
      </div>

    </div>
  `;
}

holymoly.addEventListener("click", (event) => {
  const button = event.target.closest(".trade-btn");

  if (!button) return;

  const symbol = button.dataset.id;

  const coin = allCoins.find((item) => item.baseAsset === symbol);

  if (coin) {
    openModal(coin);
  }
});

closeModal.addEventListener("click", () => {
  coinModal.classList.remove("show");
});

coinModal.addEventListener("click", (event) => {
  if (event.target === coinModal) {
    coinModal.classList.remove("show");
  }
});

function showPagination() {
  const totalPages = Math.ceil(allCoins.length / itemsPerPage);

  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

  pages.innerHTML = "";

  function createButton(page) {
    const button = document.createElement("button");

    button.textContent = page;

    if (page === currentPage) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      currentPage = page;

      showpage();
      showPagination();
    });

    pages.appendChild(button);
  }

  function createDots() {
    const dots = document.createElement("span");

    dots.textContent = "...";

    pages.appendChild(dots);
  }

  createButton(1);

  if (currentPage > 4) {
    createDots();
  }

  const start = Math.max(2, currentPage - 2);

  const end = Math.min(totalPages - 1, currentPage + 2);

  for (let i = start; i <= end; i++) {
    createButton(i);
  }

  if (currentPage < totalPages - 3) {
    createDots();
  }

  if (totalPages > 1) {
    createButton(totalPages);
  }

  prev.disabled = currentPage === 1;
  next.disabled = currentPage === totalPages;
}

prev.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;

    showpage();
    showPagination();
  }
});

next.addEventListener("click", () => {
  const totalPages = Math.ceil(allCoins.length / itemsPerPage);

  if (currentPage < totalPages) {
    currentPage++;

    showpage();
    showPagination();
  }
});

getitem();
