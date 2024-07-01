/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'ciblue' : '#11263B',
				'cipink' : '#FF61B3',
				'ciblue2' : '#3D51FF',
				'cigreen' : '#4ec826',
				'ciorange' : '#FF8E35',
				'midnight': '#121063',
				'metal': '#565584',
				'tahiti': '#3ab7bf',
				'silver': '#ecebff',
				'bubble-gum': '#ff77e9',
				'bermuda': '#78dcca'
			},
			zIndex: {
				'60' : '60'
			},
			gap : {
				'20' : '5em',
				'30' : '8em',
				'40' : '9em'
			},
			padding : {
				'18' : '4.5em',
				'20' : '5em',
				'30' : '8em',
				'40' : '9em'
			}
		},
	},
	plugins: [],
}
