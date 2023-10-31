const template = document.createElement("template");
template.innerHTML = `
	<link rel="stylesheet" href="style/style.css" />
    <h3 class="font-aktivRegular capitalize cursor-pointer active:border-b-4 border-spacing-y-5 border-[#1d1d22]">Primary</h3>`;

class textDirect extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
	connectedCallback() {
		this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('text')
	}

	static observedAttributes() {
		return ["text"];
	}
}
export { textDirect };
