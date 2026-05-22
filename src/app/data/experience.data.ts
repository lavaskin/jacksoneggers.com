import { ExperienceIdEnum } from '../models/enums/experience.enum';
import { SkillEnum } from '../models/enums/skills.enum';
import Experience from '../models/experience.model';
import projectsData from './projects.data';

const experiencesData: Experience[] = [
	{
		id: ExperienceIdEnum.OSU,
		link: 'https://oregonstate.edu/',
		place: 'Oregon State University',
		position: 'Undergraduate Student',
		description: "Bachelor of Science in Applied Computer Science. 3.57 GPA. Learned to work in a team environment, how to manage my time, and how to learn new technologies quickly. Took the artificial intelligence path which included courses in machine learning, natural language processing, and computer vision.",
		start: 'September 2017',
		end: 'December 2021',
		skills: [ SkillEnum.Java, SkillEnum.Cpp, SkillEnum.Python, SkillEnum.SQL, SkillEnum.AI, SkillEnum.ML, SkillEnum.Git, SkillEnum.Algorithms ],
		relevantProjects: [],
	},
	{
		id: ExperienceIdEnum.Freelance,
		place: 'Freelance Web Development',
		position: 'Web Developer',
		description: "Independent website development contracting and freelance work. Main stack is Angular for the frontend and Firebase for the backend and hosting. Mostly independent projects, but have taken some contracting positions as well like with EtherForm Inc. and a local catering business.",
		start: 'May 2022',
		end: 'Present',
		skills: [ SkillEnum.Angular, SkillEnum.TypeScript, SkillEnum.Firebase, SkillEnum.HTML, SkillEnum.CSS ],
		relevantProjects: [],
	},
	{
		id: ExperienceIdEnum.EtherForm,
		link: 'https://etherform.com',
		place: 'EtherForm Inc.',
		position: 'Software Engineering Contractor',
		description: `
			General software engineer for defense contracting startup mostly focusing on internal tooling and AFSIM integration research. 
			Wrote the company's Sensor Resource Manager as well as continued work on the GUI frontend of a platform monitoring project.
		`,
		start: 'November 2022',
		end: 'September 2023',
		skills: [ SkillEnum.Cpp, SkillEnum.Nuxt3, SkillEnum.VueJS, SkillEnum.Vuetify, SkillEnum.Drogon, SkillEnum.AFSIM, SkillEnum.Linux ],
		relevantProjects: [],
	},
	{
		id: ExperienceIdEnum.Buildable,
		link: 'https://buildableworks.com/',
		place: 'Buildable',
		position: 'Software Engineer',
		description: `
			General Software Engineer on a large variety of projects and technologies including, but not limited to: TV applications, websites and complex web applications. 
			My main project was the TV application series for CatholicTV, as well as their website. 
			I was also a primary developer on the webapp rewrite of Slidermetrics 'Dialsmith' project and played a smaller role on other projects like Stanford's health tracking app or 72Disciples community app.",
		`,
		start: 'March 2022',
		end: 'September 2025',
		skills: [ SkillEnum.Angular, SkillEnum.SQL, SkillEnum.Java, SkillEnum.Android, SkillEnum.Flutter, SkillEnum.VueJS, SkillEnum.Vuetify, SkillEnum.UIKit, SkillEnum.SwiftUI, SkillEnum.Python, SkillEnum.PHP],
		relevantProjects: [],
	},
	{
		id: ExperienceIdEnum.OfficeAlly,
		link: 'https://www.officeally.com/',
		place: 'Office Ally',
		position: 'Application Developer',
		description: `
			Application Developer on the realtime clearinghouse house. Primary responsibilities including maintaining and developing new features for our large client applications and internal tools. 
			Main technologies include .NET, Angular, SQL, and Kubernetes.
		`,
		start: 'September 2025',
		end: 'Present',
		skills: [ SkillEnum.Dotnet, SkillEnum.SQL, SkillEnum.Angular, SkillEnum.Kubernetes ],
		relevantProjects: [],
	}
];

// Add relevantProjects to each experience based on if it is listed in a project
experiencesData.forEach(e => {
	projectsData.forEach(p => {
		if (p.relevantExperience === e.id) e.relevantProjects.push(p.id);
	});
});

export default experiencesData.reverse();
