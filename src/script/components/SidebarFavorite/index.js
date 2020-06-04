import style from "./style.webcomp.scss";

import { playDeleteAllFaveAnim, closeNav } from "../../ui/anim.js";
import { removeFave } from "../../ui/utilities.js";
import { setFavorite } from "../../data/data-repository.js";

import "../SidebarFavoriteItem";

class SidebarFavorite extends HTMLElement {
	connectedCallback() {
		this.attachShadow({ mode: "open" });

		this.render();
	}

	set movies(movies) {
		this._movies = movies;
		this.render();
		this.renderMovies();
	}

	set movieDOM(movieDOM) {
		this._movieDOM = movieDOM;
	}

	render() {
		// Adding HTML
		this.shadowRoot.innerHTML = `
            <div class="fave-buttons">
                <span id="button-close-nav" class="link button-item">
                    <span class="material-icons">close</span>
                </span>
                <span id="fave-delete-all" class="link button-item delete">
                    <span class="material-icons">delete</span>
                </span>
            </div>

            <h1 class="fave-heading">
                My <span class="color-primary">Fave</span>
            </h1>

            <div id="fave-table" class="fave-table"></div>
        `;

		// Append Style
		const materialIcon = document.createElement("link");
		materialIcon.setAttribute(
			"href",
			"https://fonts.googleapis.com/icon?family=Material+Icons"
		);
		materialIcon.setAttribute("rel", "stylesheet");
		this.shadowRoot.appendChild(materialIcon);
		const styleElement = document.createElement("style");
		styleElement.textContent = style;
		this.shadowRoot.appendChild(styleElement);

		// Element initialization
		const buttonCloseNavElement = this.shadowRoot.querySelector(
			"#button-close-nav"
		);
		const faveDeleteAllElement = this.shadowRoot.querySelector(
			"#fave-delete-all"
		);
		this.tableElement = this.shadowRoot.querySelector("#fave-table");

		// Element functionality
		// Onclick event listener for fave delete all
		faveDeleteAllElement.addEventListener("click", () => {
			const faveItemElement = this.shadowRoot.querySelectorAll(
				"favorite-item .table-item"
			);

			for (const element of faveItemElement) {
				playDeleteAllFaveAnim(
					element.id,
					faveItemElement,
					removeFave,
					setFavorite,
					this.shadowRoot
				);
			}
		});

		// Onclick event listener for closing nav
		buttonCloseNavElement.addEventListener("click", () => {
			closeNav();
		});
	}

	renderMovies() {
		// Render the favorite item and attach it into movie-table
		this._movies.forEach((movie) => {
			const favoriteItemElement = document.createElement("favorite-item");
			this.tableElement.appendChild(favoriteItemElement);
			favoriteItemElement.parentDOM = this.shadowRoot;
			favoriteItemElement.movieDOM = this._movieDOM;
			favoriteItemElement.movie = movie;
		});
	}

	renderError(error) {
		// Render error message on sidebar
		const errorElement = document.createElement("p");
		errorElement.textContent = error;
		this.tableElement.appendChild(errorElement);
	}
}

customElements.define("sidebar-favorite", SidebarFavorite);
