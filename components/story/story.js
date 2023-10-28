const template = document.createElement("template");
template.innerHTML = `
	<link rel="stylesheet" href="style/style.css"/>
    <figure class="h-full w-[70px]  mx-2 flex flex-col justify-center items-center ">
		<img src="images/image/image_story.jpg" alt="" class="w-full h-3/4 rounded-full storyLine cursor-pointer">
		<h3 class=" text-xs text-gray-100"></h3>
	</figure>`;
class story extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
	connectedCallback() {
		this.shadowRoot.querySelector("img").innerHTML =
			this.getAttribute("profile");
		this.shadowRoot.querySelector("h3").innerHTML =
			this.getAttribute("id-page");
	}
	static observedAttributes() {
		return ["profile", "id-page"];
	}
}
export { story };
