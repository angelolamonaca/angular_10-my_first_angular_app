// Defines the root module, named AppModule, that tells Angular
// how to assemble the application.
// Initially declares only the AppComponent.
// As you add more components to the app, they must be declared here.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AchievementsComponent } from './achievements/achievements.component';
import {FormsModule} from '@angular/forms';
import { AchievementDetailComponent } from './achievement-detail/achievement-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    AchievementsComponent,
    AchievementDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
