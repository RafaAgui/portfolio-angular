import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public widthSlider: number = 0;
  public widthToSlider: number = 0;

  author: any

  loadSlider (){
    this.widthToSlider = this.widthSlider;
  }

  showAuthor(event: any){
    this.author = event;
  }
}
