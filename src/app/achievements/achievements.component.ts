import { Component, OnInit } from '@angular/core';
import { Achievement } from '../achievement'; // importa l'interfaccia
import { AchievementService } from '../achievement.service';
import { MessageService} from '../message.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  achievements: Achievement[] | undefined;

  constructor(private achievementService: AchievementService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getAchievements();
  }

  getAchievements(): void {
    this.achievementService.getAchievements()
      .subscribe(achievements => this.achievements = achievements);
  }
}
