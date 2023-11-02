class comments extends HTMLElement {
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
    	<div class="allComments opacity-100 w-36 [&>*]:px-2 [&>*]:py-1 h-auto bg-[#3e3939d0] rounded-xl flex flex-col justify-between items-center">
			<p class="text-[10px] leading-3 font-aktivLight text-PrimaryText-100 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem sequi suscipit sit! Veritatis autem voluptatum, quia praesentium iure inventore.</p>
			<div class="w-full flex justify-start items-center  bg-[#0000009c] rounded-b-xl">
				<img src="images/image/image_story2.jpg" alt="profile" class="w-8 h-8 object-contain cursor-pointer  bg-black rounded-full border border-solid opacity-0 animate-opacityAnimation border-x-cyan-950 border-y-cyan-700 hover:border-cyan-700 transition-all duration-400 hover:border-2 ">
				<h3 class=" font-aktivLight text-PrimaryText text-[10px] ml-2">m__mdy__m</h3>
			</div>
		</div>`;
		let all = this.shadowRoot.querySelector('div')
		return all
	}
	attribute() {
		this.shadowRoot.querySelector("p").innerHTML = this.getAttribute("comment");
		this.shadowRoot.querySelector("h3").innerHTML = this.getAttribute("namePage");
		this.shadowRoot.querySelector("img").setAttribute("src", this.getAttribute("profile"));
	}

	// static show(icon = "", boxComment = "") {
	// 	let iconComment = icon;
	// 	let boxComments = boxComment;
	// 	let comment = new comments

	// 	let allComments = comment.templateComments()
	// 	let show = false;
	// 	iconComment.addEventListener("click", () => {
	// 		if (show) {
	// 			allComments.style.cssText =
	// 				"opacity:0;transition: all .5s; animation:none;";
	// 			show = false;
				
	// 		} else {
	// 			setTimeout(() => {
	// 				allComments.style.cssText =
	// 					"opacity:1;transition: all 3s; animation:MoveToBottom 1s forwards cubic-bezier(0,-0.67, 0.13, 1.49);";
	// 			}, 2500);
	// 		}
	// 	});
	// }
	static observedAttributes() {
		return ["comment", "namePage", "profile"];
	}
}
export { comments };
customElements.define("comments-box", comments);
