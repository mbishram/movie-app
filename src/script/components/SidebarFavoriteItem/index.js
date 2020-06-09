import style from "./style.webcomp.scss";

import { playDetailsAnim, playDeleteFaveAnim } from "../../ui/anim.js";
import {
	changeSection,
	resetSection,
	addSelectedItem,
	stopPlayer,
	isMobile,
} from "../../ui/utilities.js";
import { closeNav } from "../../ui/anim.js";
import { setDetails, setFavorite } from "../../data/data-repository.js";
import { removeFavorite } from "../../data/fave-data.js";

class SidebarFavoriteItem extends HTMLElement {
	set movie(movie) {
		this._movie = movie;
		this.render();
	}

	set parentDOM(parentDOM) {
		this._parentDOM = parentDOM;
	}

	set movieDOM(movieDOM) {
		this._movieDOM = movieDOM;
	}

	render() {
		// Adding HTML
		this.innerHTML = ` 
            <div id="id${this._movie.id}" class="table-item">
                <img
                    src="${this._movie.poster}"
                    alt="picture of a clothes"
                    draggable="false"
                />
                <p>${this._movie.name}</p>
                <span id="delete-button" class="material-icons link">delete</span>
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
		const faveDeleteElement = this.querySelector("#delete-button");

		// Element functionality
		// Onclick event listener for favorite item
		this.addEventListener("click", () => {
			// Close navigation if it's on mobile device
			if (isMobile()) {
				closeNav();
			}
			playDetailsAnim(
				this._movie.id,
				this._movieDOM,
				addSelectedItem,
				resetSection,
				changeSection,
				setDetails,
				stopPlayer
			);
		});
		// Onclick event listener for fave delete
		faveDeleteElement.addEventListener("click", (event) => {
			playDeleteFaveAnim(
				this._movie.id,
				removeFavorite,
				setFavorite,
				this._parentDOM
			);

			event.stopPropagation();
		});
	}
}

customElements.define("favorite-item", SidebarFavoriteItem);
