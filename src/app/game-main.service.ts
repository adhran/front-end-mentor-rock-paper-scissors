import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameMainService {
  stage = 'initial';
  stageChanged = new EventEmitter<string>();
  finalData = {
    playerPicked: '',
    housePicked: '',
    winner: '',
  };

  game = { 1: 'Rock', 2: 'Paper', 3: 'Scissor' };
  gameWinner = {
    Rock: 'Scissor',
    Paper: 'Rock',
    Scissor: 'Paper',
  };
  score = 0;
  scoreChanged = new EventEmitter<number>();

  constructor() {}

  getPlayerPicked(data: string) {
    this.stage = 'housePicking';
    this.stageChanged.emit(this.stage);

    this.finalData.playerPicked = data;
    setTimeout(() => {
      this.stage = 'final';
      this.stageChanged.emit(this.stage);
      this.randPickHouse();
    }, 2000);
  }

  randPickHouse() {
    let x = Math.floor(Math.random() * 3 + 1);

    for (const [key, value] of Object.entries(this.game)) {
      if (x === +key) {
        this.finalData.housePicked = value;
      }
    }

    this.pickWinner();
  }

  pickWinner() {
    for (const [key, value] of Object.entries(this.gameWinner)) {
      if (
        this.finalData.playerPicked === key &&
        this.finalData.housePicked === value
      ) {
        this.score++;
        this.scoreChanged.emit(this.score);
        this.finalData.winner = 'YOU WIN';
        return;
      }
      if (
        this.finalData.housePicked === key &&
        this.finalData.playerPicked === value
      ) {
        if (this.score > 0) this.score--;
        this.scoreChanged.emit(this.score);

        this.finalData.winner = 'YOU LOSE';
        return;
      }
    }

    this.finalData.winner = 'Draw';
  }
  onPlayAgain() {
    this.stage = 'initial';
    this.stageChanged.emit(this.stage);
  }

  getFinalData() {
    return this.finalData;
  }
}
