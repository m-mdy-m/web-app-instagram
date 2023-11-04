const template = document.createElement("template");
template.innerHTML = `
	<link rel="stylesheet" href="style/style.css" />
    <div class="h-48 w-[85px] flex flex-col justify-between items-center  relative font-aktivLight bgImage lowercase shadowBefore rounded-lg mx-3  opacity-0 odd:animate-MoveToBottom even:animate-MoveToTop ">
						<figure class="h-full flex flex-col justify-between items-center w-full  ">
							<img src="images/image/image_story.jpg" alt="" class="w-full rounded-full storyLine cursor-pointer mt-2 hover:scale-[1.2] transition-all duration-1000 object-cover">
						</figure>
						<h3 class=" text-xs text-gray-100  text-center pb-4 cursor-pointer md:p-0 ">m--m--m</h3>
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
