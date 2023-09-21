import { Component } from '@angular/core';
import { Project } from '../../interface/project.interface'
import { ProjectsService } from '../../services/project.service'

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.scss'],
  providers: [ProjectsService]
})
export class CreateProjectsComponent {

}
