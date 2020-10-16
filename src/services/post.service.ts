import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, startWith} from 'rxjs/operators';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';
  initialPosts: Post[] = [
    {id: 0, title: 'test 1', userId: 1, body: 'body 1'},
    {id: 1, title: 'test 2', userId: 1, body: 'body 2'},
    {id: 2, title: 'test 3', userId: 1, body: 'body 3'},
    {id: 3, title: 'test 4', userId: 1, body: 'body 4'},
    {id: 4, title: 'test 5', userId: 1, body: 'body 5'},
  ];

  constructor(private http: HttpClient) {
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url).pipe(delay(3000), startWith(this.initialPosts));
  }
}
