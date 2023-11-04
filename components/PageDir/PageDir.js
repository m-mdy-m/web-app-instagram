const template = document.createElement("template");
template.innerHTML = `
	<link rel="stylesheet" href="style/style.css"/>
    <div class="flex justify-start items-start mt-2 pl-2 sm:h-8 md:h-full cursor-pointer hover:bg-black w-full transition duration-500 ">
							<img src="" alt="profile" class="lg:w-14 lg:h-10  md:w-12 md:h-12  sm:w-8 sm:h-8 object-contain bg-black rounded-full border border-solid opacity-0 animate-opacityAnimation border-x-cyan-950 border-y-cyan-700 hover:border-cyan-700 transition-all duration-400 hover:border-2 ">
							<div class="flex justify-center items-start flex-col  pl-2">
								<h3 class=" font-mavisBold text-PrimaryText">m__mdy__m</h3>
								<p class="text-[#89898b] font-aktivLight md:text-sm sm:text-[10px] -mt-2">hi</p>
							</div>
						</div>`;
class pageDir extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
	connectedCallback() {
        this.shadowRoot.querySelector('img').setAttribute('src',this.getAttribute('sourceProfile'))
        this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('namePage')
        this.shadowRoot.querySelector('p').innerHTML = this.getAttribute('bio')
    }


	static observedAttributes() {
		return ["sourceProfile","namePage","bio"];
	}
}
export { pageDir };

