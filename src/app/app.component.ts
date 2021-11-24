import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular13-vscode';
  colorSubject = new BehaviorSubject<string>("red");
  colorObservable$ = this.colorSubject.asObservable();
}
