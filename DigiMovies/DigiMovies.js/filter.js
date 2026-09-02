import movies from "./250_top_imdb.js";
import * as showfilter from "./showfilter.js";

const genreFilter = document.getElementById("genreFilter");
const countryFilter = document.getElementById("countryFilter");
const languageFilter = document.getElementById("languageFilter");
const ageFilter = document.getElementById("ageFilter");
const ratingFilter = document.getElementById("ratingFilter");
const directorFilter = document.getElementById("directorFilter");
const fromYear = document.getElementById("fromYear");
const toYear = document.getElementById("toYear");
const sortFilter = document.getElementById("sortFilter");
const all = document.getElementById("movies-container");
const searchBtn = document.getElementById("searchBtn");

function showproduct() {
  all.innerHTML = "";
}

searchBtn.addEventListener("click", showproduct);

export default filter;
