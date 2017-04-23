import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { SearchCitiesComponent } from './search-cities.component';

export const ROUTES = [
    {
        path: 'search',
        component: SearchCitiesComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class SearchCityRoutingModule {}