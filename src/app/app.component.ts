import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFeature = 'recipe';

  OnSelectedEvent(featureFromChild: string): void {
    this.loadedFeature = featureFromChild;
  }
}
