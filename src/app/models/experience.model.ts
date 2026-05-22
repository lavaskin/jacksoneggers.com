import { ExperienceIdEnum } from "./enums/experience.enum";
import { SkillEnum } from "./enums/skills.enum";

export default interface Experience {
	id: ExperienceIdEnum,
	
	link?: string,
	place: string,
	position: string,
	description: string,
	start: string,
	end: string,

	relevantProjects: number[], // populated in data file
	skills?: SkillEnum[],
}
