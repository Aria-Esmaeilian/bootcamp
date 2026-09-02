import filter from "./filter.js";
import movies from "./250_top_imdb.js";

const gg = [];
const genre = movies.filter((item) => item.categories);
genre.forEach((item) => {
  item.categories.forEach((item2) => {
    if (!gg.includes(item2.title_en))
      (gg.push(item2.title_en),
        (genreFilter.innerHTML += `<option value="${item2.title}">
    ${item2.title}</option>`));
  });
});

const contryshow = [];
const contry = movies.filter((item) => item.countries);
contry.forEach((item) => {
  item.countries.forEach((item2) => {
    if (!contryshow.includes(item2.country)) {
      contryshow.push(item2.country);
      countryFilter.innerHTML += `<option value="${item2.country}">
      ${item2.country}</option>`;
    }
  });
});

const languageshow = [];
const language = movies.filter((item) => item.audio.languages);
language.forEach((item) => {
  item.audio.languages.forEach((item2) => {
    if (!languageshow.includes(item2)) {
      languageshow.push(item2);
      languageFilter.innerHTML += `<option value="${item2}">${item2}</option>`;
    }
  });
});

const ageshow = [];
const age = movies.filter((item) => item.age_range);
age.forEach((item) => {
  if (!ageshow.includes(item.age_range)) {
    ageshow.push(item.age_range);
    ageFilter.innerHTML += `<option value="${item.age_range}">
    ${item.age_range}</option>`;
  }
});

const imdb = [];
const IMDB = movies.filter((item) => item.imdb_rate);
IMDB.forEach((item) => {
  if (!imdb.includes(item.imdb_rate)) {
    imdb.push(item.imdb_rate);
    ratingFilter.innerHTML += `<option value="${item.imdb_rate}">
    ${item.imdb_rate}</option>`;
  }
});

const directorshow = [];
const director = movies
  .filter((item) => item.director)
  .forEach((item) => {
    if (!directorshow.includes(item.director)) {
      directorshow.push(item.director);
      directorFilter.innerHTML += `<option value="${item.director}">
    ${item.director}</option>`;
    }
  });

const yearshow = [];

movies.forEach((item) => {
  const year = Number(
    item.pro_year
      .replaceAll("۰", "0")
      .replaceAll("۱", "1")
      .replaceAll("۲", "2")
      .replaceAll("۳", "3")
      .replaceAll("۴", "4")
      .replaceAll("۵", "5")
      .replaceAll("۶", "6")
      .replaceAll("۷", "7")
      .replaceAll("۸", "8")
      .replaceAll("۹", "9"),
  );

  if (!yearshow.includes(year)) {
    yearshow.push(year);
  }
});

yearshow.sort((a, b) => a - b);

yearshow.forEach((item) => {
  fromYear.innerHTML += `<option value="${item}">${item}</option>`;
  toYear.innerHTML += `<option value="${item}">${item}</option>`;
});

export default {
  gg,
  contryshow,
  languageshow,
  ageshow,
  imdb,
  directorshow,
  yearshow,
};
