/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			boxShadow: {
				navbar: "0px 2px 12px rgba(0, 0, 0, 0.08)",
			},
			textColor: {
				primary: "#8064A2",
				secondary: " #0096C8",
			},
			borderColor: {
				primary: "#8064A2",
			},
		},
	},
	plugins: [],
};
