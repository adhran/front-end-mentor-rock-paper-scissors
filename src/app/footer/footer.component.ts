import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

const existTransition = transition(':leave', [
  style({ opacity: 1 }),
  animate('300ms ease-out', style({ opacity: 0 })),
]);
const fadeOut = trigger('fadeOut', [existTransition]);

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [fadeOut],
})
export class FooterComponent implements OnInit {
  openRules = false;
  constructor() {}

  ngOnInit(): void {}

  onClickRules() {
    this.openRules = !this.openRules;
  }
}
