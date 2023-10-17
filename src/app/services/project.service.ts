import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project'




@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  private apiURL = 'http://localhost:3000/projects';


  constructor(private http: HttpClient) {}


  getProducts(): Observable<Project[]>{
    return this.http.get<Project[]>(this.apiURL);
  }

  getProjectId(id: string): Observable<Project> {
    return this.http.get<Project>(`http://localhost:3000/projects/${id}`)
  }

  // deleteProject(id: string): Observable<Project> {
  //   return this.http.delete<Project>(`http://localhost:3000/projects/${id}`)
  // }



  saveProject(project: Project): Observable<any>{
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.apiURL, params, {headers: headers});
  }

  getProjects(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.apiURL, {headers: headers});
  }

  // deleteProject(id: number): Observable<any>{
  //   let headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.delete(this.apiURL+'/'+id, {headers: headers});
  // }

  deleteProject(id: string) : Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/projects/${id}`);
  }

  updateProject(project: Project) : Observable<Project> {
    return this.http.put<Project>(`http://localhost:3000/projects/${project.id}`, project);
  }
}
