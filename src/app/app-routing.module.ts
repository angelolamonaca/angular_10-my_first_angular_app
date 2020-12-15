import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchievementsComponent} from './achievements/achievements.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AchievementDetailComponent} from './achievement-detail/achievement-detail.component';
import {AddAchievementComponent} from "./add-achievement/add-achievement.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: AchievementDetailComponent },
  { path: 'add-achievement', component: AddAchievementComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
