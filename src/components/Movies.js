import React from "react";
import { movies } from "../data";
function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div key={movie.title}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
          <p>Metascore: {movie.metascore}</p>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default Movies;





// import React from "react";
// import { movies } from "../data";

// function Movies() {
//   return <div>{/*{code here}*/}</div>;
// }

// export default Movies;