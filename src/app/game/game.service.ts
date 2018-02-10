import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GameService {
  httpClient
  server = 'http://do.jurbin.com:8080'

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  getGames(){
    return this.httpClient.get(this.server + '/game/list')
  }

  createGame(playerId) {
    this.httpClient.post(this.server + '/games' + playerId)
  }

  getPlayers() {
    return this.httpClient.get(this.server + '/player/list')
  }
}
