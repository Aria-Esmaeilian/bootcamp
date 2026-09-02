import movies from "./250_top_imdb.js";
import genreColors from "./genre.js";

const dobleshode = movies.map((item) => {
  if (item.dubbed.enable === true) {
    return "Dubbed";
  } else {
    return "Original";
  }
});
const hashd = movies.map((item) => {
  if (item.HD === true) {
    return "کیفیت : 1080p web-dl";
  } else {
    return "کیفیت : 720p web-dl";
  }
});

const gener = movies.map((item) => {
  return item.categories.map((iteme) => iteme.title).join(" _ ");
});

const country = movies.map((item) =>
  item.countries.map((item) => item.country).join(" _ "),
);

const ss = movies.map((item) => {
  return item.categories.map((category) => {
    const genre = category.title_en.toLowerCase();
    return genreColors[genre];
  });
});

export { dobleshode, hashd, gener, country, ss };
