import Experience from '../models/experience.model';

const experiencesData: Experience[] = [
	{
		id: 1,
		link: 'https://oregonstate.edu/',
		place: 'Oregon State University',
		position: 'Undergraduate Student',
		description: "Bachelor of Science in Applied Computer Science. 3.57 GPA.",
		start: 'September 2017',
		end: 'December 2021',
		skills: ['Java', 'C++', 'Git', 'Python', 'SQL', 'ML/AI', 'Haskell', 'Algorithms'],
	},
	{
		id: 2,
		link: 'https://buildableworks.com/',
		place: 'Buildable',
		position: 'Software Engineer',
		description: "General Software Engineer on a large variety of projects and technologies including, but not limited to: TV applications, websites and complex web applications.",
		start: 'May 2022',
		end: 'February 2023',
		skills: ['Java', 'Android', 'Angular', 'Git', 'PHP', 'SQL', 'Flutter', 'Vue.js', 'Vuetify', 'UIKit', 'SwiftUI', 'Python'],
	},
	{
		id: 3,
		link: 'https://etherform.com',
		place: 'EtherForm Inc.',
		position: 'Software Engineering Contractor',
		description: "Contracting position where I worked on the GUI frontend of a platform monitoring project.",
		start: 'November 2022',
		end: 'February 2023',
		skills: ['Nuxt3', 'Vue.js', 'Vuetify', 'Drogon'],
	},
	{
		id: 4,
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