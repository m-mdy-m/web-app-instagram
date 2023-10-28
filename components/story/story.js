const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="components/story/story.css">
    `;
class story extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}
export { story };
