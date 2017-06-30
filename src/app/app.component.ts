import { Component } from '@angular/core';
import {PostService} from './post.service';
import { HttpModule } from '@angular/http';
import {OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
  // template:`
  //           // <div *ngIf="isLoading">
  //           //   <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
  //           //   <span class="sr-only">Loading...</span>
  //           // </div>

  //           <div *ngFor="let post of posts">
  //           {{post.id}}
            
  //           </div>
            
  //           `,
  providers:[PostService, HttpModule]
})
export class AppComponent{
  // title = 'app';
 // isLoading = true;
  posts = {};
  

  constructor(private _postService:PostService){
      this._postService.getPosts()
          .subscribe(res =>{
            this.posts = res;
            
          });
        //   .subscribe(res =>console.log(res));
          
  }

  
  // constructor(private _postService:PostService){
  // }

  // ngOnInit(){
  //        this._postService.getPosts()
  //         .then(posts=>{
  //           this.isLoading = false;
  //           console.log(posts[0].id);
            
  //         });
  // }

}
