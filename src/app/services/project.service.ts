import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../interface/project.interface'



@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  private apiURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Project[]>{
    return this.http.get<Project[]>(this.apiURL);
  }

  getProductsId(id: number): Observable<Project>{
    return this.http.get<Project>(`${this.apiURL}/${id}`);
  }

}
