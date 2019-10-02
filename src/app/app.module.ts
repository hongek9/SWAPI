import './polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';



@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  entryComponents: [DataDisplayComponent],
  providers: [],
  bootstrap: [AppComponent, DataDisplayComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
