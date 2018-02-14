import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CharacterService {
  httpClient
  debug = true
  server = 'http://do.jurbin.com:8080'

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  getCharacter() : Observable<any> {
    if(this.debug)
      console.log(this.server + '/character/list')

    return this.httpClient.get(this.server + '/character/list')
  }

  createCharacter(name, description, powerLevel, isVillager) : Observable<any> {
    if(this.debug)
      console.log(this.server + '/character/create/')

    const body = new HttpParams()
      .set('name', name)
      .set('description', description)
      .set('powerLevel', powerLevel)
      .set('isVillager', isVillager);

    return this.httpClient.post(this.server + '/character/create', body)
  }

  deleteCharacter(id){
    if(this.debug)
      console.log(this.server + '/character/' + id)

    return this.httpClient.delete(this.server + '/character/' + id)
  }

}
