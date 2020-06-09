import style from "./style.webcomp.scss";

import { setDetails } from "../../data/data-repository.js";

import "../MovieItem";

class MovieList extends HTMLElement {
	connectedCallback() {
		this.attachShadow({ mode: "open" });

		this.render();
		this.setupSidebar();
	}

	set movies(movies) {
		this._movies = movies;
		this.renderMovies();
	}

	render() {
		// Append Style
		const styleElement = document.createElement("style");
		styleElement.textContent = style;
		this.shadowRoot.appendChild(styleElement);
	}

	renderMovies() {
		// Render the movie item and attach it into movie-list
		let firstIteration = true;
		this._movies.forEach((movie) => {
			const movieItemElement = document.createElement("movie-item");
			this.shadowRoot.appendChild(movieItemElement);
			movieItemElement.parentDOM = this.shadowRoot;
			if (firstIteration) {
				movieItemElement.firstIteration = firstIteration;
				firstIteration = false;
			}
			movieItemElement.movie = movie;
		});

		setDetails(
			this.shadowRoot.querySelector("movie-item .selected").parentNode
				.movie.id
		);
	}

	renderError(error) {
		// Render error message on movie-list
		const errorElement = document.createElement("p");
		errorElement.style.minWidth = "70rem";
		errorElement.style.fontSize = "5rem";
		errorElement.style.fontWeight = "bold";
		errorElement.textContent = error.toUpperCase();
		this.shadowRoot.appendChild(errorElement);
		setDetails(null);
	}

	setupSidebar() {
		document.querySelector("sidebar-favorite").movieDOM = this.shadowRoot;
	}
}

customElements.define("movie-list", MovieList);
