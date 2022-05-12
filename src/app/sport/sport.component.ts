
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsStructure } from '../news-sorce/news-sorce.structure';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor(private newsService :NewsStructure, private router :Router) { }
  

  articles : any = [];
  items=0;
  br =100;
  clicked = false;
 
  ngOnInit(): void {

    if(this.newsService.SportArticles == null){
      this.newsService.getSportNews().subscribe(res=>{
        this.articles = res.articles;
        this.br = res.totalResults - 1;
        this.items = 10;
        this.newsService.Articles.next(res.articles);
      })
      
    }
    else{
      this.articles = this.newsService.SportArticles;
      this.items = 10;
      this.newsService.Articles.next(this.articles);
      
    }

    
    
    
  }

  loadNews(){
    this.items = this.br;
    this.clicked = true;
  }
}




