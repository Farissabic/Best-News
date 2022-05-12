import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { NgForm } from "@angular/forms";
import { BehaviorSubject, map, tap } from "rxjs";


@Injectable({providedIn : 'root'})
export class NewsStructure  {
   
    constructor (private http : HttpClient ){ }

     key : string = '8e5419e8506144d79f33cea804766087';
    
    PopularArticles:any;
    BusinessArticles:any;
    SportArticles:any;
    SearchArticles:any;

    pageSize = 10;
  
    Articles = new BehaviorSubject<any>(null);

   
   
    
     

     getPopularNews(){
        return this.http.get<any>('https://newsapi.org/v2/top-headlines',{
           
             params : new HttpParams()
             .set('apiKey', this.key)
             .set('country','us')
             .set('pageSize',20)
             
         }).pipe(map(response=>{
               
                const articles = response;
                this.PopularArticles = articles;
                return articles;
         }),tap(res=>{
             this.PopularArticles = res.articles;
         }))
     }


     getBusinessNews(){
       
        return this.http.get<any>('https://newsapi.org/v2/top-headlines',{
           
             params : new HttpParams()
             .set('apiKey', this.key)
             .set('country','us')
             .set('pageSize',100)
             .set('category','business')
             
         }).pipe(map(response=>{
                console.log(response);
                const articles = response;
                return articles;
         }),tap(res=>{
            this.BusinessArticles = res.articles;
            
        }))
        
     }

     getSportNews(){
      
        return this.http.get<any>('https://newsapi.org/v2/top-headlines',{
           
             params : new HttpParams()
             .set('apiKey', this.key)
             .set('country','us')
             .set('pageSize',100)
             .set('category','sports')
             
         }).pipe(map(response=>{
               
                console.log(response);
                const articles = response;
                return articles;
         }),tap(res=>{
            this.SportArticles = res.articles;
           
         })

         )

     }


     getSearchNews(q: string,l :string,s: string){

       return this.http.get<any>('https://newsapi.org/v2/everything',
      {
        params : new HttpParams()
          .set('apiKey', this.key)
          .set('q',q)
          .set('language', l)
          .set('sortBy', s)
          .set('pageSize' , 50)
      }).pipe(map(res=>{
          const articles = res.articles;
          return articles;
      }),tap(res=>{
          this.SearchArticles = res;
      }))
     }

}