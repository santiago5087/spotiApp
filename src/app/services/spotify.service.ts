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
      'Authorization': 'Bearer BQBvgqut64v4i48Abt5Q5QOLmcz76Q6vLjJxY75DgaXJ_IVznS19utQQGESLOFONKxaznTpF5B7anZdjG2Q'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums']['items']));
  }

  getArtists(term: string): Observable<any> {
    return this.getQuery(`search?q=${term}&limit=15&type=artist`)
      .pipe(map(data => data['artists']['items']));
  }

  getArtist(id: string): Observable<any> {
    return this.getQuery(`artists/${id}`);
  } 

}
