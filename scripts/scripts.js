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