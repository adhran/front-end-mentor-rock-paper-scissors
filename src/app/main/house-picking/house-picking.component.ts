import { Component, OnInit } from '@angular/core';
import { GameMainService } from 'src/app/game-main.service';

@Component({
  selector: 'app-house-picking',
  templateUrl: './house-picking.component.html',
  styleUrls: ['./house-picking.component.scss'],
})
export class HousePickingComponent implements OnInit {
  isHousePicking = true;
  playerPicked: string | undefined;

  constructor(private gameMainService: GameMainService) {}

  ngOnInit(): void {
    if (this.gameMainService.stage === 'housePicking')
      this.isHousePicking = true;
    this.playerPicked = this.gameMainService.finalData.playerPicked;
  }
}
