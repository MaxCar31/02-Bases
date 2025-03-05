import { ChangeDetectionStrategy, Component, signal, output } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballCharacterAddComponent {

  name = signal ('');
  power = signal (0);

  newCharacter = output<Character>();

  addCharacter(){
    if(!this.name() || !this.power() || this.power() <= 0){
      alert('Name and power are required');
      return;
    }
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    };
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }


}
