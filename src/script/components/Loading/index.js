import style from "./style.webcomp.scss";

class Loading extends HTMLElement {
	connectedCallback() {
		this.attachShadow({ mode: "open" });
		this.render();
	}

	render() {
		// Append Style
		const styleElement = document.createElement("style");
		styleElement.textContent = style;
		this.shadowRoot.appendChild(styleElement);
	}
}

customElements.define("pre-loading", Loading);
