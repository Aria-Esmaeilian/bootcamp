const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    rating: 8.8,
    price: 5,
    duration: 148,
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
    price: 4,
    duration: 152,
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    rating: 8.7,
    price: 6,
    duration: 169,
  },
  {
    id: 4,
    title: "The Godfather",
    genre: "Drama",
    year: 1972,
    rating: 9.2,
    price: 3,
    duration: 175,
  },
  {
    id: 5,
    title: "Parasite",
    genre: "Thriller",
    year: 2019,
    rating: 8.5,
    price: 5,
    duration: 132,
  },
  {
    id: 6,
    title: "Avengers: Endgame",
    genre: "Action",
    year: 2019,
    rating: 8.4,
    price: 7,
    duration: 181,
  },
  {
    id: 7,
    title: "The Matrix",
    genre: "Sci-Fi",
    year: 1999,
    rating: 8.7,
    price: 4,
    duration: 136,
  },
  {
    id: 8,
    title: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    rating: 8.9,
    price: 5,
    duration: 154,
  },
  {
    id: 9,
    title: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    rating: 8.8,
    price: 4,
    duration: 142,
  },
  {
    id: 10,
    title: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    rating: 9.3,
    price: 3,
    duration: 142,
  },
  {
    id: 11,
    title: "Fight Club",
    genre: "Drama",
    year: 1999,
    rating: 8.8,
    price: 5,
    duration: 139,
  },
  {
    id: 12,
    title: "Gladiator",
    genre: "Action",
    year: 2000,
    rating: 8.5,
    price: 5,
    duration: 155,
  },
  {
    id: 13,
    title: "Titanic",
    genre: "Romance",
    year: 1997,
    rating: 7.9,
    price: 4,
    duration: 194,
  },
  {
    id: 14,
    title: "The Lord of the Rings",
    genre: "Fantasy",
    year: 2001,
    rating: 8.8,
    price: 6,
    duration: 178,
  },
  {
    id: 15,
    title: "Joker",
    genre: "Thriller",
    year: 2019,
    rating: 8.4,
    price: 6,
    duration: 122,
  },
  {
    id: 16,
    title: "Whiplash",
    genre: "Drama",
    year: 2014,
    rating: 8.5,
    price: 4,
    duration: 106,
  },
  {
    id: 17,
    title: "The Prestige",
    genre: "Mystery",
    year: 2006,
    rating: 8.5,
    price: 5,
    duration: 130,
  },
  {
    id: 18,
    title: "Django Unchained",
    genre: "Western",
    year: 2012,
    rating: 8.5,
    price: 6,
    duration: 165,
  },
  {
    id: 19,
    title: "The Wolf of Wall Street",
    genre: "Comedy",
    year: 2013,
    rating: 8.2,
    price: 5,
    duration: 180,
  },
  {
    id: 20,
    title: "The Green Mile",
    genre: "Drama",
    year: 1999,
    rating: 8.6,
    price: 4,
    duration: 189,
  },
  {
    id: 21,
    title: "Goodfellas",
    genre: "Crime",
    year: 1990,
    rating: 8.7,
    price: 4,
    duration: 146,
  },
  {
    id: 22,
    title: "The Departed",
    genre: "Crime",
    year: 2006,
    rating: 8.5,
    price: 5,
    duration: 151,
  },
  {
    id: 23,
    title: "Saving Private Ryan",
    genre: "War",
    year: 1998,
    rating: 8.6,
    price: 5,
    duration: 169,
  },
  {
    id: 24,
    title: "The Silence of the Lambs",
    genre: "Thriller",
    year: 1991,
    rating: 8.6,
    price: 4,
    duration: 118,
  },
  {
    id: 25,
    title: "The Lion King",
    genre: "Animation",
    year: 1994,
    rating: 8.5,
    price: 3,
    duration: 88,
  },
  {
    id: 26,
    title: "Toy Story",
    genre: "Animation",
    year: 1995,
    rating: 8.3,
    price: 3,
    duration: 81,
  },
  {
    id: 27,
    title: "Finding Nemo",
    genre: "Animation",
    year: 2003,
    rating: 8.2,
    price: 4,
    duration: 100,
  },
  {
    id: 28,
    title: "The Incredibles",
    genre: "Animation",
    year: 2004,
    rating: 8.0,
    price: 4,
    duration: 115,
  },
  {
    id: 29,
    title: "Spider-Man: No Way Home",
    genre: "Action",
    year: 2021,
    rating: 8.2,
    price: 7,
    duration: 148,
  },
  {
    id: 30,
    title: "Iron Man",
    genre: "Action",
    year: 2008,
    rating: 7.9,
    price: 5,
    duration: 126,
  },
  {
    id: 31,
    title: "Black Panther",
    genre: "Action",
    year: 2018,
    rating: 7.3,
    price: 6,
    duration: 134,
  },
  {
    id: 32,
    title: "Guardians of the Galaxy",
    genre: "Action",
    year: 2014,
    rating: 8.0,
    price: 5,
    duration: 121,
  },
  {
    id: 33,
    title: "Jurassic Park",
    genre: "Adventure",
    year: 1993,
    rating: 8.2,
    price: 4,
    duration: 127,
  },
  {
    id: 34,
    title: "Back to the Future",
    genre: "Adventure",
    year: 1985,
    rating: 8.5,
    price: 4,
    duration: 116,
  },
  {
    id: 35,
    title: "Indiana Jones",
    genre: "Adventure",
    year: 1981,
    rating: 8.4,
    price: 4,
    duration: 115,
  },
  {
    id: 36,
    title: "The Truman Show",
    genre: "Comedy",
    year: 1998,
    rating: 8.2,
    price: 4,
    duration: 103,
  },
  {
    id: 37,
    title: "La La Land",
    genre: "Musical",
    year: 2016,
    rating: 8.0,
    price: 5,
    duration: 128,
  },
  {
    id: 38,
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    year: 2014,
    rating: 8.1,
    price: 5,
    duration: 99,
  },
  {
    id: 39,
    title: "Mad Max: Fury Road",
    genre: "Action",
    year: 2015,
    rating: 8.1,
    price: 6,
    duration: 120,
  },
  {
    id: 40,
    title: "A Beautiful Mind",
    genre: "Drama",
    year: 2001,
    rating: 8.2,
    price: 4,
    duration: 135,
  },
  {
    id: 41,
    title: "The Social Network",
    genre: "Drama",
    year: 2010,
    rating: 7.8,
    price: 5,
    duration: 120,
  },
  {
    id: 42,
    title: "Shutter Island",
    genre: "Mystery",
    year: 2010,
    rating: 8.2,
    price: 5,
    duration: 138,
  },
  {
    id: 43,
    title: "Memento",
    genre: "Mystery",
    year: 2000,
    rating: 8.4,
    price: 4,
    duration: 113,
  },
  {
    id: 44,
    title: "The Revenant",
    genre: "Adventure",
    year: 2015,
    rating: 8.0,
    price: 6,
    duration: 156,
  },
  {
    id: 45,
    title: "Bohemian Rhapsody",
    genre: "Biography",
    year: 2018,
    rating: 7.9,
    price: 5,
    duration: 134,
  },
  {
    id: 46,
    title: "Oppenheimer",
    genre: "Biography",
    year: 2023,
    rating: 8.6,
    price: 8,
    duration: 180,
  },
  {
    id: 47,
    title: "Barbie",
    genre: "Comedy",
    year: 2023,
    rating: 6.8,
    price: 7,
    duration: 114,
  },
  {
    id: 48,
    title: "Dune",
    genre: "Sci-Fi",
    year: 2021,
    rating: 8.0,
    price: 7,
    duration: 155,
  },
  {
    id: 49,
    title: "Top Gun: Maverick",
    genre: "Action",
    year: 2022,
    rating: 8.2,
    price: 7,
    duration: 130,
  },
  {
    id: 50,
    title: "Everything Everywhere All at Once",
    genre: "Sci-Fi",
    year: 2022,
    rating: 7.8,
    price: 6,
    duration: 139,
  },
];

