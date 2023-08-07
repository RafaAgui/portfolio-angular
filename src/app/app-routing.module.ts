import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateProjectsComponent } from './components/create-projects/create-projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  // Default route to projects page on app load
  { path: '', component: AboutComponent },
  { path: 'sobre-mi', component: AboutComponent},
  { path: 'proyectos', component: ProjectsComponent},
  { path: 'crear-proyecto', component: CreateProjectsComponent},
  { path: 'contacto', component: ContactComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
