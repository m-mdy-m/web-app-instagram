import { comments } from "../comments/comments.js";
import { alertBox } from "../alert/alert.js";
const template = document.createElement("template");
template.innerHTML = `
	<link rel="stylesheet" href="style/style.css" />
    <div class=" md:w-[35rem] md:h-96 relative my-4 sm:w-[27rem] sm:h-[28rem]   mx-auto sm:z-10 ">
						<img src="images/icon/pin.svg" alt="" class="absolute -right-2 -top-2 rotate-45 opacity-100 z-50">
						<div class="linearGradient-100 w-full h-1/6 flex justify-between items-center rounded-t-3xl ">
							<page-dir sourceProfile="images/image/image_story4.jpg" namePage="_medishne_" bio="Hello!"></page-dir>
							<img src="images/icon/more-horizontal.svg" alt="" class="cursor-pointer rounded-full w-[20px] h-[20px] mr-8 hover:bg-[#c5baba98] ">
						</div>
						<div class="  w-full h-5/6 relative ">
							<img src="images/image/Post.jpg" alt="" class="postImg w-full h-full object-cover rounded-b-xl ">
							<div class=" flex flex-col justify-around items-center [&>*]:cursor-pointer  w-8 h-40 linearGradient-100 absolute -right-10 bottom-6 rounded-xl linePost z-10 ">
								<img src="images/icon/like.svg" alt="like"  id="like" >
								<img src="images/icon/share.svg" alt="share" id="share"  class='mb-10'>
								<div class="boxComments w-[24px] h-[24px] !cursor-default  rounded-t-xl flex justify-between items-end absolute top-[53%] left-[14%]">
									<button class="addComment opacity-0 hidden w-6 h-6 rounded-full absolute right-6 top-0 hover:bg-[#4397b1]"></button>
									<div id="wrapperNew" class="animate-opacityAnimation flex-col hidden sm:w-3/4 justify-center items-center opacity-100 md:w-full [&>*]:px-2 [&>*]:py-2 h-full rounded-lg rounded-tl-md textArea ">
										<textarea class="lg:h-3/4 md:w-full  !pl-7 textArea resize-none  lowercase leading-5 text-xl focusInput text-start font-aktivLight text-PrimaryText-100 bg-transparent outline-0 border-0 rounded-tl-md"></textarea>
										<div class="w-full h-1/4 flex justify-start   items-center   ">
											<img src=""  alt="profile" id="profileComment" class="hidden w-8 h-8 object-contain cursor-pointer  bg-black rounded-full border border-solid opacity-100 animate-opacityAnimation border-x-cyan-950 border-y-cyan-700 hover:border-cyan-700 transition-all duration-400 hover:border-2">
											<label for="selectFile" class="opacity-100 cursor-pointer w-24 h-full object-contain text-center capitalize text-white font-aktivRegular flex justify-center items-center rounded-md text-sm whitespace-nowrap p-4 bg-[#3354b085] border border-solid  animate-opacityAnimation border-x-teal-400 border-y-red-500 hover:border-red-700 transition-all duration-400 hover:border-2">select img</label>
											<input type="file" required accept="image/jpg,image/png ,image/jpeg" class="hidden" id="selectFile">
											<input type="text" id="userName" autofocus required placeholder="user name:" class="font-aktivLight foc  rounded-r-md text-PrimaryText !bg-transparent capitalize text-xs outline-0 border-0 pl-2 h-full w-2/3"> 
										</div>
									</div>
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

		this.createBoxComments();
		this.addComment();
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
	addComment() {
		let wrapperNew = this.shadowRoot.getElementById("wrapperNew");
		let btn = this.shadowRoot.querySelector(".addComment");
		let textarea = this.shadowRoot.querySelector("textarea");
		let userName = this.shadowRoot.getElementById("userName");
		let selectFile = this.shadowRoot.getElementById("selectFile");
		let img = this.shadowRoot.getElementById("profileComment");
		let wrapperFile = this.shadowRoot.querySelector("label");
		let alertELm = document.createElement("alert-box");
		let boxComments = this.shadowRoot.querySelector(".boxComments");
		let icon = this.shadowRoot.getElementById("comment");
		let show = false;
		// icon.addEventListener("click", () => {
		// 	if (show) {
		// 		show = false;
		// 		// myComment.style.display = "none";
		// 		wrapperNew.style.display = "none";
		// 		icon.setAttribute("src", "images/icon/comments.svg");
		// 	} else {
		// 		show = true;
		// 		setTimeout(() => {
		// 			//   myComment.style.display = "flex";
		// 		}, 3000);
		// 	}
		// });

		function alertContent(texAlert, alertDis) {
			alertELm.setAttribute("texAlert", texAlert);
			alertELm.setAttribute("alert", alertDis);
			document.body.appendChild(alertELm);
		}

		btn.addEventListener("click", () => {
			setTimeout(() => {
				wrapperNew.style.cssText = "display:flex;";
				selectFile.addEventListener("change", () => {
					img.src = URL.createObjectURL(selectFile.files[0]);
					img.style.display = "inline-block";
					wrapperFile.style.display = "none";
				});
			}, 500);

			let enterClicked = false;
			let created = 0;

			window.addEventListener("keypress", event => {
				if (event.key === "Enter" && !enterClicked) {
					let myComment = document.createElement("comments-box");
					icon.addEventListener("click", () => {
						if (show) {
							show = false;
							setTimeout(() => {
								myComment.style.display = "flex";
						  }, 3000);
						} else {
							show = true;
							myComment.style.display = "none";
							wrapperNew.style.display = "none";
							icon.setAttribute("src", "images/icon/comments.svg");
						}
					});
					let newComment = textarea.value;
					let username = userName.value;
					let profile = img.src;
					myComment.setAttribute("profile", profile);
					myComment.setAttribute("namePage", username);
					myComment.setAttribute("comment", newComment);
					boxComments.appendChild(myComment);
					if (newComment === "") {
						alertContent(
							"Please complete the comment box!",
							"Why didn't you comment!!😐"
						);
						created--;
					} else if (profile === "") {
						alertContent(
							"Are you ugly!? 🤭!",
							"Why didn't you take a picture of yourself??😤"
						);
						created--;
					} else if (username === "") {
						alertContent(
							"Do you want me to tell you your name? Donkey!! 🤭",
							"Don't you have a name?😢"
						);
						created--;
					}
					img.style.display = "none";
					wrapperFile.style.display = "block";
					wrapperNew.style.display = "none";
					textarea.value = "";
					userName.value = "";
					img.src = "";
					if (created >= 3) {
						boxComments.removeChild(boxComments.firstChild);
						created--;
						console.log("-");
					} else {
						console.log("+");
						created++;
					}
					enterClicked = true;
				}
			});
		});
	}
	createBoxComments() {
		let boxComments = this.shadowRoot.querySelector(".boxComments");
		let icon = this.shadowRoot.getElementById("comment");
		let show = false;
		let btn = this.shadowRoot.querySelector(".addComment");
		icon.addEventListener("click", () => {
			if (show) {
				boxComments.style.cssText = `
			  animation:none;
			  width: 24px;
			  height: 24px;
			  position: absolute;
			  top: 53%;
			  left:14%;
			  animation: MoveToRight 2s forwards cubic-bezier(0,-0.67, 0.13, 1.49);`;

				boxComments.addEventListener("animationend", () => {
					icon.style.cssText = `
				top:auto;
				transition: all 3s;
				position: relative;
				z-index: 50;`;
				});
				btn.style.cssText = ` opacity:0; display:none; transition: all .5s`;
				show = false;
			} else {
				boxComments.style.animation =
					"showComments 3s forwards cubic-bezier(0,-0.67, 0.13, 1.49)";
				setTimeout(() => {
					btn.style.cssText = ` opacity:1; display:inline-block; transition: all 2s;
			  `;
				}, 3500);
				icon.setAttribute("src", "images/icon/comments.svg");
				boxComments.addEventListener("animationend", () => {
					icon.style.cssText = ` position: absolute; top:0; transition: all 3s;`;
					icon.setAttribute("src", "images/icon/close_circled.svg");
				});
				show = true;
			}
		});
	}
	static observedAttributes() {
		return ["post", "profile", "bio", "namePage", "pin"];
	}
}
export { postBox };
