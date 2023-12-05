import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

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
