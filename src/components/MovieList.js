import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const onc = () => {};

const MovieList = (props) => {
	const [moviename, setMoviename] = useState({});
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className="image-container d-flex justify-content-start m-3">
					{console.log(movie)}
					<Link
						to={{
							pathname: `/Pages/${movie.show.id}`,
						}}>
						<img src={movie.show.image.medium} alt="movie"></img>
					</Link>
				</div>
			))}
		</>
	);
};

export default MovieList;
