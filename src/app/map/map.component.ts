import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import * as L from "leaflet";
import { GeocodingService } from "../geocoding.service";
import { MapService } from "../map.service";
import { Location } from "../location";

import "rxjs/add/operator/catch";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  address: string;

  constructor(
    private mapService: MapService,
    private geocoder: GeocodingService
  ) {
    this.address = "";
  }

  ngOnInit() {
    this.geocoder
      .getClientLocation()
      .catch(err => {
        console.error(err);

        // default map location
        const location = new Location();
        location.address =
          "Lyon, Métropole de Lyon, Circonscription départementale du Rhône, Auvergne-Rhône-Alpes, France métropolitaine, France";
        location.latlng = L.latLng(45.764, 4.8357);

        return Observable.of(location);
      })
      .subscribe((location: Location) => {
        const map = L.map("map", {
          zoomControl: false,
          center: location.latlng,
          zoom: 12,
          minZoom: 4,
          maxZoom: 19,
          layers: [
            L.tileLayer(
              "http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
              {
                zIndex: 1,
                attribution:
                  "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>, " +
                  "Tiles courtesy of <a href='http://hot.openstreetmap.org/' target='_blank'>Humanitarian OpenStreetMap Team</a>"
              }
            )
          ]
        });

        L.control.zoom({ position: "topright" }).addTo(map);
        L.control.layers(this.mapService.baseMaps).addTo(map);
        L.control.scale().addTo(map);

        this.address = location.address;
        this.mapService.map = map;

        this.mapService.updateMarkers(dataSample);
      });

    let dataSample = [
      {
        lat: 45.75702922677463,
        lng: 4.83249843120575,
        stories: [
          {
            id: 1,
            title: "aux fleurs du sud",
            description: "c'est blindé de fleurs",
            content: "et tu peux en cueillir",
            date: {
              year: 2018,
              month: 4,
              day: 25
            }
          }
        ]
      },
      {
        lat: 45.75854877000632,
        lng: 4.825798273086549,
        stories: [
          {
            id: 1,
            title: "Eglise évangélique du vieux lyon",
            description: "ils y ont fait des orgies !",
            content: "et y avait même des vaches :O",
            date: {
              year: -200,
              month: 4,
              day: 25
            }
          }
        ]
      },
      {
        lat: 45.759368407918835,
        lng: 4.847566494192455,
        stories: [
          {
            id: 1,
            title: "A la place guichard on mangeait des quiches",
            description:
              "quiches au lard, au gruyère et au poivre d'andalousie",
            content:
              "il parait qu'il y avait aussi des morceaux de cadavres humains",
            date: {
              year: 2018,
              month: 4,
              day: 25
            }
          }
        ]
      }
    ];
  }
}
