import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../character.service";

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css']
})
export class CharacterCreateComponent implements OnInit {
  characterService

  constructor(characterService: CharacterService) {
    this.characterService = characterService
  }

  ngOnInit() {
  }

}