//1
movies.filter(
  (item) => item.genre === "Drama" && item.year > 2015 && item.rating > 7.5,
);

//2
const more150 = movies.filter((item) => item.duration > 150);
const nametitle = more150.map((item) => item.title);
console.log(nametitle.join(" & "));

//3
const reing = movies.map((item) => item.rating);
const miyangin = reing.reduce((a, b) => a + b);
const showww = miyangin / reing.length;
console.log(showww);

//4
const mapu = movies.map((item) => item.price);
const showmapu = mapu.reduce((a, b) => {
  if (a < b) return b;
  else return a;
});
console.log(showmapu);

//5
const janer = movies.map((item) => item.genre);
const res = janer.reduce((a, b) => {
  if (a[b.genre]) {
    a[b.genre]++;
  } else {
    a[b.genre] = 1;
  }
  return a;
}, {});
console.log(res);

//6
const atlist85 = movies.filter((item) => item.rating >= 8.5);
const mapatlist = atlist85.map((item) => item.price);
const tatib = atlist85.sort((a, b) => a.price - b.price);
const mapatlist2 = atlist85.map((item) => item.title);
console.log(mapatlist2.join(" & "));

//7
const action = movies.some((item) => item.genre === "Action");
const drama = movies.some((item) => item.genre === "Drama");
const comedy = movies.some((item) => item.genre === "Comedy");
console.log(action && drama && comedy);

//8
const findtitle = movies.map((item) => item.title);
const dlete = findtitle.indexOf("The Matrix");
if (dlete > -1) {
  movies.splice(dlete, 1);
}
console.log(movies);

//9
const findless6 = movies.filter((item) => item.price < 6);
const findmore9 = findless6.sort((a, b) => b.rating - a.rating);
const findlesssd6 = findmore9.filter((item) => item.rating > 9);
const findless150 = findlesssd6.filter((item) => item.duration < 150);
const findless6map2 = findless150.map(
  (item) => `${item.title} - ${item.rating}`,
);
console.log(findless6map2.join(" & "));
