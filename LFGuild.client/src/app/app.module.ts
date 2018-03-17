import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MyMaterialModule } from './utils/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResultTableComponent } from './result-table/result-table.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
