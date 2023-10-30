const template = document.createElement("template");
template.innerHTML = `
	<link rel="stylesheet" href="style/style.css"/>
        <img src="images/icon/search.svg" alt="search" class="absolute left-0  w-6">
        <input type="search" placeholder="Search page..." class="border-0 rounded-lg w-full h-6 pl-7 bg-transparent outline-0 text-white SearchBox text-base" autofocus>
	`;
class search extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}
export { search };
