import { Component, OnInit } from '@angular/core';
import experienceData from '../../data/experience.data';
import projectsData from '../../data/projects.data';
import { ExperienceIdEnum } from '../../models/enums/experience.enum';
import { ProjectIdEnum } from '../../models/enums/projects.enum';
import Experience from '../../models/experience.model';
import Project from '../../models/project.model';
import { TitleCardComponent } from '../../components/title-card/title-card.component';
import { ProjectComponent } from '../../components/project/project.component';
import { ExperienceItemComponent } from '../../components/experience-item/experience-item.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [TitleCardComponent, ProjectComponent, ExperienceItemComponent]
})
export class HomeComponent {
	public recentExperience: Experience = this.getFeaturedExperience(ExperienceIdEnum.OfficeAlly);
	public featuredProject: Project = this.getFeaturedProject(ProjectIdEnum.ServiceCenter);

	ngAfterViewInit(): void {
		const sectionsCollection = document.getElementsByTagName('section') as HTMLCollectionOf<HTMLElement>;
		const sections = Array.from(sectionsCollection);
		
		function fadeInSections(sections: any, index: number) {
			if (index >= sections.length) return;
			
			const section = sections[index];
			section.classList.add('slide-fade-in');
			
			setTimeout(() => fadeInSections(sections, index + 1), 250);
		}
		  
		fadeInSections(sections, 1);
	}

	private getFeaturedProject(id: ProjectIdEnum): Project {
		const project = projectsData.find(project => project.id === id);
		return project ? project : projectsData[0];
	}
	private getFeaturedExperience(id: ExperienceIdEnum): Experience {
		const experience = experienceData.find(experience => experience.id === id);
		return experience ? experience : experienceData[0];
	}
}
