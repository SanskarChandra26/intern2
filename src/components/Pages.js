import React from "react";
import { useState, useEffect } from "react";
import {
	Typography,
	AppBar,
	Toolbar,
	TextField,
	Button,
	Box,
} from "@mui/material";
import Alert from "@mui/material/Alert";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles2.css";
const Pages = () => {
	function handleSubmit(e) {
		console.log(1);
	}
	let a = document.URL;
	var n = a.split("/");
	const text = n[n.length - 1];
	const [show, setShow] = useState(0);
	const [movies, setMovies] = useState([]);
	const getMovieRequest = async () => {
		const url = `https://api.tvmaze.com/search/shows?q=all`;

		const response = await fetch(url);
		const responseJson = await response.json();
		// console.log(responseJson);
		if (responseJson) {
			setMovies(responseJson);
		}
	};
	console.log(show);
	let b;
	const notify = () => toast("Wow so easy!");
	useEffect(() => {
		getMovieRequest();
	}, []);

	return (
		<>
			{movies.map(function (value, idx) {
				//let a = movies.filter(movies[idx].show.id == text);
				if (movies[idx].show.id == text) {
					b = idx;
					console.log(movies[b].show);

					return (
						<div id="e">
							<div id="c">
								<img id="k" src={movies[b].show.image.medium} alt="movie"></img>
							</div>
							<h3>Movie Title : {movies[b].show.name}</h3>
							<h4 id="a">Language: {movies[b].show.language}</h4>
							<h4 id="b">
								<div id="f">Duration: {movies[b].show.runtime} min</div>
							</h4>
							<h4 id="d">Language: {movies[b].show.summary}</h4>
							{show && (
								<>
									<form>
										<TextField
											style={{ width: "200px", margin: "5px" }}
											type="date"
											label="Date"
											variant="outlined"
											defaultValue="2023-05-24"
										/>
										<br />
										<TextField
											style={{ width: "200px", margin: "5px" }}
											type="time"
											label="Show timing"
											variant="outlined"
											defaultValue="02:00"
										/>
										<br />
										<TextField
											style={{ width: "200px", margin: "5px" }}
											type="number"
											label="Number of tickets"
											variant="outlined"
										/>
										<br />
										<TextField
											style={{ width: "200px", margin: "5px" }}
											type="number"
											label="Number of adults"
											variant="outlined"
										/>
										<br />
										<TextField
											style={{ width: "200px", margin: "5px" }}
											type="number"
											label="Number of children"
											variant="outlined"
										/>
										<br />
										{/* <TextField
											style={{ width: "200px", margin: "5px" }}
											type="text"
											label=""
											variant="outlined"
										/>
										<br />
										<TextField
											style={{ width: "200px", margin: "5px" }}
											type="text"
											label="job region"
											variant="outlined"
										/>
										<br /> */}
										<br />
										<br />
										<Button
											variant="contained"
											color="primary"
											onClick={() => {
												alert("Booking successful");
											}}>
											save
										</Button>
									</form>
								</>
							)}
						</div>
					);
				}
			})}
			<Button id="m" variant="contained" onClick={() => setShow(1)}>
				Book Tickets
			</Button>
		</>
	);
};

export default Pages;
