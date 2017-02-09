import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MapComponent }   from './map.component';

@NgModule({
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD-_r7Xvib58bx-ZFG1r_ll1kze7AhBIlo'
        }),
        HttpModule,
        FormsModule,
        BrowserModule
        ],
    exports: [MapComponent],
    declarations: [MapComponent],
    providers: [],
})
export class MapModule { }
