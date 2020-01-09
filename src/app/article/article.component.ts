import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ ARTICLES } from '../mock-articles';
import{ Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article : any= {};

  constructor(private activatedRoute: ActivatedRoute) { 

  this.activatedRoute.params.subscribe(params=>{
    console.log(ARTICLES[params.id]);
    this.article=ARTICLES[params.id];
    })
  }
   

  ngOnInit() {
  }

}