import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesperadoComponent } from './desperado/desperado.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BirthdaySecondsComponent } from './birthday-seconds/birthday-seconds.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import localeSwedish from '@angular/common/locales/se-SE';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeSwedish);



@NgModule({
  declarations: [
    AppComponent,
    DesperadoComponent,
    NavbarComponent,
    WelcomeComponent,
    BirthdaySecondsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [ 
    //{ provide: LOCALE_ID, useValue: 'sv-SE' } 
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
