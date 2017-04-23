import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

export const ROUTES = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    }, 
    {
        path: 'main',
        component: AppComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}