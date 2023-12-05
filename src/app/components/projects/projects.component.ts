import { Component, OnInit, AfterViewInit, ElementRef  } from '@angular/core';
import { Project } from '../../models/project'
import { ProjectsService } from '../../services/project.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit, AfterViewInit  {
  public projects: Project[];
  public title: string;

  constructor(
    private _projectService: ProjectsService,
    private el: ElementRef){
    this.title = 'Proyectos realizados';
    this.projects = [];
  }

  ngAfterViewInit() {
    // Este método se llama después de que la vista del componente se ha inicializado
    this.agregarClaseCuandoCargado();
  }

  private agregarClaseCuandoCargado() {
    // Lógica para determinar si la página se ha cargado completamente
    // Aquí puedes usar eventos del DOM o funciones de terceros según tus necesidades

    // Por ejemplo, puedes usar el evento load del objeto window
    window.addEventListener('load', () => {
      // La página se ha cargado completamente, ahora agrega la clase al host
      this.el.nativeElement.classList.add('loaded');
    });
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
