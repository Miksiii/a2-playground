import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { AutoCompleteComponent2 } from './autocomplete2.component';
import { CityService } from './city.service';
import { FilterCityPipe } from './filter-city.pipe';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [AutoCompleteComponent2, FilterCityPipe],
    providers: [CityService],
    exports: [AutoCompleteComponent2],
})
export class AutoCompleteModule2 {

}

