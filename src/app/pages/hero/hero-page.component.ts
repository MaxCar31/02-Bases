import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]
})

  export class HeroPageComponent {

    name = signal('Ironman')
    age = signal(45)

    heroDescription = computed(() => {
      const description = `${this.name()} - ${this.age()}`;
      return description;
    });



    changeHero(): void {
      this.name.set('Spiderman') ;
    }
    changeAge(): void {
      this.age.set(30);
    }
    resetForm():void {
      this.name.set('ironman');
      this.age.set(45);
    }
  }

