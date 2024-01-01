import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import * as $ from 'jquery';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{
  @Input () widthS: number = 0;
  @Output () getAuthor = new EventEmitter;

  public author: any;

  constructor(){
    this.author = {
      name: 'Rafa',
      website: 'aguilaralvear.com'
    }
  }

  launchap (event: any){
    this.getAuthor.emit(this.author);
  }

  ngOnInit(){
    $('.gallery img').on('click', function() {
      var imgUrl = $(this).attr('src');
      var imgAlt = $(this).attr('alt');

      var lightbox = '<div class="lightbox">' +
          '<img src="' + imgUrl + '" alt="' + imgAlt + '">' +
          '</div>';

      $('main').append(lightbox);

      $('.lightbox').on('click', function() {
          $(this).remove();
      });
  });
  }
}
