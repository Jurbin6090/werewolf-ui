import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../player.service";

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  playerService
  firstName
  lastName

  constructor(playerService: PlayerService) {
    this.playerService = playerService
  }

  ngOnInit() {
  }

  createPlayer(){
    this.playerService.createPlayer(this.firstName, this.lastName).subscribe(response => console.log(response))
  }

}
