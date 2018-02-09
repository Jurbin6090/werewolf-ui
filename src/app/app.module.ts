import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterCreateComponent} from './character-create/character-create.component';
import {PlayerCreateComponent} from './player-create/player-create.component';
import {PlayerListComponent} from './player-list/player-list.component';
import {GameListComponent} from './game-list/game-list.component';
import {GameCreateComponent} from './game-create/game-create.component';
import {GameCreateService} from "./game-create/game-create.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterCreateComponent,
    PlayerCreateComponent,
    PlayerListComponent,
    GameListComponent,
    GameCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GameCreateComponent, GameCreateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
