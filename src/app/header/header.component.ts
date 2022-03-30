import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() featuredSelected = new EventEmitter<string>();
  //  note: data tranfer from child to parent
  OnSelect(feature: string) {
    if (feature === 'recipe') {
      this.featuredSelected.emit(feature);
    } else if (feature === 'shopping-list') {
      this.featuredSelected.emit(feature);
    }
  }
}
