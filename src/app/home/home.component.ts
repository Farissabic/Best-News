
import { Component, OnInit } from '@angular/core';
import { NewsStructure } from '../news-sorce/news-sorce.structure';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private newsService : NewsStructure) { }


  articles: any [] = [];
  
 
  ngOnInit(): void {

    if(this.newsService.PopularArticles == null){
      this.newsService.getPopularNews().subscribe(res=>{
        this.articles = res.articles;
        this.newsService.Articles.next(res.articles);
      })
      
    }
    else{
      this.articles = this.newsService.PopularArticles;
      this.newsService.Articles.next(this.articles);
      
    }
  }
}