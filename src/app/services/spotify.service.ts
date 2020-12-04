import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB6qkHx0RymOmDRCoLBmlVvkxK8fhFqLFCvdlVT15xHoAQWFL18qhm4BS9D-BHQe499F4-l7KBdvhxLhij6QUuUWcWk-Rd4S35foy6E0pA835krjMPEPhowwxLBAmldoB_HfXzF9bYjOD4q9RjeoCEkklZuMhKPn44'
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers })
      .pipe(map(data => data['albums']['items']));
  }

  getArtist(term: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB6qkHx0RymOmDRCoLBmlVvkxK8fhFqLFCvdlVT15xHoAQWFL18qhm4BS9D-BHQe499F4-l7KBdvhxLhij6QUuUWcWk-Rd4S35foy6E0pA835krjMPEPhowwxLBAmldoB_HfXzF9bYjOD4q9RjeoCEkklZuMhKPn44'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&limit=15&type=artist`, { headers })
      .pipe(map(data => data['artists']['items']));
  }

}
