import { Component, OnInit } from '@angular/core';
import { GameMainService } from 'src/app/game-main.service';

@Component({
  selector: 'app-initial-stage',
  templateUrl: './initial-stage.component.html',
  styleUrls: ['./initial-stage.component.scss'],
})
export class InitialStageComponent implements OnInit {
  playerPicked: string | undefined;
  constructor(private gameMainService: GameMainService) {}

  ngOnInit(): void {}

  playerOnClick(data: string) {
    this.playerPicked = data;

    this.gameMainService.getPlayerPicked(data);
    setTimeout(() => {}, 2000);
  }
}
