import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { forkJoin, tap } from 'rxjs';
import { NewsStructure } from "./news-sorce.structure";

@Injectable({providedIn : 'root'})
export class NewsResolverService implements Resolve<any>{

    constructor(private newsSorceService : NewsStructure, private router :Router){}

   

    resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot){
 
        if(this.newsSorceService.SportArticles == null || 
            this.newsSorceService.BusinessArticles == null  || this.newsSorceService.SearchArticles == null ){
      
            return forkJoin([
                this.newsSorceService.getSportNews(),
                this.newsSorceService.getBusinessNews(),
                this.newsSorceService.getPopularNews(),
                this.newsSorceService.getSearchNews(localStorage['q'],localStorage['country'],localStorage['sortBy'])
            ])
        }
        return false; 
    } 
}


