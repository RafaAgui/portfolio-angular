import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project'

@Injectable({
  providedIn: 'root'
})

export class UploadService {
  private apiURL = 'http://localhost:3000/projects';


  constructor(private http: HttpClient) {}
  makeFileRequest(url: string){
    return new Promise(function(resolve, reject){
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();

      // for(var i = 0; i < files.length; i++){
      //   formData.append(name, files[i], files[i].name);
      // }

      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response)
          }
        }
      }

      xhr.open('POST', url, true)
      xhr.send(url);
    });
  }

}
