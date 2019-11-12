import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule
} from '@angular/material';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './todos/post-list/post-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { GraphQLModule } from '../app/user-list/graphql.module';
import { AppRoutingModule } from './app-routing.module';
import { HelperService } from './shared/helper.service';
import { ConcatDataComponent } from './concat-data/concat-data.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    UserListComponent,
    ConcatDataComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    GraphQLModule,
    AppRoutingModule,
    MatTabsModule,
    MatTableModule
  ],
  entryComponents:[DialogComponent],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule {}
