import Project from "../models/project.model";

const projectsData: Project[] = [
	{
		id: 0,
		title: 'CatholicTV',
		description: "Series of TV applications, the ones I helped develop including AndroidTV/FireTV, AppleTV and SamsungTV. I also worked on the website using a C# backend which builds static HTML and serves it from AWS. Head developer on the whole CatholicTV project.",
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
				href: 'https://apps.apple.com/us/app/catholictv/id323243305',
				icon: 'fab fa-apple',
			}
		],
		skills: ['angular', 'typescript', 'tizen', 'java', 'android', 'swift', 'uikit', 'aws', 'php', 'c#', '.net'],
		relevantExperience: 2,
	},
	{
		id: 1,
		title: 'Slidermetrix',
		description: "Online dial testing application for Dialsmith. I worked primarily on the Vue port of the frontend with minor .NET backend fixes when needed. Enterprise marketed web application with complex features such as realtime data polling, live video Q&A, and tons of admuin tools for setting up projects and tests. Sadly, there is no easy way of me getting screenshots of this software.",
		links: [
			{
				title: 'dialsmith',
				href: 'https://dialsmith.com/',
				icon: 'fas fa-globe',
			},
			{
				title: 'overview',
				href: 'https://www.dialsmith.com/wp-content/uploads/2021/01/Slidermetrix-overview-one-pager.pdf',
				icon: 'fas fa-file-pdf',
			}
		],
		skills: ['Vue.js', 'Vuetify', 'AWS', '.NET', 'Git', 'Jira', 'Agile', 'Kinesis'],
		relevantExperience: 2,
	},
	{
		id: 2,
		title: 'Slimes! Discord Bot',
		description: "Discord bot built with discord.py. Features a custom image splicing and generation so that users can create unique slimes to trade and collect. Website built in Angular with a Firebase backend for hosting and data providing so that users can more easily view their collections.",
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
		skills: ['discord.py', 'python', 'pillow', 'angular', 'firestore', 'firebase', 'git'],
	},
	{
		id: 3,
		title: 'guapish.com',
		description: "Angular website for a smaller podcast using typescript data files to store data and firebase hosting for hosting. Features advanced sorting and filtering features with a modern UI.",
		links: [
			{
				title: 'guapish.com',
				href: 'https://guapish.com/',
				icon: 'fas fa-globe',
			},
		],
		skills: ['angular', 'typescript', 'firebase', 'html', 'css', 'git'],
	},
	{
		id: 4,
		title: 'Cranny GUI',
		description: "Nuxt3 GUI frontend for the channel reactor platform monitor software. Took in data through the channel reactor rest api to use in various live graphs and tables. classified software, so no screenshots or links.",
		skills: ['vue3', 'nuxt3', 'drogon'],
		relevantExperience: 3,
	},
];

export default projectsData;