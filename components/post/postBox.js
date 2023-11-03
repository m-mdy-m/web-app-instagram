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
						<div class="  w-full h-5/6 relative ">
							<img src="images/image/Post.jpg" alt="" class="postImg w-full h-full object-cover rounded-b-xl ">
							<div class=" flex flex-col justify-around items-center [&>*]:cursor-pointer  w-8 h-40 linearGradient-100 absolute -right-10 bottom-6 rounded-xl linePost z-10 ">
								<img src="images/icon/like.svg" alt="like"  id="like" >
								<img src="images/icon/share.svg" alt="share" id="share"  class='mb-10'>
								<div class="boxComments w-[24px] h-[24px] !cursor-default -z-30 rounded-t-xl flex justify-between items-end absolute top-[53%] left-[14%]">
									<button class="addComment opacity-0 hidden w-6 h-6 rounded-full absolute right-6 top-0 hover:bg-[#4397b1]"></button>
									<div id="wrapperNew" class="animate-opacityAnimation flex-col hidden justify-center items-center opacity-100 w-full [&>*]:px-2 [&>*]:py-2 h-full rounded-lg bg-[#3e3939d0] ">
										<textarea class="h-3/4 w-full !pl-7 textArea resize-none overflow-y-hidden lowercase leading-5 text-xl focusInput text-start font-aktivLight text-PrimaryText-100 bg-transparent outline-0 border-0"></textarea>
										<div class="w-full h-1/4 flex justify-start   items-center   ">
											<img src="images/image/image_story2.jpg"  alt="profile" id="profileComment" class="hidden w-8 h-8 object-contain cursor-pointer  bg-black rounded-full border border-solid opacity-100 animate-opacityAnimation border-x-cyan-950 border-y-cyan-700 hover:border-cyan-700 transition-all duration-400 hover:border-2">
											<label for="selectFile" class="opacity-100 cursor-pointer w-24 h-full object-contain text-center capitalize text-white font-aktivRegular flex justify-center items-center rounded-md text-sm whitespace-nowrap bg-black border border-solid  animate-opacityAnimation border-x-teal-400 border-y-red-500 hover:border-red-700 transition-all duration-400 hover:border-2">select img</label>
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

		this.createBoxComments(
			this.getAttribute("comment"),
			this.getAttribute("profileComments"),
			this.getAttribute("profileName")
		);
		
		addComment(newComment, profile, username)
    // Your existing code for adding comments goes here
	
		

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
	addComment(newComment, profile, username) {
		let wrapperNew = this.shadowRoot.getElementById("wrapperNew");
		let btn = this.shadowRoot.querySelector(".addComment");
		let textarea = this.shadowRoot.querySelector("textarea");
		let userName = this.shadowRoot.getElementById("userName");
		let selectFile = this.shadowRoot.getElementById("selectFile");
		let img = this.shadowRoot.getElementById("profileComment");
		let wrapperFile = this.shadowRoot.querySelector("label");
		btn.addEventListener("click", () => {
			setTimeout(() => {
				wrapperNew.style.cssText = "display:flex;";
				selectFile.addEventListener("change", () => {
					img.src = URL.createObjectURL(selectFile.files[0]);
					img.style.display = "inline-block";
					wrapperFile.style.display = "none";
				});
			}, 500);
		});
		window.addEventListener("keypress", event => {
			if (event.keyCode === 13) {
				newComment = textarea.value;
      			username = userName.value;
      			profile = img.src;
      			return [newComment, username, profile];
			} else {
				console.log("type...");
			}
		});
	}
	createBoxComments(comment, profile, namePage) {
		let myComments = document.createElement("comments-box");
		myComments.setAttribute("comment", comment);
		myComments.setAttribute("profile", profile);
		myComments.setAttribute("namePage", namePage);
		let created = 0;
		let boxComments = this.shadowRoot.querySelector(".boxComments");
		let icon = this.shadowRoot.getElementById("comment");
		let show = false;
		let commentElements = new comments();
		let allComments = commentElements.templateComments();
		let btn = this.shadowRoot.querySelector(".addComment");
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
				btn.style.cssText = `
					opacity:0;
					display:none;
					transition: all .5s;
					`;
				show = false;
			} else {
				boxComments.style.animation =
					"showComments 3s forwards cubic-bezier(0,-0.67, 0.13, 1.49)";
				setTimeout(() => {
					allComments.style.cssText = `display:flex;;opacity:1;transition: all 3s; animation:MoveToBottom 1s forwards cubic-bezier(0,-0.67, 0.13, 1.49);`;
					btn.style.cssText = `
					opacity:1;
					display:inline-block;
					transition: all 2s;
					`;
				}, 3500);
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
