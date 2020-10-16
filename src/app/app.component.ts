import {Component} from '@angular/core';
import {Post, PostService} from '../services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-local-cache-copy';
  posts: Post[];

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(res => {
      this.posts = res;
    });
  }
}
