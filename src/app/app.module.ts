import { NgModule } from '@angular/core';
// we also need angular router for Nebular to function properly
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NbCardModule, NbDatepickerModule,  NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';

import { SandfoxNebuFormControlsModule } from 'sandfox-nebu-form-controls';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BelaComponent } from './bela/bela.component';
import { RocketComponent } from './rocket/rocket.component';
import { NgxMaskModule } from 'ngx-mask';
import { NbDateFnsDateModule } from '@nebular/date-fns';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot([]),

    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,

    NbCardModule,
    NbDatepickerModule.forRoot(),
    NbDateFnsDateModule,

    NgxMaskModule.forRoot(),

    SandfoxNebuFormControlsModule,
  ],
  declarations: [ AppComponent, HelloComponent, BelaComponent, RocketComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
