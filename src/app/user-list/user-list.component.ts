import { Component, OnInit } from '@angular/core';
import { HelperService } from '../shared/helper.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  posts = [];
  constructor(private service: HelperService) { }
  displayedColumns: string[] = ['id', 'name', 'email'];

  ngOnInit() {

    this.service.getGraphQL().subscribe((data) => {
      this.posts = data;
    });
  }
}
