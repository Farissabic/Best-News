import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsStructure } from '../news-sorce/news-sorce.structure';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  constructor(private http : HttpClient, private newstService : NewsStructure, private router : Router) { }
  articles : any[] = [];
  noArticles = false;
  clearArticles = false;

  ngOnInit(): void {

    if(this.newstService.SearchArticles != null){
      this.articles = this.newstService.SearchArticles;
      this.newstService.Articles.next(this.articles);
      this.clearArticles = true;
    }

    this.noArticles = false;
   
  }

  

  Search(form :NgForm){

    console.log(form.value);
  
    localStorage.setItem('q',form.value.search);
    localStorage.setItem('country',form.value.country);
    localStorage.setItem('sortBy',form.value.sortBy);
    console.log(localStorage);

    this.newstService.getSearchNews(form.value.search,form.value.country,form.value.sortBy).subscribe(res=>{
      this.articles = res;
      this.newstService.Articles.next(this.articles);
      this.clearArticles = true;
  
      if(res.totalResults == 0){
        this.noArticles = true;
      }
    })
  }

  onClear(form :NgForm){
    this.articles = [];
    this.newstService.SearchArticles=[];
    this.noArticles = false;
    form.controls['search'].setValue('');
   // form.value.search = '';
    form.value.country = '';
    form.value.sortBy = '';
   
    console.log(form.value);
    
  }

  

}
