import { story } from "../components/story/story.js";
import { profile } from "../components/profile/profile.js";
import { btn } from "../components/button/btn.js";
import { search } from "../components/search/search.js";
import { navFaceEmoji } from "../components/navFace/navFace.js";
import { textDirect } from "../components/textDirect/textDirect.js";
import { pageDir } from "../components/PageDir/PageDir.js";
import { postBox } from "../components/post/postBox.js";
import { comment } from "../components/comments/comments.js";

window.customElements.define("story-box", story);
window.customElements.define("profile-box", profile);
window.customElements.define("btn-box", btn);
window.customElements.define("search-box", search);
window.customElements.define("nav-box", navFaceEmoji);
window.customElements.define('text-dir', textDirect)
window.customElements.define('page-dir', pageDir)
window.customElements.define('post-box',postBox)
window.customElements.define('comment-box',comment)


let logoImg = document.querySelector(".logo img");

window.addEventListener("load", () => {
	logoImg.classList.add("logoInstagram");
});