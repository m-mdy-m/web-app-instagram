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
		},
		container:{
			center:true,
			padding:'4rem',
		}
	},
	plugins: [],
};
