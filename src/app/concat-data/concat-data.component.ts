import { DialogComponent } from './../shared/components/dialog/dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HelperService } from '../shared/helper.service';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatDialog } from '@angular/material';

@Component({
  selector: 'app-concat-data',
  templateUrl: './concat-data.component.html',
  styleUrls: ['./concat-data.component.css']
})
export class ConcatDataComponent implements OnInit {

  posts: any = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private postsSub: Subscription;
  private result;
  private graphQLData = [];
  private idPost;
  private resultsLength: number;
  constructor(private service: HelperService,private dialog:MatDialog) { }
  dataSource;

  displayedColumns: string[] = ['id', 'title', 'name', 'email', 'completed'];
  ngOnInit() {
    this.service.getPosts();
    this.postsSub = this.service.getPostUpdateListener()
      .subscribe((posts: any) => {
        this.posts = posts;
        this.result = this.service.getGraphQL().subscribe((data) => {
          this.graphQLData = data;
          let combinedData = [];
          for (let i = 0; i < 10; i++) {
            combinedData.push(
              {
                id: this.graphQLData[i].id,
                name: this.graphQLData[i].name,
                email: this.graphQLData[i].email,
                title: this.posts[i].title,
                requestId: this.posts[i].id,
                completed: this.posts[i].completed
              }
            )
          }
          this.dataSource = new MatTableDataSource(combinedData);
          this.dataSource.paginator = this.paginator;
          this.resultsLength = combinedData.length
        });

      });


  }

  onClickEvent(element) {
    this.service.getIdPost(element.requestId)
    this.service.getIdPostUpdateListener().subscribe(data => {
      this.idPost = data
      this.dialog.open(DialogComponent, {
        data: this.idPost,
      });
    });

  }


}
