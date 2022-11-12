import { Component, OnInit } from '@angular/core';
import { GameMainService } from '../game-main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  score: number = 0;

  constructor(private gameMainService: GameMainService) {}

  ngOnInit(): void {
    this.gameMainService.scoreChanged.subscribe((score) => {
      this.score = score;
    });
  }
}
