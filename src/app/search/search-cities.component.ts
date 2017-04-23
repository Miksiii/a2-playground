import { Component, OnInit, ElementRef, ViewChild, Renderer}      from '@angular/core';

import { locations } from './../shared/models/offer';

@Component({
  selector: 'mh-simple-search',
  templateUrl: './search-cities.component.html',
  styleUrls: [ './search-cities.component.scss' ],
  host: {
      '(document:click)':  'onClick($event)'
  }
})
export class SearchCitiesComponent implements OnInit {

    @ViewChild('searchBox') autocompleteSearchBox;

    isDropdownButtonSelectable : boolean = true;
    selectedCity : string;
    selectedCityCopy : string;
    isDropdownActive : boolean = false;
    searchInput : string;
    locations : any[];

    constructor(
        private eref: ElementRef, 
        private renderer : Renderer
    ) {}

    ngOnInit() {
        this.locations = locations;
    }

    /**
     * 
     */
    showDropdown() {
        this.isDropdownActive = true;
        this.isDropdownButtonSelectable = false; 
        
        // reset selectedCity model but firstly store a copy
        this.selectedCityCopy = this.selectedCity;
        this.selectedCity = undefined;

        // make searchbox focusable once a dropdown is active
        // setTimeout gives a time for focusable to be set
        setTimeout( () => {
            this.renderer.invokeElementMethod(this.autocompleteSearchBox.nativeElement, 'focus', [])
        });
    }

    hideDropdown() {
        this.isDropdownActive = false;
        this.isDropdownButtonSelectable = true;

        // reset searchInput because we don't want our list
        // to be pre-filtered once the dropdown is opened
        this.searchInput = "";
    }

    setSelectedCityName(name : string) {
        this.selectedCity = name;
        this.hideDropdown();
    }

    /**
     * We are using the host onClick method to detect user clicks.
     * If he clicks outside of the dropdown then we want it disappear.
     * 
     * @param event 
     */
    onClick(event) {
        if(this.eref.nativeElement === event.target){
            this.isDropdownActive = false;
            this.isDropdownButtonSelectable = true;
            this.searchInput = "";

            // if dropdown is being closed with no selection then we 
            // want to use the previously created city name copy and 
            // make it selected.
            if(this.selectedCityCopy)
                this.selectedCity = this.selectedCityCopy;
        }
    }

    /** 
     * When user types something in the searchbox we wait for
     * a 250ms for a value to be set because of the better ux
     * 
     * @param event
     */
    search(event) {
        setTimeout( () => {
            this.searchInput = event.target.value;
        }, 250);
    }
}
