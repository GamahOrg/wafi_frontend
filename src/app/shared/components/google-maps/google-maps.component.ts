import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {
  @Input() latitude: number = 24.750328230794903;
  @Input() longitude: number = 46.706400585314306;
  @Input() zoom: number = 12;
  @Input() useSearch:boolean = false;
  @Input() markers:marker[] =[]
  @Output() locationSelected = new EventEmitter<any>();

  address: string='';
  private geoCoder:any;
  @ViewChild('search')
  public searchElementRef!: ElementRef;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }
  
  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;
      if(this.useSearch)
        this.setSearchLocation(this.latitude, this.longitude);

      this.getAddress(this.latitude, this.longitude);

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.setSearchLocation(place.geometry.location.lat(),place.geometry.location.lng());
        });
      });
    });
  }
  setSearchLocation(lat:number, lng:number){
    if(this.useSearch){
      //set latitude, longitude and zoom
      this.latitude = lat;
      this.longitude = lng;
      if(!this.markers || !this.markers.length) this.markers = [];
      this.markers[0] = {
        lat:this.latitude,
        lng:this.longitude,
        label:''
      }
    }
    this.locationSelected.emit(this.markers[0]);
  }
  // Get Current Location Coordinates
  private setCurrentLocation() {
    // if ('geolocation' in navigator) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.latitude = position.coords.latitude;
    //     this.longitude = position.coords.longitude;
    //     this.zoom = 8;
    //     this.getAddress(this.latitude, this.longitude);
    //   });
    // }
    
  }

  mapClicked(event:any){
    if(event && event.coords){
      this.setSearchLocation(event.coords.lat ,event.coords.lng)
    }
  }

  markerDragEnd($event: any) {
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude:any, longitude:any) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results:any, status:any) => {
      if (status === 'OK') {
        if (results[0]) {
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

}
interface marker{
  lat:number,
  lng:number,
  label:string,
}
