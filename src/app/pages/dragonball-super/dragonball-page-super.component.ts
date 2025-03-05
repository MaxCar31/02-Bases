import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { DragonballCharacterAddComponent } from "../../components/dragonball/dragonball-character-add/dragonball-character-add.component";

interface Character {
  id: number;
  name: string;
  power:number;
}

@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-page-super.component.html',
  styleUrl: './dragonball-page-super.component.css',
  imports: [CharacterListComponent, DragonballCharacterAddComponent]
})
export class DragonballSuperPageComponent {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 15000 },
    { id: 2, name: 'Vegeta', power: 8500 },

]);

 addCharacter(newCharacter: Character){
    this.characters.update(
      (list) => [...list, newCharacter]
    );
  }


}
