import style from "./style.webcomp.scss";

import { playDetailsAnim } from "../../ui/anim.js";
import {
	changeSection,
	resetSection,
	addFavorite,
	addSelectedItem,
	stopPlayer,
} from "../../ui/utilities.js";
import { setDetails, setFavorite } from "../../data/data-repository.js";

class MovieItem extends HTMLElement {
	set movie(movie) {
		this._movie = movie;
		this.render();
	}

	get movie() {
		return this._movie;
	}

	set firstIteration(firstIteration) {
		this._firstIteration = firstIteration;
	}

	set parentDOM(parentDOM) {
		this._parentDOM = parentDOM;
	}

	render() {
		// Adding HTML
		this.innerHTML = ` 
            <div id=${this._movie.id} class="item">
                <div class="item-pic">
                    <img
                        src="${this._movie.poster}"
                        alt="picture of a movie poster"
                        class="item-img"
                        draggable="false"
                    />
                </div>
                <div class="item-desc">
                    <span class="button-item link">
                        <span class="material-icons">favorite</span>
                    </span>
                    <p class="name">
                        ${this._movie.name}
                    </p>
                    <p class="rating">
                        Rating : <span class="percent">${this._movie.rating}</span>
                    </p>
                </div>
            </div>   
        `;

		// Append Style
		const materialIcon = document.createElement("link");
		materialIcon.setAttribute(
			"href",
			"https://fonts.googleapis.com/icon?family=Material+Icons"
		);
		materialIcon.setAttribute("rel", "stylesheet");
		this.appendChild(materialIcon);
		const styleElement = document.createElement("style");
		styleElement.textContent = style;
		this.appendChild(styleElement);

		// Element initialization
		const faveButtonElement = this.querySelector(".button-item.link");
		const snackbarElement = document.querySelector("snackbar-alert");

		// Element functionality
		// Adding .selected to the first element
		if (this._firstIteration) {
			this.querySelector(".item").classList.add("selected");
		}
		// Onclick event listener for movie item
		this.addEventListener("click", () => {
			playDetailsAnim(
				this._movie.id,
				this._parentDOM,
				addSelectedItem,
				resetSection,
				changeSection,
				setDetails,
				stopPlayer
			);
		});
		// Onclick event listener for favorite button
		faveButtonElement.addEventListener("click", (event) => {
			snackbarElement.message = addFavorite(
				this._movie.id,
				this._movie.name,
				this._movie.poster
			);
			setFavorite();

			event.stopPropagation();
		});
	}
}

customElements.define("movie-item", MovieItem);
