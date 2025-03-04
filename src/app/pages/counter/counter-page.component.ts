import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter-page.component.html',
})

export class CounterPageComponent {

counter = 10;
counterSignal = signal(10);

constructor() {}


  increaseby(value:number): void {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  resetCounter(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
