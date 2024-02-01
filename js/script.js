"use strict";
const numberOfFilms = + prompt(`Сколько фильмов вы уже посмотрели`, ``);

const personalMovieDB = {
    count: numberOfFilms,
    movies: [],
    actirs: {},
    geners: [],
    privat: false
};

const a = prompt(`Один из последних фильмов?`, ``),
      b = prompt('На сколько оцените его?',``),
      c = prompt('один из последних просмотреных фильмов?',``),
      d = prompt(`На сколько вы его оцените`, ``);
  
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
   
console.log(personalMovieDB);
  