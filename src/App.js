import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
const App = () => {
	const [movies, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = `https://api.tvmaze.com/search/shows?q=all`;

		const response = await fetch(url);
		const responseJson = await response.json();
		console.log(responseJson);
		if (responseJson) {
			setMovies(responseJson);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

	return (
		<div className="wrap">
			<div className="container-fluid movie-app">
				<MovieListHeading heading="Movies" />
				<div className="row">
					<MovieList movies={movies} />
				</div>
			</div>
		</div>
	);
};

export default App;
