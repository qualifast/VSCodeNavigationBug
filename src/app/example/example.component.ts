import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'exp-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  @Input() colorObservable$: Observable<string>;
  @Input() textToShow: string;

  constructor() { }

  ngOnInit(): void {
  }

}
