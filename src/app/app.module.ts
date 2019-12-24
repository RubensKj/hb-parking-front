import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { RentalTermComponent } from './rental-term/rental-term.component';
import { HeaderComponent } from './header/header.component';
import { SelectpageimportComponent } from './selectpageimport/selectpageimport.component';
import { MarcaComponent } from './marca/marca.component';
import { VehicleModelComponent } from './import-model/import-model.component';

import { RentalTermService } from './rental-term/rental-term.service';
import { MarcaService } from './marca/marca.service';
import { ModelService } from './import-model/import-model.service';
import { LoginComponent } from './login/login.component';
import { LocationGarageComponent } from './location-garage/location-garage.component';


@NgModule({
  declarations: [
    AppComponent,
    RentalTermComponent,
    HeaderComponent,
    SelectpageimportComponent,
    MarcaComponent,
    VehicleModelComponent,
    LoginComponent,
    LocationGarageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    RentalTermService,
    MarcaService,
    ModelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
