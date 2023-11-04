const template = document.createElement("template");
template.innerHTML = `
	<link rel="stylesheet" href="style/style.css" />
	<div class="lg:h-48 lg:w-[85px] sm:h-full sm:w-[50px] mx-3 flex flex-col justify-between items-center  relative font-aktivLight bgImage lowercase shadowBefore rounded-lg   opacity-100 odd:animate-MoveToBottom even:animate-MoveToTop ">
	<figure class="lg:h-full lg:w-full sm:w-8 sm:h-8 flex flex-col justify-between items-center ">
		<img src="images/image/image_story.jpg" alt="" class="lg:w-16 lg:h-16 rounded-full sm:w-8 sm:h-8 storyLine cursor-pointer mt-2 hover:scale-[1.2] transition-all duration-1000 object-cover">
	</figure>
	<h3 class=" lg:text-xs text-gray-100  text-center lg:p-0 lg:pb-4  sm:p-4 sm:text-[10px] cursor-pointer  ">m--m--m</h3>
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
		this.shadowRoot.querySelector(
			"div"
		).style.backgroundImage = `url(${this.getAttribute("bgProfile")})`;
		let divElm = this.shadowRoot.querySelectorAll("div");
		divElm.forEach(
			divElm =>
				(divElm.style.animation = `${this.getAttribute("nameAnimation")}.7s forwards cubic-bezier(0, 1.39, 0.79, 1.29) 1.5s`)
		);
	}

	static observedAttributes() {
		return ["profile", "id-page", "bgProfile", "nameAnimation"];
	}
}
export { story };