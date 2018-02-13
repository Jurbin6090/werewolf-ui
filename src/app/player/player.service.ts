import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PlayerService {
  httpClient
  debug = true
  server = 'http://do.jurbin.com:8080'

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  getPlayers() : Observable<any> {
    if(this.debug)
      console.log(this.server + '/player/list')
    return this.httpClient.get(this.server + '/player/list')
  }

  createPlayer(firstName, lastName) : Observable<any> {
    if(this.debug)
      console.log(this.server + '/player/create/')
    return this.httpClient.post(this.server + '/player/create', {firstName: firstName,lastName: lastName})
  }

  deletePlayer(id){
    if(this.debug)
      console.log(this.server + '/player/' + id)
    return this.httpClient.delete(this.server + '/player/' + id)
  }

}
