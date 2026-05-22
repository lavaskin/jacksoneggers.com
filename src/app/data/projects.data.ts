import { ExperienceIdEnum } from "../models/enums/experience.enum";
import { ProjectIdEnum } from "../models/enums/projects.enum";
import { SkillEnum } from "../models/enums/skills.enum";
import Project from "../models/project.model";

const projectsData: Project[] = [
	{
		id: ProjectIdEnum.LeagueLookup,
		title: 'League Lookup',
		description: `
			Mobile Android application that queries the League of Legends API for character information and formats it into a recyclerview list that can be filtered, 
			sorted and interacted with. Data is stored in local storage and the API is queried every boot to check if the local database needs to be updated.
			Made with a team of 4 for a Mobile Development course.
		`,
		links: [
			{
				title: 'github',
				href: 'https://github.com/lavaskin/League-Lookup',
				icon: 'fab fa-github',
			},
		],
		skills: [ SkillEnum.Android, SkillEnum.Java, SkillEnum.Git ],
		relevantExperience: ExperienceIdEnum.OSU,
		images: [
			'assets/pictures/league/0.webp',
		],
	},
	{
		id: ProjectIdEnum.DrawAndPlay,
		title: 'Draw and Play',
		description: `
			Leader of the project. Unity based mobile game for Android devices where users take a picture of a maze they drew, 
			the game converts the image to game objects, and then the user can navigate through said maze. Android Studio needed to write a camera/photo gallery plugin. 
			Everything else built with Unity for Android devices.
		`,
		skills: [ SkillEnum.Unity, SkillEnum.CSharp, SkillEnum.Java, SkillEnum.Android ],
		relevantExperience: ExperienceIdEnum.OSU,
	},
	{
		id: ProjectIdEnum.Slimes,
		title: 'Slimes! Discord Bot',
		description: "Discord bot built with discord.py and Pillow. Features a custom image splicing and generation so that users can create unique slimes to trade and collect. Website built in Angular with a Firebase backend for hosting and data providing so that users can more easily view their collections.",
		links: [
			{
				title: 'website',
				href: 'https://slimes.lavask.in',
				icon: 'fas fa-globe',
			},
			{
				title: 'github',
				href: 'https://github.com/lavaskin/slimes-bot',
				icon: 'fab fa-github',
			},
			{
				title: 'bot invite',
				href: 'https://discord.com/api/oauth2/authorize?client_id=491793054894653452&permissions=8&scope=bot',
				icon: 'fas fa-robot',
			}
		],
		skills: [ SkillEnum.Python, SkillEnum.Angular, SkillEnum.Firebase ],
		relevantExperience: ExperienceIdEnum.Freelance,
		images: [
			'assets/pictures/slimes/0.webp',
			'assets/pictures/slimes/1.webp',
			'assets/pictures/slimes/2.webp',
		],
	},
	{
		id: ProjectIdEnum.Guapish,
		title: 'guapish.com',
		description: `
			Angular website for a smaller podcast using typescript data files to store data and firebase for hosting. Features advanced sorting and filtering features with a modern UI. 
			Updated weekly as new episodes are released.
		`,
		links: [
			{
				title: 'website',
				href: 'https://guapish.com/',
				icon: 'fas fa-globe',
			},
			{
				title: 'github',
				href: 'https://github.com/lavaskin/guapish.com',
				icon: 'fab fa-github',
			}
		],
		skills: [ SkillEnum.Angular, SkillEnum.Firebase ],
		images: [
			'assets/pictures/guapish/0.webp',
			'assets/pictures/guapish/1.webp',
			'assets/pictures/guapish/2.webp',
			'assets/pictures/guapish/3.webp',
			'assets/pictures/guapish/4.webp',
		],
		relevantExperience: ExperienceIdEnum.Freelance,
	},
	{
		id: ProjectIdEnum.ThisWebsite,
		title: 'jacksoneggers.com',
		description: `
			Built with pure Angular; hosted with Firebase hosting. Simple portfolio website that consumes static typescript data files to showcase my projects and experience, as well as link to various relevant socials. 
			Automatic deploys on push to master through Github actions.
		`,
		links: [
			{
				title: 'github',
				href: 'https://github.com/lavaskin/jacksoneggers.com',
				icon: 'fab fa-github',
			},
		],
		skills: [ SkillEnum.Angular, SkillEnum.Firebase ],
		relevantExperience: ExperienceIdEnum.Freelance,
	},
	{
		id: ProjectIdEnum.CatholicTV,
		title: 'CatholicTV',
		description: `
			CatholicTV is a Catholic TV network used by millions of users monthly, with a series of TV apps and a streaming website. 
			I was the primary developer and maintainer for their products at Buildable, writing both the AppleTV and SamsungTV apps from scratch, as well as maintaining the Android/FireTV app and the website.
		`,
		links: [
			{
				title: 'website',
				href: 'https://www.catholictv.org/',
				icon: 'fas fa-globe',
			},
			{
				title: 'samsungtv',
				href: 'https://www.samsung.com/us/appstore/app.do?appId=G17044009125',
				icon: 'fas fa-store',
			},
			{
				title: 'firetv',
				href: 'https://www.amazon.com/Buildableworks-CatholicTV/dp/B09DZ5DGY2',
				icon: 'fab fa-amazon',
			},
			{
				title: 'appletv',
				href: 'https://apps.apple.com/us/app/catholictv/id323243305?platform=appleTV',
				icon: 'fab fa-apple',
			}
		],
		skills: [ SkillEnum.Angular, SkillEnum.Dotnet, SkillEnum.AWS, SkillEnum.SQL, SkillEnum.Tizen, SkillEnum.Android, SkillEnum.SwiftUI, SkillEnum.PHP ],
		relevantExperience: ExperienceIdEnum.Buildable,
		images: [
			'assets/pictures/ctv/0.webp',
			'assets/pictures/ctv/1.webp',
		],
	},
	{
		id: ProjectIdEnum.Slidermetrix,
		title: 'Slidermetrix',
		description: `
			Online dial testing application for Dialsmith. I worked primarily on the Vue port of the frontend with minor .NET backend fixes when needed. 
			Enterprise marketed web application with complex features such as real-time data polling, live video Q&A, and tons of admin tools for setting up projects and tests.
		`,
		links: [
			{
				title: 'website',
				href: 'https://dialsmith.com/',
				icon: 'fas fa-globe',
			},
			{
				title: 'overview',
				href: 'https://www.dialsmith.com/wp-content/uploads/2021/01/Slidermetrix-overview-one-pager.pdf',
				icon: 'fas fa-file-pdf',
			}
		],
		skills: [ SkillEnum.VueJS, SkillEnum.AWS, SkillEnum.Dotnet, SkillEnum.Vuetify, SkillEnum.JavaScript ],
		relevantExperience: ExperienceIdEnum.Buildable,
	},
	{
		id: ProjectIdEnum.Stanford,
		title: 'Stanford Health Tracking App',
		description: `
			Cross-platform health watching app where users (or patient providers) can log daily information and keep on top of data. 
			I was tasked with the actual tracking page where users input their various data points (heart rate, weight, steps, etc) and then see them graphed in different ways with notifications for streaks. 
			I also worked on the overall structure of the app, the .NET backend and admin interface in Angular.
		`,
		skills: [ SkillEnum.Flutter, SkillEnum.Angular, SkillEnum.Dotnet, SkillEnum.SQL ],
		relevantExperience: ExperienceIdEnum.Buildable,
	},
	{
		id: ProjectIdEnum.CrannyGUI,
		title: 'Cranny GUI',
		description: `
			Nuxt3 GUI frontend for the channel reactor platform monitoring software. Takes in data through the channel reactor rest api to use in various live graphs and tables. 
			Classified software, so no screenshots or links.
		`,
		skills: [ SkillEnum.Nuxt3, SkillEnum.VueJS, SkillEnum.Drogon ],
		relevantExperience: ExperienceIdEnum.EtherForm,
	},
	{
		id: ProjectIdEnum.ServiceCenter,
		title: 'Service Center',
		description: `
			Trusted by over 80,000 healthcare organizations, Service Center by Office Ally® enables fast and easy claims submission. 
			Real-time eligibility & benefits verification and automated claims processing workflows reduce paperwork and speed up reimbursement. 
			Frontend built in Angular with a .NET manager backend, primarily leveraging SQL for data management/processing and Kubernetes for deployments/hosting.
		`,
		links: [
			{
				title: 'website',
				href: 'https://cms.officeally.com/products/service-center',
				icon: 'fas fa-globe',
			},
		],
		skills: [ SkillEnum.Dotnet, SkillEnum.Angular, SkillEnum.SQL, SkillEnum.Kubernetes ],
		relevantExperience: ExperienceIdEnum.OfficeAlly,
		images: [
			'assets/pictures/service_center/claims_list.png'
		]
	}
];

export default projectsData.reverse();
