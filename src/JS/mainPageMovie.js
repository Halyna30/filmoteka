import film from '../templates/trendMovieTemplate.hbs';
import modalMovieTemplate from '../templates/fullDescriptionMovie.hbs';

const movieModalRef = document.querySelector('.movie-modal');
const movieRef = document.querySelector('.trend-movie');

// Запрос на тренды
fetch(
  'https://api.themoviedb.org/3/trending/movie/day?api_key=bf08c0c07642287cbabe383c02818eb3',
)
  .then(response => response.json())
  .then(data => data.results)
  .then(movies => {
    let newMovieList = [];
    if (document.documentElement.clientWidth < 768) {
      newMovieList = movies.slice(0, 4);
      // return  newMovieList
    }
    if (
      document.documentElement.clientWidth >= 768 &&
      document.documentElement.clientWidth < 1024
    ) {
      newMovieList = movies.slice(0, 8);
    }
    if (document.documentElement.clientWidth >= 1024) {
      newMovieList = movies.slice(0, 9);
    }
    // console.log(newMovieList);

    // делаем разметку (вставляем шаблон)
    const markup = film(newMovieList);
    movieRef.insertAdjacentHTML('beforeend', markup);

    let filmItemRef = document.querySelectorAll('.trend-film-item');
    let genreRef = document.querySelectorAll('.trend-film-genre');

    filmItemRef.forEach(data => {
      let filmID = data.dataset.film;
      // Вешаем на картинку слушателя (должна открываться потом модалка, пока что рендерится разметка модалки внизу)
      data.addEventListener('click', event => {
        fetch(
          `https://api.themoviedb.org/3/movie/${filmID}?api_key=bf08c0c07642287cbabe383c02818eb3`,
        )
          .then(response => response.json())
          .then(movie => {
            console.log(movie);
            const markup2 = modalMovieTemplate(movie);
            movieModalRef.insertAdjacentHTML('beforeend', markup2);
          });
      });
    });
    // еще не решена проблема с id жанрами , пока будет так:
    filmItemRef.forEach(data => {
        let array = [];
        let filmID = data.dataset.film;
          fetch(
              `https://api.themoviedb.org/3/movie/${filmID}?api_key=bf08c0c07642287cbabe383c02818eb3`,
          )
              .then(response => response.json())
              .then(movie => {
                  (movie.genres.map(({ name }) => {

                      array.push(name);
                      return array;
                      
                    }))
                    genreFunction(array);
                      console.log(array);
              });
            }
            );
      

    function genreFunction(name) {
        genreRef.forEach(genreLink => {
        genreLink.textContent = name;
      })
      };
      
      
      
    // Обрезаем лишнее в дате, оставлем только год
    let dataRef = document.querySelectorAll('.trend-film-data');
    dataRef.forEach(data => {
      let newData = data.textContent.slice(0, 5);
      data.textContent = newData;
    });
  });

