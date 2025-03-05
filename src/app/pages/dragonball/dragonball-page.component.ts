import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power:number;
}

@Component({
  selector: 'app-dragonball-page',
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  name = signal ('');
  power = signal (0);


  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 15000 },
/*     { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Trunks', power: 7500 },
    { id: 5, name: 'Yamcha', power: 500 },
    { id: 4, name: 'Gohan', power: 12000 }, */
]);

  powerClasses = computed(() =>{
    return {
      'text-danger':true,

    }
  })

  addCharacter(){
    if(!this.name() || !this.power() || this.power() <= 0){
      console.error('Name and power are required');
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };
    this.characters.update(
      (list) => [...list, newCharacter]
    );
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

}
