import movies from "./250_top_imdb.js";
import * as detail from "./detail.js";

const wraperdiv = document.getElementById("movies-container");

const cards = movies.map((item, index) => {
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
