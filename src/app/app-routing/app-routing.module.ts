import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from '../article/article.component';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  { path: 'article', component: ArticleComponent },
  { path: 'dashboard', component: AppComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }