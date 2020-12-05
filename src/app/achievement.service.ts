import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Achievement } from './achievement';
import { ACHIEVEMENTS } from './mock-achievements';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class AchievementService {

  constructor(private messageService: MessageService) { }

  getAchievements(): Observable<Achievement[]> {
    // TODO: send the message _after_ fetching the achievements
    this.messageService.add('AchievementService: fetched achievements');
    return of(ACHIEVEMENTS);
  }
}
