import {Http} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';
import {Post} from './post';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class PostService{

    private _url ="https://jsonplaceholder.typicode.com/posts";
    constructor(private _http:Http){

    }

    // getPosts(): Promise<Post>{
    //     return this._http.get(this._url)
    //         .map(res=>res.json())
    //         .toPromise();
    // }

    // createPost(post: Post){
    //    return this._http.post(this._url, JSON.stringify(post))
    //         .map(res=>res.json());
    // }


     getPosts(){
        return this._http.get(this._url)
            .map(res=>res.json());
            
    }

    createPost(post){
       return this._http.post(this._url, JSON.stringify(post))
            .map(res=>res.json());
    }
}