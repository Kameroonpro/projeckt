
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "10");
const film = prompt("Один из последних просмотренных фильмов?");
const rates = +prompt("На сколько оцените его?");

 const  personalMovieDB = {
        count :  numberOfFilms,
        movies: {},
        actors:{},
        genres: [],
        privat: false
};

personalMovieDB.movies[film] = rates;

console.log(personalMovieDB);