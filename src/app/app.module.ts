import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CharacterListComponent} from './character/character-list/character-list.component';
import {CharacterCreateComponent} from './character/character-create/character-create.component';
import {PlayerCreateComponent} from './player/player-create/player-create.component';
import {PlayerListComponent} from './player/player-list/player-list.component';
import {GameListComponent} from './game/game-list/game-list.component';
import {GameCreateComponent} from './game/game-create/game-create.component';
import {GameService} from "./game/game.service";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

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
    HttpClientModule,
    FormsModule
  ],
  providers: [GameCreateComponent, GameService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
