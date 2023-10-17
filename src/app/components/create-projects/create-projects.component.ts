import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Project } from '../../models/project'
import { ProjectsService } from '../../services/project.service'
import { UploadService } from '../../services/upload.service'

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.scss'],
  providers: [ProjectsService, UploadService]
})
export class CreateProjectsComponent {
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  private apiURL = 'http://localhost:3000/projects';

  constructor(
    private _projectService: ProjectsService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.title = "Crear proyecto";
    this.project = new Project ( '', '', '', '', '', '', '' );
    this.status = '';
    this.filesToUpload = [];
  }

//   onSubmit(form: any){

//     //guardar los datos
//     this._projectService.saveProject(this.project).subscribe(
//       response => {
//         if(response){
//           console.log(this.filesToUpload);
//           this._uploadService.makeFileRequest(this.apiURL+this.filesToUpload);


//           form.reset();
//         }
//         else{
//           this.status = 'failed';
//         }
//       },
//       error => {
//         console.log(<any>error);
//       }
//     );
//   }
//   fileChangeEvent(fileInput: any){
//     console.log(fileInput);
//     this.filesToUpload = fileInput.target.files.name;
//   }
// }

onSubmit(form: any) {
  if(this.project.name.trim().length === 0){
    return;
  }
  if (this.project.id){
    this._projectService.updateProject(this.project)
    .subscribe (project => console.log('Actualizar película', project))
  } else {

    this._projectService.saveProject(this.project)
    .subscribe(project => {
      this._router.navigate(['/proyectos/proyecto/', project.id]);
    })
  }
}

ngOnInit(): void {
  this._route.params
  .pipe(
    switchMap( ({id}) => this._projectService.getProjectId(id))
  )
  .subscribe(project => {this.project = this.project})
}
}
