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

import { useState } from 'react'
import './App.scss'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
const apiKey = import.meta.env.VITE_API_KEY


function App() {


  
  return (
    <>
      
    </>
  )
}

export default App
