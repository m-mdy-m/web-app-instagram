import { pageDir } from "../PageDir/PageDir.js";
const template = document.createElement("template");
template.innerHTML = `
	<link rel="stylesheet" href="style/style.css" />
    <div class=" w-[35rem] min-w-[35rem]  h-96 relative my-4  mx-auto ">
						<img src="images/icon/pin.svg" alt="" class="absolute -right-2 -top-2 rotate-45 opacity-100 z-50">
						<div class="linearGradient-100 w-full h-1/6 flex justify-between items-center rounded-t-3xl ">
							<page-dir sourceProfile="images/image/image_story4.jpg" namePage="_medishne_" bio="Hello!"></page-dir>
							<img src="images/icon/more-horizontal.svg" alt="" class="cursor-pointer rounded-full w-[20px] h-[20px] mr-8 hover:bg-[#c5baba98] ">
						</div>
						<div class=" w-full h-5/6 relative ">
							<img src="images/image/Post.jpg" alt="" class="postImg w-full h-full object-cover rounded-b-xl">
							<div class=" flex flex-col justify-around items-center [&>*]:cursor-pointer  w-8 h-40 linearGradient-100 absolute -right-10 bottom-6 rounded-xl linePost z-10 ">
								<img src="images/icon/like.svg" alt="like"  id="like" >
								<img src="images/icon/share.svg" alt="share" id="share" >
								<img src="images/icon/comments.svg" alt="comment" id="comment" >
								<img src="images/icon/bookmark.svg" alt="bookmark" id="bookmark" >
							</div>
						</div>
					</div>`;

					class postBox extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

	connectedCallback() {
		let postImg = this.shadowRoot.querySelector(".postImg");
		this.shadowRoot.querySelector('img').setAttribute('src',this.getAttribute('pin'))
		postImg.setAttribute("src", this.getAttribute("post"));
		let page = this.shadowRoot.querySelector("page-dir");
		const imagePage = page.shadowRoot.querySelector("img");
		const namePage = page.shadowRoot.querySelector('h3');
		const bioPage = page.shadowRoot.querySelector('p') 
		namePage.innerHTML = this.getAttribute('namePage')
		imagePage.setAttribute("src",this.getAttribute("profile"));
		bioPage.innerHTML = this.getAttribute('bio')


		function toggleImage(element, src, newSrc) {
			let isToggled = false;
			
			element.addEventListener('click', () => {
			  if (isToggled) {
				element.setAttribute('src', src);
				isToggled = false;
			  } else {
				element.setAttribute('src', newSrc);
				isToggled = true;
			  }
			});
		  }
		  
		  const like = this.shadowRoot.getElementById('like');
		  toggleImage(like, 'images/icon/like.svg', 'images/icon/likeAdd.svg');
		  
		  const bookmark = this.shadowRoot.getElementById('bookmark');
		  toggleImage(bookmark, 'images/icon/bookmark.svg', 'images/icon/bookmark-slash.svg');
	}

	static observedAttributes() {
		return ["post", "profile", "bio", "namePage","pin"];
	}
}
export { postBox };
