import { ExperienceIdEnum } from "./enums/experience.enum";
import { ProjectIdEnum } from "./enums/projects.enum";
import { SkillEnum } from "./enums/skills.enum";
import Link from "./link.model";

export default interface Project {
	id: ProjectIdEnum,
	
	title: string,
	description: string,
	links?: Link[],
	images?: string[],
	skills: SkillEnum[],

	relevantExperience?: ExperienceIdEnum, // populated in data file
}
