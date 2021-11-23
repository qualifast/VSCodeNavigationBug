import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'exp-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

  @Input() colorObservable$: Observable<string>;

  constructor() { }

}
