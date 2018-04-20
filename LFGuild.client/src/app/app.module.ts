import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MyMaterialModule } from './utils/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResultTableComponent } from './result-table/result-table.component';
import { LfguildService } from './services/lfguild.service';
import { ClipboardService } from './services/clipboard.service';
import { CharacterService } from './services/character.service';
import { AppRoutingModule } from './app.routing.module';
import { LfguildComponent } from './lfguild/lfguild.component';
import { CharacterComponent } from './character/character.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultTableComponent,
    LfguildComponent,
    CharacterComponent,
  ],
  imports: [
    BrowserModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,


    AppRoutingModule
  ],
  providers: [
    LfguildService,
    ClipboardService,
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
