import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'
import { ProjectsService } from '../../services/project.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit  {
  public projects: Project[];
  public title: string;

  constructor(private _projectService: ProjectsService){
    this.title = 'Proyectos realizados';
    this.projects = [];
  }

  ngOnInit(){
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response => {
        if(response){
          this.projects = response;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
