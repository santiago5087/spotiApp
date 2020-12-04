import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC_yQ_a_ewkshK-11z1n3itiPVAB23dNXDCnsEuUmOnLCFBWP0x6_VPuyYa37faJmGoW3v7eTJjWc9sf5wUXb7azhFVHTUrOXI2Z0f2Cxw9bTDIXwLiToRRRZ5nszE712a1PLapSScpay3n4AVAPivAWMzye46FkQM'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums']['items']));
  }

  getArtist(term: string): Observable<any> {
    return this.getQuery(`search?q=${term}&limit=15&type=artist`)
      .pipe(map(data => data['artists']['items']));
  }

}
