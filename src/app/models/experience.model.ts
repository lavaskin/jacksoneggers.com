export default interface Experience {
	id: number,
	
	link?: string,
	place: string,
	position: string,
	description: string,
	start: string,
	end: string,

	relevantProjets?: number[],
	skills?: string[],
}