import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../player.service";

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  playerService

  constructor(playerService: PlayerService) {
    this.playerService = playerService
  }

  ngOnInit() {
  }

}
