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
      'Authorization': 'Bearer BQB6qkHx0RymOmDRCoLBmlVvkxK8fhFqLFCvdlVT15xHoAQWFL18qhm4BS9D-BHQe499F4-l7KBdvhxLhij6QUuUWcWk-Rd4S35foy6E0pA835krjMPEPhowwxLBAmldoB_HfXzF9bYjOD4q9RjeoCEkklZuMhKPn44'
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
