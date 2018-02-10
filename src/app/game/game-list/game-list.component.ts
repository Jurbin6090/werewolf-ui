import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  gameService
  games = [{id: "", name: "Justin Durbin"}, {id: "", name: "Michael Smith"}]

  constructor(gameService: GameService) {
    this.gameService = gameService
  }

  ngOnInit() {
  }

  listGames(){
    this.gameService.getGames().subscribe(response => this.games = response)
  }

}
