import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GameService {
  httpClient
  server = 'http://do.jurbin.com:8080'

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  getGames() :Observable{
    return this.httpClient.get(this.server + '/game/list')
  }

  createGame(playerId) :Observable {
    this.httpClient.post(this.server + '/games' + playerId)
  }

  getPlayers() :Observable {
    return this.httpClient.get(this.server + '/player/list')
  }
}
