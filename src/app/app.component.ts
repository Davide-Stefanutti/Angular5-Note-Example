import {Component} from '@angular/core';
import {IPost} from '../models/IPost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  posts: IPost[] = [];

  constructor(){
    let JPosts = localStorage.getItem("Posts");
    if(JPosts){
      this.posts = JSON.parse(JPosts);
    }
  }


  public newPost(post:IPost){
    this.posts.push(post);
    this.save();
    console.log(post);
  }

  private delete(post:IPost){
    let index = this.posts.findIndex(d => d.creationDate == post.creationDate );

    if(index != -1){
      this.posts.splice(index,1);
      this.save();
    }
  }

  private save(){
    localStorage.setItem("Posts", JSON.stringify(this.posts));
  }


}


