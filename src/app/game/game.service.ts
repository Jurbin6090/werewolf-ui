import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GameService {
  debug = true
  httpClient
  server = 'http://do.jurbin.com:8080'

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  getGames() : Observable<any> {
    if(this.debug)
      console.log(this.server + '/game/list')
    return this.httpClient.get(this.server + '/game/list')
  }

  createGame(playerId) : Observable<any> {
    if(this.debug)
      console.log(this.server + '/game/create/' + playerId)
    return this.httpClient.post(this.server + '/game/create/' + playerId)
  }

  getPlayers() : Observable<any>{
    if(this.debug)
      console.log(this.server + '/player/list')
    return this.httpClient.get(this.server + '/player/list')
  }

  deleteGame(id){
    if(this.debug)
      console.log(this.server + '/game/' + id)
    return this.httpClient.delete(this.server + '/game/' + id)
  }
}
