import { environment } from './../../environments/environment';
import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Post, Query } from '../user-list/shared/all-users.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private posts: any = [];
  private concatedData = [];
  public result;
  private postsId;
  private postsUpdated = new Subject<Post[]>();
  private postsIdUpdated = new Subject();
  allUsers: Observable<Post[]>;

  constructor(private http: HttpClient, private apollo: Apollo) {

  }

  getGraphQL() {
    return this.posts = this.apollo.watchQuery<Query>({
      query: gql`
      query {
        allUsers {
          id
          email
          name
        }
      }
      `,
    })
      .valueChanges
      .pipe(
        map(result => result.data.allUsers)
      );
  }

  getPosts() {
    this.http.get(environment.BASE_URL + 'getAPIResponse').subscribe((postData) => {

      this.posts = postData;
      this.postsUpdated.next([...this.posts]);

    });
  }
  getIdPost(id) {

    this.http.get(`${environment.BASE_URL}getQueryResponse?id=${id}`).subscribe((postData) => {
      this.postsId = postData;
      this.postsIdUpdated.next(this.postsId);
    });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
  getIdPostUpdateListener() {
    return this.postsIdUpdated.asObservable();
  }
}
