import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-fullpage-modal-repo';
  show = false;
  showExample1 = false;
  showExample2 = false;
  onShowModalEx1() {
    this.showExample1 = !this.showExample1;
  }
  onShowModalEx2() {
    this.showExample2 = !this.showExample2;
  }
}
