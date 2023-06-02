import Experience from '../models/experience.model';

const experiencesData: Experience[] = [
	{
		id: 0,
		link: 'https://oregonstate.edu/',
		place: 'Oregon State University',
		position: 'Undergraduate Student',
		description: "Bachelor of Science in Applied Computer Science. 3.57 GPA. Learned to work in a team environment, how to manage my time, and how to learn new technologies quickly. Took the artificial intelligence path which included courses in machine learning, natural language processing, and computer vision.",
		start: 'September 2017',
		end: 'December 2021',
		skills: ['Java', 'C++', 'Git', 'Python', 'SQL', 'ML/AI', 'Haskell', 'Algorithms'],
	},
	{
		id: 1,
		link: 'https://buildableworks.com/',
		place: 'Buildable',
		position: 'Software Engineer',
		description: "General Software Engineer on a large variety of projects and technologies including, but not limited to: TV applications, websites and complex web applications. My main project was the TV application series for CatholicTV, as well as their website. I was also a primary developer on the webapp rewrite of Slidermetrics 'Dialsmith' project and played a smaller role on other projects like Stanfords health tracking app or 72Disciples community app.",
		start: 'May 2022',
		end: 'February 2023',
		skills: ['Java', 'Android', 'Angular', 'Git', 'PHP', 'SQL', 'Flutter', 'Vue.js', 'Vuetify', 'UIKit', 'SwiftUI', 'Python'],
	},
	{
		id: 2,
		link: 'https://etherform.com',
		place: 'EtherForm Inc.',
		position: 'Software Engineering Contractor',
		description: "Contracting position where I worked on the GUI frontend of a platform monitoring project. Built the interface in Vue3 using Nuxt3 and Vuetify for styling. Consumed a REST API built in Drogon and deployed on independant linux machines.",
		start: 'November 2022',
		end: 'February 2023',
		skills: ['Nuxt3', 'Vue.js', 'Vuetify', 'Drogon'],
	},
	{
		id: 3,
		link: 'https://etherform.com',
		place: 'EtherForm Inc.',
		position: 'Software Engineer',
		description: "General software engineer for defense contracting startup mostly focusing on internal tooling and AFSIM integration research. Wrote the companies Sensor Resource Manager as well as continued work on the GUI frontend of a platform monitoring project.",
		start: 'February 2022',
		end: 'May 2023',
		skills: ['C++', 'Nuxt3', 'Vue.js', 'Vuetify', 'Drogon', 'AFSIM', 'Git', 'Linux'],
	},
];

export default experiencesData.reverse();