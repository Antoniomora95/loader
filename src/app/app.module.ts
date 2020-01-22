import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Link1Component } from './pages/link1/link1.component';
import { Link2Component } from './pages/link2/link2.component';
import { Link3Component } from './pages/link3/link3.component';
import { Link4Component } from './pages/link4/link4.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    Link1Component,
    Link2Component,
    Link3Component,
    Link4Component,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
