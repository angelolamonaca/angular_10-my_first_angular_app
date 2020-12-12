// Defines the root module, named AppModule, that tells Angular
// how to assemble the application.
// Initially declares only the AppComponent.
// As you add more components to the app, they must be declared here.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NbActionsModule, NbCardModule, NbListModule, NbThemeModule} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AchievementsComponent } from './achievements/achievements.component';
import {FormsModule} from '@angular/forms';
import { AchievementDetailComponent } from './achievement-detail/achievement-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import {routes} from '@nebular/auth';

@NgModule({
  declarations: [
    AppComponent,
    AchievementsComponent,
    AchievementDetailComponent,
    MessagesComponent,
    DashboardComponent,
    NewDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({name: 'cosmic'}),
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbActionsModule,
    NbCardModule,
    NbListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
