import { Component, OnInit } from '@angular/core';
import { NewsStructure } from '../news-sorce/news-sorce.structure';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private newsService : NewsStructure) { }

  date: Date = new Date();

  time = new Date();
  intervalId:any;

  ngOnInit(): void {

    

    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

  }

}
