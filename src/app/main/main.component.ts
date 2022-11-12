import { Component, OnInit } from '@angular/core';
import { GameMainService } from '../game-main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  stage: string = 'initial';

  constructor(private gameMainService: GameMainService) {}

  ngOnInit(): void {
    this.gameMainService.stageChanged.subscribe((curStage) => {
      this.stage = curStage;
    });
  }

  getStage() {}
}
