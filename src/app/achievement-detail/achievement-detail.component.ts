import { Component, OnInit, Input } from '@angular/core';
import { Achievement } from '../achievement';

@Component({
  selector: 'app-achievement-detail',
  templateUrl: './achievement-detail.component.html',
  styleUrls: ['./achievement-detail.component.scss']
})


export class AchievementDetailComponent implements OnInit {

  @Input() achievement: Achievement | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
