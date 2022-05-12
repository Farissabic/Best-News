import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsStructure } from '../news-sorce/news-sorce.structure';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  constructor(private route : ActivatedRoute, private router : Router, private newsService : NewsStructure) { }
 
 
  

  subscriber: Subscription = new Subscription;

  index : number = this.route.snapshot.params['id'];
  article : any;
  
  
  ngOnInit() {
    this.subscriber = this.newsService.Articles.subscribe(res=>{
      this.article = res[this.index];
      
    })
  
    
   
  }

  back(){
    this.router.navigate(['../'],{ relativeTo : this.route} );
  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }

}

