import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiriShopRegComponent } from './Components/miri-shop-reg/miri-shop-reg.component';
import { FormsModule } from '@angular/forms';
import { UserDataTableComponent } from './Components/user-data-table/user-data-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './Services/API/api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MiriShopRegComponent,
    UserDataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
