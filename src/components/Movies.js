import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movie Page</h1>
    {
      movies.map((movie)=>{
        <div>
          <ul>
            <li>{movie.title}</li>
            <li>{movie.time}</li>
            <li>
              <ul>
                {
                  movie.genres.map((genre,index)=>{
                    <li key={index}>{genre}</li>
                  })
                }
              </ul>
              </li>
            </ul>
        </div>
      })
    }
  </div>;
}

export default Movies;
