const template = document.createElement("template");
template.innerHTML = `
	<link rel="stylesheet" href="style/style.css"/>
    <div class="flex justify-start items-start h-auto mt-2 pl-2 cursor-pointer hover:bg-black w-full transition duration-500 ">
							<img src="" alt="profile" class="w-14 h-14 object-contain bg-black rounded-full border border-solid opacity-0 animate-opacityAnimation border-x-cyan-950 border-y-cyan-700 hover:border-cyan-700 transition-all duration-400 hover:border-2 ">
							<div class="flex justify-center items-start flex-col  pl-2">
								<h3 class=" font-mavisBold text-PrimaryText">m__mdy__m</h3>
								<p class="text-[#89898b] font-aktivLight text-sm -mt-2">hi</p>
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

