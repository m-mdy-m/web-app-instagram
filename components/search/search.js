const template = document.createElement("template");
template.innerHTML = `
	<link rel="stylesheet" href="style/style.css"/>
	<img src="images/icon/search.svg" alt="search" class="absolute left-0  w-6 opacity-0 animate-opacityAnimation ">
	<input type="search" placeholder="" class="border-0 rounded-lg w-full h-6 pl-7 bg-transparent outline-0 text-white SearchBox text-base capitalize opacity-0 animate-opacityAnimation" autofocus>
	`;
class search extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
	connectedCallback() {
		this.shadowRoot.querySelector("input").placeholder =
			this.getAttribute("textHolder");
	}

	static observedAttributes() {
		return ["textHolder"];
	}
}
export { search };
