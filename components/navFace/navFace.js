const template = document.createElement("template");
template.innerHTML = `
	<link rel="stylesheet" href="style/style.css" />
    <div class="flex justify-center items-center w-12 h-12 opacity-0 fixed right-12 bottom-12 animate-MoveToRight">
					<img src="images/icon/face-grin-wide.svg" alt="add_circled" class=" opacity-20 absolute w-16 h-12 z-20 cursor-pointer rounded-full bg-green-400" />
					<li class="w-9 h-9 flex justify-center items-center absolute -right-full top-1/4  origin-[-50px] rotate-0 translate-x-12 bg-sky-[#1c91ff] " style="--i: 1">
					</li>
				</div>`;

class navFaceEmoji extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
	connectedCallback() {
		let liMenu = this.shadowRoot.querySelector("li");
		let menuFace = this.shadowRoot.querySelector("div");
		let img = this.shadowRoot.querySelector("img");
		let menuMessage = document.querySelector(".menuMessage");
		let menuText = document.querySelector(".menuMessage__text");
		let menuProfile = document.querySelector(".menuMessage__profile");
		let ShowMenu = false;
		liMenu.style.cssText = `
		transition-delay: calc(0.2s * var(--i));`;
		img.addEventListener("click", () => {
			if (ShowMenu) {
				menuFace.classList.remove("activeMenu");
				ShowMenu = false;
				img.style.cssText =
					"transform: rotate(0deg); transition: all 1.5s; opacity: .6;";
				img.setAttribute("src", "images/icon/face-woozy.svg");
				setTimeout(() => {
					img.setAttribute("src", "images/icon/face-flushed.svg ");
				}, 6000);
				liMenu.style.cssText = `opacity: 1; transition: all 1s;`;
				menuMessage.style.cssText = `
				width:0;
				height:0%;
				opacity:0;
				transition: all 2s;
				`;
				menuText.style.cssText = `
					opacity:0;
					`;
				menuProfile.style.cssText = `
					opacity:0;
					`;
			} else {
				menuFace.classList.add("activeMenu");
				ShowMenu = true;
				menuMessage.classList.add("menuMessage");
				if (menuMessage.classList.contains("menuMessage")) {
					menuMessage.style.cssText = `
					width:15rem;
					height:75%;
					opacity:1;
					transition: all 2s;
					`;
					menuText.style.cssText = `
					animation: opacityAnimation 1s forwards 2s cubic-bezier(0, 1.2, 0.45, 1.4);
					opacity:0;
					`;
					menuProfile.style.cssText = `
					animation: opacityAnimation 1s forwards 2s cubic-bezier(0, 1.2, 0.45, 1.4);
					opacity:0;
					`;
				}
				if (menuFace.classList.contains("activeMenu")) {
					img.style.cssText =
						"transform: rotate(-360deg); transition: all 1s;opacity: .6;";
					liMenu.style.cssText = `opacity: 1;
                    transition: all 1s;
                    transform: rotate(calc(200deg / -4 * var(--i)));`;
					img.setAttribute("src", "images/icon/face-spiral-eyes.svg");
					setTimeout(() => {
						img.setAttribute("src", "images/icon/face-glasses.svg");
					}, 6000);
				}
			}
		});
		// w-60 h-3/4
	}

	static observedAttributes() {
		return ["profile", "id-page", "bgProfile", "nameAnimation"];
	}
}
export { navFaceEmoji };
