import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameMainService } from 'src/app/game-main.service';

@Component({
  selector: 'app-final-stage',
  templateUrl: './final-stage.component.html',
  styleUrls: ['./final-stage.component.scss'],
})
export class FinalStageComponent implements OnInit {
  playerPicked = 'Scissor';
  housePicked = 'Rock';
  winner = 'YOU WIN';

  constructor(private gameMainService: GameMainService) {}

  ngOnInit(): void {
    const finalData = this.gameMainService.getFinalData();
    this.playerPicked = finalData.playerPicked;
    this.housePicked = finalData.housePicked;
    this.winner = finalData.winner;
  }

  onClickPlay() {
    this.gameMainService.onPlayAgain();
  }
}
