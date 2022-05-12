import { Component, OnInit } from '@angular/core';
import { NewsStructure } from './news-sorce/news-sorce.structure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor( private newsService : NewsStructure){}

  ngOnInit() {
  
      
  }
  
}
