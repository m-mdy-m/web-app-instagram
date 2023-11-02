import * as comments from "../comments/comments.js";
console.log(comments);
console.log(comments.innerHTML);


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
									<comment-box comment="this is great photo  sit! Veritatis autem voluptatum, quia praesentium iure inventore." profile="images/image/image_story2.jpg" namePage="medishn"></comment-box>
									<comment-box comment="its beuteful" profile="images/image/image_story6.jpg" namePage="m__mdy__m"></comment-box>
									<comment-box comment="oohh what is location" profile="images/image/image_story2.jpg" namePage="deleteHistory"></comment-box>
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
		const imagePage = page.shadowRoot.querySelector("img");
		const namePage = page.shadowRoot.querySelector("h3");
		const bioPage = page.shadowRoot.querySelector("p");
		namePage.innerHTML = this.getAttribute("namePage");
		imagePage.setAttribute("src", this.getAttribute("profile"));
		bioPage.innerHTML = this.getAttribute("bio");

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
		let iconComment = this.shadowRoot.getElementById("comment");
		let boxComments = this.shadowRoot.querySelector(".boxComments");
		// let commentBox = this.shadowRoot.querySelector("comment-box");
		// let allComments =commentBox
		const allComments = document.querySelector(
			"comment-box > div:first-child"
		);

		let show = false;
		iconComment.addEventListener("click", () => {
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
				show = false;
				iconComment.setAttribute("src", "images/icon/comments.svg");
				boxComments.addEventListener("animationend", () => {
					iconComment.setAttribute("src", "images/icon/comments.svg");
					iconComment.style.cssText = `
					top:auto-;
					transition: all 3s;
					position: relative;
					z-index: 50;`;
				});
			} else {
				boxComments.style.animation =
					"showComments 3s forwards cubic-bezier(0,-0.67, 0.13, 1.49)";
				show = true;
				setTimeout(() => {
					allComments.style.cssText =
						"opacity:1;transition: all 3s; animation:MoveToBottom 1s forwards cubic-bezier(0,-0.67, 0.13, 1.49);";
				}, 2500);
				iconComment.setAttribute("src", "images/icon/comments.svg");

				boxComments.addEventListener("animationend", () => {
					iconComment.style.cssText = `
					position: absolute;
					top:0;
					transition: all 3s;`;
					iconComment.setAttribute(
						"src",
						"images/icon/close_circled.svg"
					);
				});
			}
		});
	}

	static observedAttributes() {
		return ["post", "profile", "bio", "namePage", "pin"];
	}
}
export { postBox };
