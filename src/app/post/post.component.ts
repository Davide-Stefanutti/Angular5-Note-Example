import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from '../../models/IPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  posts: IPost[];
  @Output()
  deletePost: EventEmitter<IPost> = new EventEmitter<IPost>();





  constructor() {  }

  ngOnInit() {
  }

  private delete(post: IPost){
    this.deletePost.emit(post);
  }

}
