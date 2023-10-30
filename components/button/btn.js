const template = document.createElement("template");
template.innerHTML = `
	<link rel="stylesheet" href="style/style.css"/>
    <button class="w-24 h-8 bg-teal-600 rounded-xl font-mavisBold uppercase text-base text-slate-100 justify-items-center mr-5 hover:bg-teal-800 opacity-0 animate-opacityAnimation"></button>
	`;
class btn extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
	connectedCallback() {
		
		this.shadowRoot.querySelector('button').innerHTML = this.getAttribute('content')
	}

	static observedAttributes() {
		return ["content"];
	}
}
export { btn };
