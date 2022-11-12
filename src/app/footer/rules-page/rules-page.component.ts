import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rules-page',
  templateUrl: './rules-page.component.html',
  styleUrls: ['./rules-page.component.scss'],
})
export class RulesPageComponent implements OnInit {
  @Output() closeRules = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCloseRules() {
    this.closeRules.emit();
  }
}
