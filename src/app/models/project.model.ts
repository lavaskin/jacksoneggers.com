import Link from "./link.model";

export default interface Project {
	id: number,
	
	title: string,
	description: string,
	links?: Link[],
	images?: string[],
	skills: string[],

	relevantExperience?: number,
}