import Experience from '../models/experience.model';
import projectsData from './projects.data';

// The ID's are constants, but the actual ordering of the data is not
// CURRENT TOP ID: 4
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
		relevantProjects: [],
	},
	{
		id: 2,
		place: 'Freelance Web Development',
		position: 'Web Developer',
		description: "Independent website development contracting and freelance work. Main stack is Angular for the frontend and Firebase for the backend and hosting. Mostly independent projects, but have taken some contracting positions as well like with EtherForm Inc. and a local catering business.",
		start: 'May 2022',
		end: 'Present',
		skills: ['angular', 'typescript', 'firebase', 'html', 'css', 'git'],
		relevantProjects: [],
	},
	{
		id: 3,
		link: 'https://etherform.com',
		place: 'EtherForm Inc.',
		position: 'Software Engineering Contractor',
		description: `
			General software engineer for defense contracting startup mostly focusing on internal tooling and AFSIM integration research. 
			Wrote the company's Sensor Resource Manager as well as continued work on the GUI frontend of a platform monitoring project.
		`,
		start: 'November 2022',
		end: 'September 2023',
		skills: ['c++', 'nuxt3', 'vue.js', 'vuetify', 'drogon', 'afsim', 'git', 'linux'],
		relevantProjects: [],
	},

	// At the top because current
	{
		id: 1,
		link: 'https://buildableworks.com/',
		place: 'Buildable',
		position: 'Software Engineer',
		description: "General Software Engineer on a large variety of projects and technologies including, but not limited to: TV applications, websites and complex web applications. My main project was the TV application series for CatholicTV, as well as their website. I was also a primary developer on the webapp rewrite of Slidermetrics 'Dialsmith' project and played a smaller role on other projects like Stanfords health tracking app or 72Disciples community app.",
		start: 'March 2022',
		end: 'Present',
		skills: ['Java', 'Android', 'Angular', 'Git', 'PHP', 'SQL', 'Flutter', 'Vue.js', 'Vuetify', 'UIKit', 'SwiftUI', 'Python'],
		relevantProjects: [],
	},
];

// Add relevantProjects to each experience based on if it is listed in a project
experiencesData.forEach(e => {
	projectsData.forEach(p => {
		if (p.relevantExperience === e.id) e.relevantProjects.push(p.id);
	});
});

export default experiencesData.reverse();