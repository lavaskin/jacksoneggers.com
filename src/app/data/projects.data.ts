import Project from "../models/project.model";

// The ID's are constants, but the actual ordering of the data is not
// CURRENT TOP ID: 8
const projectsData: Project[] = [
	{
		id: 5,
		title: 'League Lookup',
		description: "Mobile Android application that queries the League of Legends API for character information and formats it into a recyclerview list that can be filtered, sorted and interacted with. Data is stored in local storage and the API is queried every boot to check if the local database needs to be updated. Made with a team of 4 for a Mobile Development course.",
		links: [
			{
				title: 'github',
				href: 'https://github.com/lavaskin/League-Lookup',
				icon: 'fab fa-github',
			},
		],
		skills: ['java', 'android', 'retrofit', 'gson', 'git'],
		relevantExperience: 0,
	},
	{
		id: 6,
		title: 'Draw and Play',
		description: "Leader of the project. Unity based mobile game for Android devices where users take a picture of a maze they drew, the game converts the image to game objects, and then the user can navigate through said maze. Android Studio needed to write a camera/photo gallery plugin. Everything else built with Unity for Android devices.",
		skills: ['unity', 'c#', 'java', 'android', 'git'],
		relevantExperience: 0,
	},
	{
		id: 0,
		title: 'CatholicTV',
		description: "Series of TV applications; the ones I helped develop being AndroidTV/FireTV, AppleTV and SamsungTV. I also worked on the website using a C# backend which builds static HTML and serves it from AWS. Head developer on the whole CatholicTV project. I built both the SamsungTV and AppleTV apps from scratch, which let me learn how to develop with Tizen and SwiftUI/UIKit respectively.",
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
		skills: ['angular', 'typescript', 'tizen', 'java', 'android', 'swift', 'uikit', 'aws', 'php', 'c#', '.net', 'git'],
		relevantExperience: 1,
		images: [
			'assets/pictures/ctv/0.webp',
			'assets/pictures/ctv/1.webp',
			'assets/pictures/ctv/2.webp',
		],
	},
	{
		id: 1,
		title: 'Slidermetrix',
		description: "Online dial testing application for Dialsmith. I worked primarily on the Vue port of the frontend with minor .NET backend fixes when needed. Enterprise marketed web application with complex features such as realtime data polling, live video Q&A, and tons of admin tools for setting up projects and tests.",
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
		skills: ['Vue.js', 'Vuetify', 'javascript', 'css', 'html', 'AWS', '.NET', 'Git', 'Jira', 'Agile', 'Kinesis'],
		relevantExperience: 1,
	},
	{
		id: 7,
		title: 'Stanford Health Tracking App',
		description: "Cross-platform health watching app where users (or patient providers) can log daily information and keep on top of data. I was tasked with the actual tracking page where users input their various data points (heart rate, weight, steps, etc) and then see them graphed in different ways with notifications for streaks. I also worked on the overall structure of the app, the .NET backend and admin interface in Angular.",
		skills: ['flutter', 'dart', 'isar', 'angular', '.net', 'c#', 'git'],
		relevantExperience: 1,
	},
	{
		id: 2,
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
		skills: ['discord.py', 'python', 'pillow', 'angular', 'firestore', 'firebase', 'git'],
	},
	{
		id: 3,
		title: 'guapish.com',
		description: "Angular website for a smaller podcast using typescript data files to store data and firebase for hosting. Features advanced sorting and filtering features with a modern UI. Updated weekly as new episodes are released.",
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
		skills: ['angular', 'typescript', 'firebase', 'html', 'css', 'git'],
		images: [
			'assets/pictures/guapish/0.webp',
			'assets/pictures/guapish/1.webp',
			'assets/pictures/guapish/2.webp',
			'assets/pictures/guapish/3.webp',
		],
	},
	{
		id: 4,
		title: 'Cranny GUI',
		description: "Nuxt3 GUI frontend for the channel reactor platform monitoring software. Takes in data through the channel reactor rest api to use in various live graphs and tables. classified software, so no screenshots or links.",
		skills: ['vue3', 'nuxt3', 'javascript', 'css', 'html', 'drogon'],
		relevantExperience: 2,
	},
	{
		id: 8,
		title: 'jacksoneggers.com',
		description: "The site you're currently viewing! Built with Angular with no fancy libraries, hosted with Firebase hosting. Simple portfolio website that consumes basic typescript data files to showcase my projects and experience.",
		links: [
			{
				title: 'github',
				href: 'https://github.com/lavaskin/jacksoneggers.com',
				icon: 'fab fa-github',
			},
			{
				title: 'if you really need it',
				href: '/home',
				icon: 'fas fa-home',
			}
		],
		skills: ['angular', 'typescript', 'firebase', 'html', 'css', 'git'],
	}
];

export default projectsData.reverse();