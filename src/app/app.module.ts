import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Custom
import { SearchCityModule } from './search/search-city.module';
import { AutoCompleteModule2 } from './autocomplete2/autocomplete2.module';
import { HeaderComponent } from './header.component';
import { ExponentPipe } from './shared/pipes/exponent.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ExponentPipe,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    SearchCityModule,
    AutoCompleteModule2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
