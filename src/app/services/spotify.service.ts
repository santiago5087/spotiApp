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
      'Authorization': 'Bearer BQCH4VJgQRI6Wsk_tulowUFfqLFGgJn-SIRP8A7A4NMPYXoSC92Ofc5-r58Poet-W4a8DPgx6DpXMpE0ilE'
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

  getTopTracks(id: string): Observable<any> {
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
      .pipe(map(data => data['tracks']));
  }

}
