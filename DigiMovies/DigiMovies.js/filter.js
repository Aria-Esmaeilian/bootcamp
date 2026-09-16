import movies from "./250_top_imdb.js";
import { showPage } from "./show.js";

const genreFilter = document.getElementById("genreFilter");
const countryFilter = document.getElementById("countryFilter");
const languageFilter = document.getElementById("languageFilter");
const ageFilter = document.getElementById("ageFilter");
const ratingFilter = document.getElementById("ratingFilter");
const directorFilter = document.getElementById("directorFilter");
const fromYear = document.getElementById("fromYear");
const toYear = document.getElementById("toYear");
const sortFilter = document.getElementById("sortFilter");
const searchBtn = document.getElementById("searchBtn");

function showproduct() {
  const director = directorFilter.value;
  const genre = genreFilter.value;
  const country = countryFilter.value;
  const language = languageFilter.value;
  const age = ageFilter.value;
  const rating = ratingFilter.value;
  const from = fromYear.value;
  const to = toYear.value;

  const filteredMovies = movies.filter((item) => {
    if (
      (!director || item.director === director) &&
      (!genre || item.categories.some((item2) => item2.title_en === genre)) &&
      (!country || item.countries.some((item2) => item2.country === country)) &&
      (!language || item.audio.languages.includes(language)) &&
      (!age || item.age_range === age) &&
      (!rating || item.imdb_rate === rating) &&
      (!from ||
        Number(
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
        ) >= Number(from)) &&
      (!to ||
        Number(
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
        ) <= Number(to))
    ) {
      return true;
    }
    return false;
  });
  if (sortFilter.value === "rating2") {
    filteredMovies.sort((a, b) => b.imdb_rate - a.imdb_rate);
  }
  if (sortFilter.value === "rating") {
    filteredMovies.sort((a, b) => a.imdb_rate - b.imdb_rate);
  }
  if (sortFilter.value === "rating1") {
    filteredMovies.sort((a, b) => a.duration.value - b.duration.value);
  }
  if (sortFilter.value === "rating3") {
    filteredMovies.sort((a, b) => b.duration.value - a.duration.value);
  }

  showPage(1, filteredMovies);
}

searchBtn.addEventListener("click", showproduct);
