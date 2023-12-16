// Nome repo: 'exercise-tmdb'

// Usando le API di TMDB (come visto a lezione), creare una React APP
//in grado di cercare dei film.
// Reference qui: https://developer.themoviedb.org/reference/search-movie

// Mi raccomando: NON PUSHATE LA VOSTRA API KEY! Usate il file .env
//come visto a lezione.

// Consigli:
// - Gestite lo state [movies, setMovies] all'interno del vostro componente
//App, non in un sottocomponente. Al MountEnd, eseguite una fetch all'endpoint
//corretto (aprire il link reference qui sopra e andare a studiarvi la documentazione).
// - Create un componente MovieCard, che riceve come props le proprietà che
//volete rappresentare per ogni film (ad esempio title, description, cover,
//genres, ecc.).
// - Creare un componente SearchBar con campo di ricerca (input text) e
//bottone "Cerca". Il componente riceve come prop una callback function
//onSearch, che viene eseguita al click del bottone "Cerca" e a cui le viene
//passato come parametro il value corrente dell'input.

// Bonus:
// - Nel componente SearchBar, aggiungete una select che fa scegliere
// all'utente tra 'Movie', 'TV Series', 'Person'. All' onSearch, passate
// quindi DUE parametri (il value dell'input, come nell'esercizio normale,
// e anche il valore scelto al select). Quindi, effettuare una fetch a una
// chiamata diversa in base a che l'utente voglia cercare un film, una serie TV,
// o una persona.

import { useEffect, useState } from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchSelValue, setSearchSelValue] = useState("movie");
  const [error, setError] = useState(false);

  const query = new URLSearchParams({
    api_key: apiKey,
    query: searchValue,
    language: "en-US",
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/${searchSelValue}?${query.toString()}`
    )
      .then((response) => response.json())
      .then((obj) => setResults(obj.results))
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, [searchValue, searchSelValue]);

  return (
    <>
      {error && <p>There was an error, try again</p>}
      {!error && results && (
        <>
          <h1>Search Movie</h1>
          <SearchBar
            onSearch={(inputValue, selectValue) => {
              setSearchValue(inputValue);
              setSearchSelValue(selectValue);
            }}
          />
          <main>
            {results.map((result) => {
              return (
                <div key={result.id}>
                  <MovieCard
                    title={result.title ? result.title : result.name}
                    overview={result.overview}
                    works={result.known_for}
                    img={
                      result.poster_path
                        ? result.poster_path
                        : result.profile_path
                    }
                    release={
                      result.release_date
                        ? result.release_date
                        : result.first_air_date
                    }
                    department={result.known_for_department}
                    languageOrPopularity={
                      result.original_language
                        ? result.original_language
                        : result.popularity
                    }
                  />
                </div>
              );
            })}
          </main>
        </>
      )}
    </>
  );
}

export default App;
