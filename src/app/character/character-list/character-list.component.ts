import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../character.service";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characterService
  characters = [{"id":"","name":"", "description":"","powerLevel":0,"isVillager":true}]

  constructor(characterService: CharacterService) {
    this.characterService = characterService
  }

  ngOnInit() {
    this.getCharacters()
  }

  getCharacters(){
    this.characterService.getCharacters()
      .subscribe(response => {
        console.log(response)
        this.characters = response
        console.log('after assigning respose')
      })
    console.log('character')
    console.log(this.characters)
  }

  deleteCharacter(id){
    this.characterService.deleteCharacter(id)
      .subscribe(response => {
        console.log(response)
      })
  }

}
