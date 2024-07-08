import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() newGameEvent = new EventEmitter<void>();

  @Output() showResultsEvent = new EventEmitter<void>();

  newGameClicked() {
    this.newGameEvent.emit();
  }

  showResultsClicked() {
    this.showResultsEvent.emit();
  }
}
