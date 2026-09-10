import movies from "./250_top_imdb.js";
import * as detail from "./detail.js";

const wraperdiv = document.getElementById("movies-container");

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
                    color: ${detail.ss[index][i].color};">${genre}</span>`;
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
      </div>
      `;
  });
  wraperdiv.innerHTML = cards.join("");
}

const pagination = document.getElementById("pagination");
let nowpage = 1;
let itemprepage = 10;

function showPage(page, movieList = movies) {
  nowpage = page;
  let totalpage = Math.ceil(movieList.length / itemprepage);
  let start = (nowpage - 1) * itemprepage;
  let end = start + itemprepage;
  showMovies(movieList.slice(start, end));
  createPagination(totalpage, movieList);
}

function createPagination(totalpage, movieList) {
  pagination.innerHTML = "";
  for (let i = 1; i <= totalpage; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerHTML = i;
    a.onclick = function () {
      showPage(i, movieList);
    };
    li.appendChild(a);
    pagination.appendChild(li);
  }
}

showPage(1);
