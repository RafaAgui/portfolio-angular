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

  getProductsId(id: number): Observable<Project>{
    return this.http.get<Project>(`${this.apiURL}/${id}`);
  }

  saveProject(project: Project): Observable<any>{
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.apiURL, params, {headers: headers});
  }

  getProjects(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.apiURL, {headers: headers});
  }
}
