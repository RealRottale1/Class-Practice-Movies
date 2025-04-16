const mainDiv = document.getElementById("movie-info")

class moviesClass {
  #title;
  #cast;
  #description;
  #rating;
  constructor(title, cast, description, rating) {
    this.#title = title
    this.#cast = cast
    this.#description = description
    this.#rating = rating
  }
  updateRating(newRating) {
    this.#rating = newRating
  }
  getTitle() {
    return this.#title
  }
  displayInfo() {
    function handleCastMembers(cast) {
      let tempString = ''
      for (let castMember of cast) {
        tempString += castMember + ", "
      }
      return tempString + "<br>"
    }
    mainDiv.innerHTML += `-------------<br>Title: ${this.#title}<br>Description: ${this.#description}<br>Rating out of 10: ${this.#rating}/10<br>Cast Members:` + handleCastMembers(this.#cast)
  }
}

let movie = new moviesClass("Minecraft Movie", ["Jack Black", "Jeb"], "A movie about minecraft.", 10)
movie.displayInfo()
let movies = [movie]

function updateMovieRating(title, newRating) {
  for (let index in movies) {
    const selectedMovie = movies[index]
    if (selectedMovie.getTitle() == title) {
      selectedMovie.updateRating(newRating)
    }
  }
}
updateMovieRating("Minecraft Movie", 11)
movie.displayInfo();