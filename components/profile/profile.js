const template = document.createElement("template");
template.innerHTML = `
	<link rel="stylesheet" href="style/style.css"/>
    <a href="#">
		<img src="images/image/image_story.jpg" alt="profile" class="w-14 h-14 rounded-full border border-solid opacity-0 animate-opacityAnimation border-x-cyan-950 border-y-cyan-700 hover:border-cyan-700 transition-all duration-400 hover:border-2 ">
	</a>`;
class profile extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
	connectedCallback() {
		this.shadowRoot
			.querySelector("img")
			.setAttribute("src", this.getAttribute("profile"));
	}

	static observedAttributes() {
		return ["profile"];
	}
}
export { profile };
