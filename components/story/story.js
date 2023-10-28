const template = document.createElement("template");
template.innerHTML = `
	<link rel="stylesheet" href="style/style.css" />
    <figure class="h-full w-[4.5rem] bg-sky-500 mx-8 flex flex-col justify-center items-center">
			<img src="images/image/image_story.jpg" alt="" class="w-full h-3/4 rounded-full">
			<h3 class="w-full h-1/4 font-AktLight">m__mdy__m</h3>
	</figure>
	`;
class story extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
	connectedCallback(){
		this.shadowRoot.querySelector('')
	}
}
export { story };
