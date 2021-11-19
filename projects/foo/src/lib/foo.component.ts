import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-foo',
  template: `
    <p>
      foo works! [{{ bar }}]
    </p>
  `,
  styles: [
  ]
})
export class FooComponent implements OnInit {

  @Input() bar: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
