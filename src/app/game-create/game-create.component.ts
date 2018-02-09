import { Component, OnInit } from '@angular/core';
import {GameCreateService} from "./game-create.service";

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {
  selectedPlayer;
  players = [{id: "5a7cfce67e625c3d68832b8d", firstName: "Justin", lastName: "Durbin", character: null, wins: 0, losses: 0}];
  gameCreateService;

  constructor(gameCreateService: GameCreateService) {
    this.gameCreateService = gameCreateService
  }

  ngOnInit() {
    this.gameCreateService.getPlayers().subscribe(response => this.players = response)
  }

}
