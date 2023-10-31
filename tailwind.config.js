/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		extend: {
			fontFamily: {
				mavis: "mavis",
				mavisBold: "MAVISBold",
				mavisLight: "MAVISLight",
				aktivBold: "AktivBold",
				aktivLight: "AktivLight",
				aktivRegular: "AktivRegular",
			},
			animation: {
				opacityAnimation: "opacityAnimation 2s forwards ;",
				MoveToRight : 'MoveToRight 0.2s forwards 3s cubic-bezier(0,-0.67, 0.13, 1.49);'
			},
		},
		container: {
			center: true,
			padding: "4rem",
		},
	},
	plugins: [],
};
