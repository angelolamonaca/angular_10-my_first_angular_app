import { Component, OnInit, Input } from '@angular/core';
import { Achievement } from '../achievement';
import { ActivatedRoute} from '@angular/router';
import { AchievementService} from '../achievement.service';
import { Location} from '@angular/common';

@Component({
  selector: 'app-achievement-detail',
  templateUrl: './achievement-detail.component.html',
  styleUrls: ['./achievement-detail.component.scss']
})


export class AchievementDetailComponent implements OnInit {
  achievement: Achievement | undefined;

  constructor(
    private route: ActivatedRoute,
    private achievementService: AchievementService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getAchievement();
  }

  getAchievement(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.achievementService.getAchievement(id)
      .subscribe(achievement => this.achievement = achievement);
  }

  goBack(): void {
    this.location.back();
  }

}
