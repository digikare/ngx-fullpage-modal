import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFullpageModalModule } from '@digikare/ngx-fullpage-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxFullpageModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
