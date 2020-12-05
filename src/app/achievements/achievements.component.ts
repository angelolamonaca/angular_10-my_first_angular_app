import { Component, OnInit } from '@angular/core';
import { Achievement } from '../achievement';
import { ACHIEVEMENTS} from '../mock-achievements';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  achievements = ACHIEVEMENTS;

  selectedAchievement: Achievement | undefined;
  onSelect(achievement: Achievement): void {
    this.selectedAchievement = achievement;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
