import Link from "./link.model";

export default interface Project {
	id: number,
	
	link?: string,
	title: string,
	description: string,
	links: Link[],
	images: string[],
	skills: string[],

	relevantExperiences: number[],
}