import { Pipe, PipeTransform } from '@angular/core';
import { ProjectInterface } from '../interface/project.interface';

@Pipe({
  name: 'image'
})

export class ImagePipe implements PipeTransform {

  transform(project: ProjectInterface ): string {
    if(!project.id && !project.alt_img)
    {
      return 'assets/placeholder.jpg';
    } else if (project.alt_img) {
      return project.alt_img;
    }
    return `assets/images/${project.id}.jpg`
  }

}
