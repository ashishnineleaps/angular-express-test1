import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/shared/helper.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: any = [];
  private postsSub: Subscription;
  constructor(public service: HelperService) { }
  dataSource;
  displayedColumns: string[] = ['UserID', 'ID', 'Title', 'Completed'];
  ngOnInit() {


    this.service.getPosts();
    this.postsSub = this.service.getPostUpdateListener()
      .subscribe((posts: any) => {
        this.posts.push(posts);
        this.dataSource = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
