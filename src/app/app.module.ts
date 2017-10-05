import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserNewComponent } from './components/user-new/user-new.component';

import { UserService } from './services/user/user.service';
import { UserEditComponent } from './components/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    UserListComponent,
    UserNewComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
