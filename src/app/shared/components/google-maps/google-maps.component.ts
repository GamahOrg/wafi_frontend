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

  center!: google.maps.LatLngLiteral;
  markerPositions: google.maps.LatLngLiteral[] = [];
  markerOptions: google.maps.marker.AdvancedMarkerElementOptions = { gmpDraggable: true };

  address: string='';
  private geoCoder:any;
  @ViewChild('search')
  public searchElementRef!: ElementRef;


  constructor(
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.center = { lat: this.latitude, lng: this.longitude };
    this.updateMarkerPositions();

    this.geoCoder = new google.maps.Geocoder();
    if(this.useSearch)
      this.setSearchLocation(this.latitude, this.longitude);

    this.getAddress(this.latitude, this.longitude);

    if (this.useSearch && this.searchElementRef) {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.setSearchLocation(place.geometry.location!.lat(), place.geometry.location!.lng());
        });
      });
    }
  }

  private updateMarkerPositions() {
    this.markerPositions = this.markers.map(m => ({ lat: m.lat, lng: m.lng }));
  }

  setSearchLocation(lat:number, lng:number){
    if(this.useSearch){
      this.latitude = lat;
      this.longitude = lng;
      this.center = { lat: this.latitude, lng: this.longitude };
      if(!this.markers || !this.markers.length) this.markers = [];
      this.markers[0] = {
        lat:this.latitude,
        lng:this.longitude,
        label:''
      }
      this.updateMarkerPositions();
    }
    this.locationSelected.emit(this.markers[0]);
  }

  private setCurrentLocation() {
  }

  mapClicked(event: google.maps.MapMouseEvent){
    if(event && event.latLng){
      this.setSearchLocation(event.latLng.lat(), event.latLng.lng());
    }
  }

  markerDragEnd(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.latitude = event.latLng.lat();
      this.longitude = event.latLng.lng();
      this.center = { lat: this.latitude, lng: this.longitude };
      this.getAddress(this.latitude, this.longitude);
    }
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
