import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { BusinessComponent } from './business/business.component';
import { HomeComponent } from './home/home.component';
import { NewsResolverService } from './news-sorce/news-resolver.service';
import { SearchComponent } from './search/search.component';
import { SportComponent } from './sport/sport.component';

const routes: Routes = [
  {path : '' , redirectTo : '/home', pathMatch : 'full'},
  {path : 'home' , component : HomeComponent, children : [
    {path : ':id', component : ArticleComponent, resolve : [NewsResolverService]}
  ]},

  {path : 'business', component : BusinessComponent, children : [
    {path : ':id', component : ArticleComponent,resolve : [NewsResolverService]  }
  ]},

  {path : 'sport', component : SportComponent, children : [
    {path : ':id', component : ArticleComponent, resolve : [NewsResolverService] }
  ]},
  {path : 'search', component : SearchComponent, children : [
    {path : ':id', component : ArticleComponent, resolve : [NewsResolverService]}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
