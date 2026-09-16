import movies from "./250_top_imdb.js";
import * as detail from "./detail.js";

const wraperdiv = document.getElementById("movies-container");
const pagination = document.getElementById("pagination");

let nowpage = 1;
let itemprepage = 10;

export function showMovies(movieList) {
  const cards = movieList.map((item) => {
    const index = movies.indexOf(item);

    return `
    <div class="movie-card">
      <div>
        <img class="movie-pecther" src="${item.pic.movie_img_s}" />
      </div>

      <div>
        <h2 class="movie-title">${item.movie_title_en}</h2>
        <div class="movie-details">
          <p class="detail-text">${detail.hashd[index]}</p>
          <p class="detail-text">زمان : ${item.duration.text}</p>
          <p class="detail-text">
            ژانر :
            <span class="genres">
              ${detail.gener[index]
                .split(" _ ")
                .map((genre, i) => {
                  return `
                  <span
                    class="genre"
                    style="
                    background-color: ${detail.ss[index][i].background};
                    color: ${detail.ss[index][i].color};">
                    ${genre}
                  </span>`;
                })
                .join("")}
            </span>
          </p>
          <p class="detail-text">کارگردان : ${item.director}</p>
          <p class="detail-text">محصول کشور : ${detail.country[index]}</p>
          <p class="detail-text">امتیاز منتقدین : ${item.rate_avrage}</p>
          <p class="movie-description">${item.descr}</p>
        </div>
      </div>

      <div class="movie-info">
        <p class="imdb_rate">${item.imdb_rate}</p>
        <span class="spaapse"></span>
        <p class="IMDB">IMDB</p>
        <p class="doble">${detail.dobleshode[index]}</p>
      </div>
    </div>
    `;
  });

  wraperdiv.innerHTML = cards.join("");
}

export function showPage(page, movieList = movies) {
  nowpage = page;

  let totalpage = Math.ceil(movieList.length / itemprepage);

  let start = (nowpage - 1) * itemprepage;
  let end = start + itemprepage;

  let finale = movieList.slice(start, end);

  showMovies(finale);
  createPagination(totalpage, movieList);
}

function createPagination(totalpage, movieList) {
  pagination.innerHTML = "";

  let pages = document.createElement("div");
  pages.className = "pages";

  for (let i = 1; i <= totalpage; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.innerHTML = i;

    a.onclick = function () {
      showPage(i, movieList);
    };

    li.appendChild(a);
    pages.appendChild(li);
  }

  pagination.appendChild(pages);

  let controls = document.createElement("div");
  controls.className = "pagination-controls";

  let previous = document.createElement("button");
  previous.innerHTML = "Previous";

  previous.disabled = nowpage === 1;

  previous.onclick = function () {
    if (nowpage > 1) {
      showPage(nowpage - 1, movieList);
    }
  };

  let pageText = document.createElement("span");
  pageText.innerHTML = `Page ${nowpage} of ${totalpage}`;

  let next = document.createElement("button");
  next.innerHTML = "Next";

  next.disabled = nowpage === totalpage;

  next.onclick = function () {
    if (nowpage < totalpage) {
      showPage(nowpage + 1, movieList);
    }
  };

  controls.appendChild(previous);
  controls.appendChild(pageText);
  controls.appendChild(next);

  pagination.appendChild(controls);
}

showPage(1);
