
let getDataMovie = async (search_key = "") => {
    let URL = "";
    if(search_key == "") {
        URL = "https://api.themoviedb.org/3/discover/movie?api_key=6474e4e0f82f088e14294795cb17f124&sort_by=popularity.desc&page=1";
    } else {
        URL = `https://api.themoviedb.org/3/search/movie?api_key=6474e4e0f82f088e14294795cb17f124&query=${search_key}&page=1`;
    }
  let response = await fetch(URL);
  let movies = await response.json();
//   console.log(movies);
  // menampilkan 10 data Movie
  return movies;

}
async function loadMovie(search_key=""){
    let movies = await getDataMovie(search_key);
    for (let i = 0; i < movies.results.length; i++){
        let movie = movies.results[i];
        // let text = document.createElement('p')
        // app.append(text);
        // app.append(text1);
        let app = document.getElementById("app");
        let element = `<div class="card">
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text1">${movie.title}<br><br>
                ${movie.release_date}
            </p>
            <p class="card-text2">
                <B>${movie.vote_average}</B>
            </p>
            </div>
        </div>`
        app.innerHTML += element;
    }
}
(async function() {
    await loadMovie();
})();

let inputan = document.getElementById("search");
inputan.onkeyup = async function (){
    // console.log(this.value);
    let value = this.value;
    document.getElementById("app").innerHTML = "";
    await loadMovie(value)
}