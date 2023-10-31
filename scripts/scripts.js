import { story } from "../components/story/story.js";
import { profile } from "../components/profile/profile.js";
import { btn } from "../components/button/btn.js";
import { search } from "../components/search/search.js";


window.customElements.define("story-box", story);
window.customElements.define("profile-box", profile);
window.customElements.define("btn-box", btn);
window.customElements.define("search-box", search);

let logoImg = document.querySelector('.logo img')


window.addEventListener('load',()=>{
    logoImg.classList.add('logoInstagram')
})
let menuBtn = document.querySelector(".fixed__nav");
let menuShape = document.querySelector(".fixed__nav-shape");
let menuLink = document.querySelectorAll(".fixed__nav-link");
let ShowMenu = false;
menuLink.forEach(data => {
	const dataName = data.getAttribute("data-name");
	data.style.setProperty("--content", `'${dataName}'`);
	data.addEventListener("mouseover", () => {
		data.classList.toggle("animate");
	});
	data.addEventListener("mouseout", () => {
		data.classList.remove("animate");
	});
});
menuShape.addEventListener("click", () => {
	if (ShowMenu) {
		menuBtn.classList.remove("activeMenu");
		menuShape.style.opacity = ".2";
		ShowMenu = false;
	} else {
		menuBtn.classList.add("activeMenu");
		menuShape.style.opacity = "1";
		ShowMenu = true;
	}
});
