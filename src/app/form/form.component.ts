import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IPost} from '../../models/IPost';
import {post} from 'selenium-webdriver/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private maxCharacter = 160;
  character: number = this.maxCharacter;

  style1:string = "style1";
  style2:string = "style2";
  style3:string = "style3";

  @Output()
  newPost: EventEmitter<IPost> = new EventEmitter<IPost>();

  style: string;

  textArea: string;

  constructor() { }

  ngOnInit() {
  }

  private SendNewPost(postItem : NgForm){
    if(postItem.valid) {
      let post: IPost = {
        text: postItem.value.postText,
        style: postItem.value.stile,
        creationDate: new Date()
      }
      this.newPost.emit(post);
    }
  }

  private textAreaChanged(){

    this.character = this.maxCharacter - this.textArea.length;
    if(this.character < 0){
      this.textArea = this.textArea.substring(160,this.character);
      this.character = this.maxCharacter - this.textArea.length;
    }


  }

}
