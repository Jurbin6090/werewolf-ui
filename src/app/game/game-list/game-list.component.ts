import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  gameService
  games = [{id: "", name: ""}, {id: "", name: ""}]

  constructor(gameService: GameService) {
    this.gameService = gameService
  }

  ngOnInit() {
    this.listGames()
  }

  listGames(){
    this.gameService.getGames().subscribe(response => this.games = response)
  }

  deleteGame(id){
    this.gameService.deleteGame(id)
  }
}
