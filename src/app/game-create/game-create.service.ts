import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GameCreateService {
  httpClient
  server = 'http://do.jurbin.com:8080'

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  createGame(playerId) {
    this.httpClient.post('localhost:8080/game/' + playerId)
  }

  getPlayers() {
    return this.httpClient.get(this.server + '/player/list')
  }
}
