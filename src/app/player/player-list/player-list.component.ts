import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../player.service";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  playerService
  players = [{"id":"","firstName":"Justin", "lastName":"Durbin","character":null,"wins":0,"losses":0}]

  constructor(playerService: PlayerService) {
    this.playerService = playerService
  }

  ngOnInit() {
    this.getPlayers()
  }

  getPlayers(){
    this.playerService.getPlayers()
      .subscribe(response => {
        console.log(response)
        this.players = response
        console.log('after assigning respose')
      })
    console.log('players')
    console.log(this.players)
  }

  deletePlayer(id){
    this.playerService.deletePlayer(id)
      .subscribe(response => {
        console.log(response)
      })
  }
}
