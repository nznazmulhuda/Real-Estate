/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				lato: "lato",
				josefin: "Josefin",
			},
			fontSize: {
				md: "16px",
			},
		},
	},
	plugins: [require("daisyui")],
};
