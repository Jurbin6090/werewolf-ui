import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../character.service";

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css']
})
export class CharacterCreateComponent implements OnInit {
  characterService
  name
  description
  powerLevel
  isVillager

  constructor(characterService: CharacterService) {
    this.characterService = characterService
  }

  ngOnInit() {
  }

  createCharacter(){
    this.characterService.createCharacter(this.name, this.description, this.powerLevel, this.isVillager).subscribe(response => console.log(response))
  }

}
