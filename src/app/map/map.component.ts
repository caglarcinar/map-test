import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http'
import 'rxjs'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {

  }

  radius:number = 0;
  markers;

  lat: number = 41.9741625;
  lng: number = -87.9073214;

  dLat: number = 48.698562;
  dLng: number = -2.265789;

  displayCircle = true;
  range = this.getDistance(this.lat, this.lng, this.dLat, this.dLng)*1000;

  getDistance(lat1,lng1,lat2,lng2) {
    let R = 6371; // Radius of the earth in km
    let dLat = this.degToRad(lat2-lat1);
    let dLon = this.degToRad(lng2-lng1); 
    let a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.degToRad(lat1)) * Math.cos(this.degToRad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c; // Distance in km
    return d;
  }

  degToRad(deg){
    return deg * (Math.PI/180);
  }

  getNewPoint(){
      let params = new URLSearchParams();
      params.set('radius', String(this.radius));

    this.http.get("http://localhost:8080/mapTest/markers", {search:params})
      .map(r => r.json())
      .do(r=> console.log(r))
      .subscribe(result => this.markers = result);
  }

}
