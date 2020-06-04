import style from "./style.webcomp.scss";

class Alert extends HTMLElement {
	connectedCallback() {
		this.attachShadow({ mode: "open" });
		this.render();
	}

	set message(message) {
		this._message = message;
		this.render();
		this.onClick();
	}

	render() {
		// Adding HTML
		this.shadowRoot.innerHTML = ` 
            <p>${this._message}</p>
        `;

		// Append Style
		const styleElement = document.createElement("style");
		styleElement.textContent = style;
		this.shadowRoot.appendChild(styleElement);
	}

	onClick() {
		clearTimeout(this.timeout);
		this.style.bottom = "1.5rem";
		this.style.opacity = "1";
		this.timeout = setTimeout(() => {
			this.style.bottom = "-3.5rem";
			this.style.opacity = "0";
		}, 3000);
	}
}

customElements.define("snackbar-alert", Alert);
