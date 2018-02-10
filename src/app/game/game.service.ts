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

  getGames() : Observable<any> {
    return this.httpClient.get(this.server + '/game/list')
  }

  createGame(playerId) : Observable<any> {
    return this.httpClient.post(this.server + '/games' + playerId)
  }

  getPlayers() : Observable<any>{
    return this.httpClient.get(this.server + '/player/list')
  }
}
