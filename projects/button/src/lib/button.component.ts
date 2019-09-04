import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <p>
      Button works!!!! (simple)
    </p>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
