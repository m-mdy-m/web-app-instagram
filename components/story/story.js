const template = document.createElement("template");
template.innerHTML = `
	<link rel="stylesheet" href="style/style.css"/>
    <div class="h-48 w-[85px] min-w-[70px] max-w-28 flex flex-col justify-between items-center relative font-aktivLight bgImage lowercase shadowBefore rounded-bl-2xl rounded-br-2xl mx-3">
		<figure class="h-full flex flex-col justify-between items-center w-full  ">
			<img src="images/image/image_story.jpg" alt="" class="w-full rounded-full storyLine cursor-pointer mt-2 ">
		</figure>
		<h3 class=" text-xs text-gray-100  text-center pb-4">m__mdy__m</h3>
	</div>`;
class story extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
	connectedCallback() {
		this.shadowRoot
			.querySelector("img")
			.setAttribute("src", this.getAttribute("profile"));
		this.shadowRoot.querySelector("h3").innerHTML =
			this.getAttribute("id-page");
		let a = this.shadowRoot.querySelector('div').className('.bgImage')
		console.log(a);
	}
	static observedAttributes() {
		return ["profile", "id-page"];
	}
}
export { story };
