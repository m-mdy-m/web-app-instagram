class alertBox extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	connectedCallback() {
		this.templateComments();
		this.attribute();
	}
	templateComments() {
		this.shadowRoot.innerHTML = `
		<link rel="stylesheet" href="style/style.css" />
    	<div class="w-auto h-20 alert absolute top-16  left-4 rounded-xl flex justify-start items-center alertAnimation z-[999999999999]">
			<img src="images/icon/octagon-exclamation.svg" alt="Alert" class="mr-2 w-16 h-full ">
			<div class=" flex justify-center flex-col items-start capitalize  ">
				<h2 class="text-2xl whitespace-nowrap text-PrimaryText " >please select images</h2>
				<p class="text-[10px] whitespace-nowrap text-PrimaryText-100">oops! it's like ypu didn't choose your photo!</p>
			</div>
		</div>`;
		let all = this.shadowRoot.querySelector("div");
		return all;
	}
	attribute() {
		this.shadowRoot.querySelector("p").innerHTML =
			this.getAttribute("texAlert");
		this.shadowRoot.querySelector("h2").innerHTML =
			this.getAttribute("alert");
	}
	static observedAttributes() {
		return ["texAlert", "alert"];
	}
}
export { alertBox };
customElements.define("alert-box", alertBox);
