import { Component, OnInit } from '@angular/core';
import { Achievement} from '../achievement';
import { AchievementService} from '../achievement.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  achievements: Achievement[] = [];

  constructor(private achievementService: AchievementService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getAchievements();
  }

  getAchievements(): void {
    this.achievementService.getAchievements()
      .subscribe(achievements => this.achievements = achievements.slice());

  }

}
