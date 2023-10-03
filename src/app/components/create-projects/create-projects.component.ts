import { Component } from '@angular/core';

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
  ){
    this.title = "Crear proyecto";
    this.project = new Project ( '', '', '', '', '');
    this.status = '';
    this.filesToUpload = [];
  }

  onSubmit(form: any){

    //guardar los datos
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response){
          this.status = 'success';

          this._uploadService.makeFileRequest(this.apiURL+"upload-imae/"+response.project, [], this.filesToUpload, '').then((result:any) => {
              console.log(result)
          });
          form.reset();
        }
        else{
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  fileChangeEvent(fileInput: any){
    console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}

