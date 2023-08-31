import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
public title: string = 'Rafael Aguilar';
public subtitle: string = 'Desarrollador web';
public web: string = 'https://rafaelaguilar.es';


}
