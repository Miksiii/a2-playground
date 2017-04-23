import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Injectable()
export class CityService {

    constructor() {

    }

    getResults(term : string) : Promise<any[]>{
        console.log(term);
        return null;
    }
}