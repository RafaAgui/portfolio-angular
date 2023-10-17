import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Project } from '../../models/project';
import { ProjectsService } from '../../services/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [ProjectsService]
})
export class ItemComponent implements OnInit{
  title= 'Proyecto';
  public project!: Project;
  public id!: string;
  public confirm: boolean;

  constructor(
    private _projectService: ProjectsService,
    private _router: Router,
    private _route: ActivatedRoute
    ){
      this.confirm = false;
  }

  ngOnInit(){
    this._route.params
    .pipe(switchMap ( ({id})=> this._projectService.getProjectId(id) ))
    .subscribe(project => this.project = project);
  }

  setConfirm(confirm: boolean){
    this.confirm = confirm;
  }

  deleteProject(id: string){
    this._projectService.deleteProject(this.project.id)
    .subscribe(resp => {
      this._router.navigate(['/proyectos'])
    })
  }
}
