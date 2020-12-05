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

  selectedAchievement: Achievement | undefined;
  // creazione oggetto selectedAchievement che assumerá le
  // proprietá dell'interfaccia Achievements

  achievements: Achievement[] | undefined;


  constructor(private achievementService: AchievementService, private messageService: MessageService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getAchievements();
  }

  onSelect(achievement: Achievement): void {
    this.selectedAchievement = achievement;
    this.messageService.add(`AchievementsComponent: Selected achievement id=${achievement.id}`);
  }

  getAchievements(): void {
    this.achievementService.getAchievements()
      .subscribe((achievements: Achievement[] | undefined) => this.achievements = achievements);
  }
}
