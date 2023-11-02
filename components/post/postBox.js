import { comments } from "../comments/comments.js";
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
							<img src="images/image/Post.jpg" alt="" class="postImg w-full h-full object-cover rounded-b-xl ">
							<div class=" flex flex-col justify-around items-center [&>*]:cursor-pointer  w-8 h-40 linearGradient-100 absolute -right-10 bottom-6 rounded-xl linePost z-10 ">
								<img src="images/icon/like.svg" alt="like"  id="like" >
								<img src="images/icon/share.svg" alt="share" id="share"  class='mb-10'>
								<div class="boxComments  w-[24px] h-[24px] !cursor-default -z-30 rounded-t-xl flex justify-between items-end absolute top-[53%] left-[14%]">
									<img src="images/icon/comments.svg" alt="comment" id="comment" class="w-6 h-6 cursor-pointer  ">
									
								</div>
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
		this.shadowRoot
			.querySelector("img")
			.setAttribute("src", this.getAttribute("pin"));
		postImg.setAttribute("src", this.getAttribute("post"));

		let page = this.shadowRoot.querySelector("page-dir");
		let imagePage = page.shadowRoot.querySelector("img");
		let namePage = page.shadowRoot.querySelector("h3");
		let bioPage = page.shadowRoot.querySelector("p");
		namePage = namePage.innerHTML = this.getAttribute("namePage");
		imagePage = imagePage.setAttribute("src", this.getAttribute("profile"));
		bioPage = bioPage.innerHTML = this.getAttribute("bio");

		this.createBoxComments(
			this.getAttribute("comment"),
			this.getAttribute("profileComments"),
			this.getAttribute("profileName")
		);

		function toggleImage(element, src, newSrc) {
			let isToggled = false;

			element.addEventListener("click", () => {
				if (isToggled) {
					element.setAttribute("src", src);
					isToggled = false;
				} else {
					element.setAttribute("src", newSrc);
					isToggled = true;
				}
			});
		}
		const like = this.shadowRoot.getElementById("like");
		toggleImage(like, "images/icon/like.svg", "images/icon/likeAdd.svg");

		const bookmark = this.shadowRoot.getElementById("bookmark");
		toggleImage(
			bookmark,
			"images/icon/bookmark.svg",
			"images/icon/bookmark-slash.svg"
		);
	}
	// show() {

	// }
	createBoxComments(comment, profile, namePage) {
		let myComments = document.createElement("comments-box");
		myComments.setAttribute("comment", comment);
		myComments.setAttribute("profile", profile);
		myComments.setAttribute("namePage", namePage);
		let created = 0;
		let boxComments = this.shadowRoot.querySelector(".boxComments");
		let icon = this.shadowRoot.getElementById("comment");
		// comment="oohh what is location" profile="images/image/image_story2.jpg" namePage="deleteHistory"
		let show = false;
		let commentElements = new comments();
		let allComments = commentElements.templateComments();
		icon.addEventListener("click", () => {
			created++;
			if (show) {
				boxComments.style.cssText = `
					animation:none;
					width: 24px;
					height: 24px;
					position: absolute;
					top: 53%;
					left:14%;
					animation: MoveToRight 2s forwards cubic-bezier(0,-0.67, 0.13, 1.49);`;
				allComments.style.cssText =
					"opacity:0;transition: all .5s; animation:none;";
				icon.setAttribute("src", "images/icon/comments.svg");
				myComments.remove();
				console.log(created);
				console.log(show);
				boxComments.addEventListener("animationend", () => {
					icon.setAttribute("src", "images/icon/comments.svg");
					icon.style.cssText = `
						top:auto;
						transition: all 3s;
						position: relative;
						z-index: 50;`;
				});
				show = false;
			} else {
				boxComments.style.animation =
					"showComments 3s forwards cubic-bezier(0,-0.67, 0.13, 1.49)";
				setTimeout(() => {
					allComments.style.cssText =
						"opacity:1;transition: all 3s; animation:MoveToBottom 1s forwards cubic-bezier(0,-0.67, 0.13, 1.49);";
				}, 2500);
				icon.setAttribute("src", "images/icon/comments.svg");

				boxComments.addEventListener("animationend", () => {
					icon.style.cssText = `
						position: absolute;
						top:0;
						transition: all 3s;`;
					icon.setAttribute("src", "images/icon/close_circled.svg");
				});
				boxComments.appendChild(myComments);
				if (created > 3) {
					this.shadowRoot.querySelector("comments-box").remove();
					created--;
				}
				show = true;
			}
		});
	}
	static observedAttributes() {
		return [
			"post",
			"profile",
			"bio",
			"namePage",
			"pin",
			"comment",
			"profileComments",
			"profileName",
		];
	}
}
export { postBox };
