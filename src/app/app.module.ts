import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { MyFormsComponent } from './components/my-forms/my-forms.component';
import {FormsModule} from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
//import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
//import {map} from 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    MyFormsComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
    //,
   // Map

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
