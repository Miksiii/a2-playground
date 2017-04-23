import { Component, OnInit }      from '@angular/core';

import { locations } from './../shared/models/offer';
import { CityService } from './city.service';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-autocomplete2',
  templateUrl: './autocomplete2.component.html',
  styleUrls: [ './autocomplete2.component.scss' ]
})
export class AutoCompleteComponent2 implements OnInit {

    dropdown : boolean = false;
    searchInput : string;
    locations : any[];

    comments : Observable<any[]>;
    searchTerms = new Subject<string>();

    constructor(private cityService : CityService) {}

    ngOnInit() {
        this.comments = this.searchTerms
                        .debounceTime(300)        // wait 300ms after each keystroke before considering the term
                        .distinctUntilChanged()   // ignore if next search term is same as previous
                        .switchMap(term => term   // switch to new observable each time the term changes
                            // return the http search observable
                            ? this.cityService.search(term)
                            // or the observable of empty heroes if there was no search term
                            : Observable.of<any[]>([]))
                        .catch(error => {
                            console.log(error);
                            return Observable.of<any[]>([]);
                        });
    }
        
    search(term : string) {
        this.searchTerms.next(term);
    }
}