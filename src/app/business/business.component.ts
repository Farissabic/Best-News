import { Component, OnInit } from '@angular/core';
import { NewsStructure } from '../news-sorce/news-sorce.structure';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private newsService :NewsStructure) { }

  articles : any = [];
  items=0;
  br =100;
  clicked = false;

  ngOnInit(): void {
    if(this.newsService.BusinessArticles == null){
      this.newsService.getBusinessNews().subscribe(res=>{
        this.articles = res.articles;
        this.br = res.totalResults - 1;
        this.items = 10;
        this.newsService.Articles.next(res.articles);
      })
    }else{
      this.articles = this.newsService.BusinessArticles;
      this.items = 10;
      this.newsService.Articles.next(this.articles)
    }

   
  }

  loadNews(){
    this.items = this.br;
    this.clicked = true;
   
  }

}
