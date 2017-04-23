import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { SearchCityRoutingModule } from './search-city-routing.module';

import { FilterCityPipe }     from  './filter-city.pipe';
import { SearchCitiesComponent } from './search-cities.component';
@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        SearchCityRoutingModule
    ],
    declarations: [
        SearchCitiesComponent, 
        FilterCityPipe
    ],
    providers: [],
    exports: [SearchCitiesComponent],
})
export class SearchCityModule {

}

