import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCJb_thA1vpDRGzuEFb80dRac0q-FpKKbU73FELuHwpAioZVFNPtRhGf_oZ2xkRBlFw1j_TVDuISfFVDDgTYuBrQ9VETYSLCqHYhNPDL2jufjMqXn28ROBPUraFrXhFR4HSrHH45ghs4p5qYpO1d9cGaW3K-AKIpZo'
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers });
  }

}
