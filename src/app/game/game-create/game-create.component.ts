import { Component, OnInit } from '@angular/core';
import {GameService} from "./game.service";

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {
  gameService;
  selectedPlayer;
  players = [{id: "", firstName: "", lastName: "", character: null, wins: 0, losses: 0}];

  constructor(gameService: GameService) {
    this.gameService = gameService
  }

  ngOnInit() {
    this.gameService.getPlayers().subscribe(response => this.players = response)
  }

  create(){
    this.gameService.create(this.selectedPlayer.id)
  }
}
