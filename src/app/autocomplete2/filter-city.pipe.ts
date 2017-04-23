import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterCity'})
export class FilterCityPipe implements PipeTransform {
    
    transform(cities: any[], searchInput : string) {
        if (searchInput === undefined || searchInput === '') 
            return cities;

        let search = searchInput.toLowerCase()
        
        return cities.filter(city => 
            city.name.toLowerCase().includes(searchInput.toLowerCase())
        );
    }

}